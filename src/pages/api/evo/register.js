import { createClient } from '@supabase/supabase-js';

// This is a server-side API route — never prerender it
export const prerender = false;

export const POST = async ({ request }) => {
  const supabaseUrl = import.meta.env.SUPABASE_URL || process.env.SUPABASE_URL;
  const supabaseKey = import.meta.env.SUPABASE_SERVICE_ROLE_KEY || import.meta.env.SUPABASE_ANON_KEY || process.env.SUPABASE_SERVICE_ROLE_KEY;
  const supabase = createClient(supabaseUrl, supabaseKey);

  try {
    const data = await request.json();

    // 1. Basic Validation
    if (!data.schoolName || !data.presidentName || !data.presidentContact || !data.captainName || !data.captainContact || !data.emailAddress) {
      return new Response(
        JSON.stringify({ error: 'Missing required fields' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    if (!data.confirmation) {
      return new Response(
        JSON.stringify({ error: 'You must confirm you are an official representative.' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // 2. Format Contact Numbers (Ensure +94 prefix)
    const formatPhone = (phone) => {
      let p = phone.trim();
      if (!p.startsWith('+94')) {
        if (p.startsWith('0')) p = p.substring(1);
        p = '+94' + p;
      }
      return p;
    };

    let presidentContact = formatPhone(data.presidentContact);
    let micContact = data.micContact ? formatPhone(data.micContact) : null;
    let captainContact = formatPhone(data.captainContact);

    // 3. Insert into Supabase
    const { error } = await supabase
      .from('evo_registrations')
      .insert([
        {
          school_name: data.schoolName,
          president_name: data.presidentName,
          president_contact: presidentContact,
          mic_name: data.micName,
          mic_contact: micContact,
          captain_name: data.captainName,
          captain_contact: captainContact,
          captain_subject: data.captainSubject,
          member1_name: data.member1Name,
          member1_subject: data.member1Subject,
          member2_name: data.member2Name,
          member2_subject: data.member2Subject,
          member3_name: data.member3Name,
          member3_subject: data.member3Subject,
          email: data.emailAddress,
          confirmed: data.confirmation === true || data.confirmation === 'on',
        },
      ]);

    if (error) {
      console.error('Supabase Error:', error);
      return new Response(
        JSON.stringify({ error: 'Database submission failed: ' + error.message }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // 4. Success Response
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

export const GET = () => {
  return new Response('Method not allowed', { status: 405 });
};
