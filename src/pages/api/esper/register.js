import { createClient } from '@supabase/supabase-js';

// This is a server-side API route — never prerender it
export const prerender = false;

export const POST = async ({ request }) => {
  // Use process.env (runtime) NOT import.meta.env (build-time).
  // Astro/Vite bakes import.meta.env at build time — if the var isn't set
  // in Vercel at build time it becomes the string "undefined" (truthy!),
  // which bypasses the || fallback, crashes createClient synchronously, and
  // causes Astro to emit an empty 500 body (hence: Unexpected end of JSON input).
  const rawUrl = process.env.ESPER_SUPABASE_URL || process.env.SUPABASE_URL;
  const supabaseUrl = (rawUrl && rawUrl.startsWith('http'))
    ? rawUrl
    : 'https://fdvjeotonmwizfgakeiq.supabase.co'; // fallback — URL is not secret

  const supabaseKey = process.env.ESPER_SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_SERVICE_ROLE_KEY;

  // Diagnose missing env vars
  console.log('[esper/register] env check:', {
    supabaseUrl,
    hasKey: !!supabaseKey,
    isDedicatedEsper: !!process.env.ESPER_SUPABASE_SERVICE_ROLE_KEY,
  });

  if (!supabaseKey) {
    console.error('[esper/register] ESPER_SUPABASE_SERVICE_ROLE_KEY is not set in Vercel env vars');
    return new Response(
      JSON.stringify({ error: 'Server misconfiguration: database key missing. Contact admin.' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }

  const supabase = createClient(supabaseUrl, supabaseKey);
  try {
    const contentType = request.headers.get('content-type') || '';
    let data = {};
    const fileUploads = {};

    if (contentType.includes('multipart/form-data')) {
      const formData = await request.formData();
      for (const [key, value] of formData.entries()) {
        if (value && typeof value === 'object' && typeof value.arrayBuffer === 'function' && value.size > 0) {
          fileUploads[key] = value;
        } else if (typeof value === 'string') {
          data[key] = value;
        }
      }
    } else {
      data = await request.json();
    }

    // 1. Basic Validation
    const contactRaw = (data.contactNumber || data.applicantPhone || '').trim();
    const email = (data.emailAddress || '').trim();
    const category = (data.awardCategory || '').trim();

    if (!email || !contactRaw || !category) {
      return new Response(
        JSON.stringify({ error: 'Missing required fields' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // 2. Format Contact Number (Ensure +94 prefix)
    let contactNumber = contactRaw;
    if (!contactNumber.startsWith('+94')) {
      // Remove leading zero if present
      if (contactNumber.startsWith('0')) {
        contactNumber = contactNumber.substring(1);
      }
      contactNumber = '+94' + contactNumber;
    }

    // 3. Determine target table & record structure
    const isIntra = ['young-inventor', 'article-writer'].includes(category) || data.registrationType === 'intra';
    const isOpen = ['build-team', 'short-film', 'photographer'].includes(category) || data.registrationType === 'open';

    let targetTable = 'esper_inter_registrations';

    if (isIntra) {
      targetTable = 'esper_intra_registrations';
    } else if (isOpen) {
      targetTable = 'esper_open_registrations';
    } else {
      targetTable = 'esper_inter_registrations';
    }

    // Upload files to Supabase Storage bucket 'esper-uploads' if present
    for (const [field, file] of Object.entries(fileUploads)) {
      try {
        const cleanName = (file.name || 'file').replace(/[^a-zA-Z0-9._-]/g, '_');
        const storagePath = `${targetTable}/${Date.now()}_${cleanName}`;
        const arrayBuffer = await file.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);

        const { error: uploadError } = await supabase.storage
          .from('esper-uploads')
          .upload(storagePath, buffer, {
            contentType: file.type || 'application/octet-stream',
            upsert: true,
          });

        if (!uploadError) {
          const { data: urlData } = supabase.storage
            .from('esper-uploads')
            .getPublicUrl(storagePath);
          data[`${field}Url`] = urlData?.publicUrl || '';
          data[`${field}Name`] = file.name;
        } else {
          console.error(`[esper/register] Upload failed for ${field}:`, uploadError);
        }
      } catch (uploadErr) {
        console.error(`[esper/register] File processing error:`, uploadErr);
      }
    }

    let record = {};

    if (isIntra) {
      record = {
        applicant_name: (data.applicantName || '').trim(),
        grade: (data.grade || '').trim(),
        contact_number: contactNumber,
        email: email,
        award_category: category,
        drive_link: (data.inventorDriveLink || data.articleDocLink || '').trim(),
        confirmed: data.confirmation === true || data.confirmation === 'on',
        submission_data: data,
      };
    } else if (isOpen) {
      record = {
        applicant_name: (data.applicantName || '').trim(),
        age: data.age ? parseInt(data.age, 10) : null,
        contact_number: contactNumber,
        email: email,
        award_category: category,
        drive_link: (data.photographerPhotoUrl || data.buildTeamPdfUrl || data.buildTeamDriveLink || data.shortFilmDriveLink || '').trim(),
        description: (data.photoDescription || '').trim(),
        confirmed: data.confirmation === true || data.confirmation === 'on',
        submission_data: data,
      };
    } else {
      record = {
        school_name: (data.schoolName || '').trim(),
        president_name: (data.presidentName || '').trim(),
        contact_number: contactNumber,
        email: email,
        award_category: category,
        confirmed: data.confirmation === true || data.confirmation === 'on',
        submission_data: data,
      };
    }

    // 4. Insert into Supabase (with fallback if 3 separate tables aren't created yet)
    let { error } = await supabase.from(targetTable).insert([record]);

    // PostgreSQL error 42P01 = table does not exist
    if (error && error.code === '42P01') {
      console.warn(`[esper/register] Table ${targetTable} does not exist, falling back to esper_registrations`);
      const fallbackRecord = {
        school_name: record.school_name || (isIntra ? 'D. S. Senanayake College' : record.applicant_name) || 'Open Category',
        president_name: record.president_name || (record.applicant_name ? (record.grade ? `${record.applicant_name} (${record.grade})` : record.applicant_name) : ''),
        contact_number: contactNumber,
        email: email,
        award_category: category,
        confirmed: record.confirmed,
      };
      const fallbackRes = await supabase.from('esper_registrations').insert([fallbackRecord]);
      error = fallbackRes.error;
    }

    if (error) {
      console.error('Supabase Error:', error);
      return new Response(
        JSON.stringify({ error: 'Database submission failed' }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // 3. Success Response
    return new Response(
      JSON.stringify({ success: true, message: 'Registration submitted successfully!' }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );

  } catch (err) {
    console.error('Server Error:', err);
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};

// Export GET as well if needed to prevent 405 on simple tests
export const GET = () => {
    return new Response("Method not allowed", { status: 405 });
}
