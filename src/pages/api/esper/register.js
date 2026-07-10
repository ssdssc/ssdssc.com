import { createClient } from '@supabase/supabase-js';

// This is a server-side API route — never prerender it
export const prerender = false;

export const POST = async ({ request }) => {
  // Initialize Supabase client at request time so env vars are available
  const supabaseUrl = import.meta.env.SUPABASE_URL || process.env.SUPABASE_URL;
  const supabaseKey = import.meta.env.SUPABASE_SERVICE_ROLE_KEY || import.meta.env.SUPABASE_ANON_KEY || process.env.SUPABASE_SERVICE_ROLE_KEY;
  const supabase = createClient(supabaseUrl, supabaseKey);
  try {
    const data = await request.json();

    // 1. Basic Validation
    if (!data.schoolName || !data.emailAddress || !data.contactNumber || !data.awardCategory) {
      return new Response(
        JSON.stringify({ error: 'Missing required fields' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // 2. Format Contact Number (Ensure +94 prefix)
    let contactNumber = data.contactNumber.trim();
    if (!contactNumber.startsWith('+94')) {
      // Remove leading zero if present
      if (contactNumber.startsWith('0')) {
        contactNumber = contactNumber.substring(1);
      }
      contactNumber = '+94' + contactNumber;
    }

    // 2. Insert into Supabase
    const { error } = await supabase
      .from('esper_registrations')
      .insert([
        {
          school_name: data.schoolName,
          president_name: data.presidentName,
          contact_number: contactNumber,
          email: data.emailAddress,
          award_category: data.awardCategory,
          confirmed: data.confirmation === true || data.confirmation === 'on',
        },
      ]);

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
