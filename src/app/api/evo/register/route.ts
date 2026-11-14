import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";
import { NextResponse } from "next/server";

const SUBJECT_MAP: Record<string, string> = {
  Physics: "physics",
  Chemistry: "chemistry",
  Biology: "biology",
  "Combined Maths": "maths",
};

const SUBJECT_SHORT: Record<string, string> = {
  physics: "PHY",
  chemistry: "CHE",
  biology: "BIO",
  maths: "MAT",
};

const SUBJECT_LABEL: Record<string, string> = {
  physics: "Physics",
  chemistry: "Chemistry",
  biology: "Biology",
  maths: "Combined Maths",
};

const CODE_CHARS = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";

function generateCode(subjectSlug: string) {
  const prefix = SUBJECT_SHORT[subjectSlug] ?? "XXX";
  let suffix = "";
  for (let i = 0; i < 4; i++) {
    suffix += CODE_CHARS[Math.floor(Math.random() * CODE_CHARS.length)];
  }
  return `${prefix}-${suffix}`;
}

async function generateUniqueCode(supabase: any, subjectSlug: string) {
  for (let attempt = 0; attempt < 20; attempt++) {
    const code = generateCode(subjectSlug);
    const { data } = await supabase
      .from("members")
      .select("id")
      .eq("access_code", code)
      .maybeSingle();
    if (!data) return code;
  }
  throw new Error(`Could not generate unique code for ${subjectSlug} after 20 attempts`);
}

function formatPhone(phone?: string) {
  let p = (phone || "").trim();
  if (!p) return null;
  if (!p.startsWith("+94")) {
    if (p.startsWith("0")) p = p.substring(1);
    p = "+94" + p;
  }
  return p;
}

function buildEmailHtml({
  schoolName,
  members,
  quizUrl,
}: {
  schoolName: string;
  members: any[];
  quizUrl: string;
}) {
  const rows = members
    .map(
      (m) => `
    <tr class="codes-row">
      <td style="padding:12px 16px;border-bottom:1px solid #f0f0f0;font-size:14px;color:#111;">${m.name}${
        m.isCaptain
          ? ' <span style="font-size:11px;color:#6366f1;font-weight:600;">(Captain)</span>'
          : ""
      }</td>
      <td class="subject-col" style="padding:12px 16px;border-bottom:1px solid #f0f0f0;font-size:14px;color:#555;">${
        SUBJECT_LABEL[m.subject] || m.subject
      }</td>
      <td style="padding:12px 16px;border-bottom:1px solid #f0f0f0;">
        <span class="code-badge" style="font-family:monospace;font-size:15px;font-weight:700;letter-spacing:3px;color:#111;background:#f5f5f5;padding:5px 12px;border-radius:5px;display:inline-block;white-space:nowrap;">${
          m.accessCode
        }</span>
      </td>
    </tr>`
    )
    .join("");

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>THE SUMMONS — Access Codes</title>
</head>
<body style="margin:0;padding:0;background:#f6f6f6;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f6f6f6;padding:40px 0;">
    <tr>
      <td align="center">
        <table width="560" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:8px;overflow:hidden;box-shadow:0 1px 4px rgba(0,0,0,0.08);">
          <tr>
            <td style="background:#111;padding:28px 40px;text-align:center;border-bottom:3px solid #60a5fa;">
              <p style="margin:0;font-size:11px;letter-spacing:3px;color:#888;text-transform:uppercase;">Evolvion '27 &nbsp;·&nbsp; Phase 01</p>
              <h1 style="margin:8px 0 0;font-size:22px;font-weight:700;letter-spacing:4px;color:#ffffff;">THE SUMMONS</h1>
            </td>
          </tr>
          <tr>
            <td style="padding:36px 40px 28px;">
              <p style="margin:0 0 4px;font-size:13px;color:#888;">Registration confirmed for</p>
              <h2 style="margin:0 0 28px;font-size:20px;font-weight:600;color:#111;">${schoolName}</h2>
              <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;border:1px solid #f0f0f0;border-radius:6px;overflow:hidden;">
                <thead>
                  <tr style="background:#fafafa;">
                    <th style="padding:10px 16px;text-align:left;font-size:11px;font-weight:600;text-transform:uppercase;color:#888;border-bottom:1px solid #f0f0f0;">Member</th>
                    <th style="padding:10px 16px;text-align:left;font-size:11px;font-weight:600;text-transform:uppercase;color:#888;border-bottom:1px solid #f0f0f0;">Subject</th>
                    <th style="padding:10px 16px;text-align:left;font-size:11px;font-weight:600;text-transform:uppercase;color:#888;border-bottom:1px solid #f0f0f0;">Code</th>
                  </tr>
                </thead>
                <tbody>${rows}</tbody>
              </table>
              <div style="border-top:1px solid #f0f0f0;margin:28px 0;"></div>
              <p style="margin:0 0 10px;font-size:13px;font-weight:600;color:#111;">How to enter on quiz day:</p>
              <ol style="margin:0;padding-left:18px;color:#555;font-size:13px;line-height:2;">
                <li>Visit <a href="${quizUrl}" style="color:#6366f1;text-decoration:none;font-weight:500;">${quizUrl}</a></li>
                <li>Enter your personal access code</li>
                <li>Wait — the quiz will go live automatically</li>
              </ol>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

export async function POST(request: Request) {
  const rawUrl = process.env.SUPABASE_URL;
  const supabaseUrl =
    rawUrl && rawUrl.startsWith("http")
      ? rawUrl
      : "https://dzzblbrmdaryttwplfrb.supabase.co";

  const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  const resendKey = process.env.RESEND_API_KEY;

  if (!supabaseKey) {
    console.error("[register] SUPABASE_SERVICE_ROLE_KEY is not set");
    return NextResponse.json(
      { error: "Server misconfiguration: database key missing. Contact admin." },
      { status: 500 }
    );
  }

  const supabase = createClient(supabaseUrl, supabaseKey);
  const resend =
    resendKey && resendKey !== "re_YOUR_API_KEY_HERE"
      ? new Resend(resendKey)
      : null;

  try {
    const data = await request.json();

    if (
      !data.schoolName ||
      !data.presidentName ||
      !data.presidentContact ||
      !data.captainName ||
      !data.captainContact ||
      !data.captainSubject ||
      !data.emailAddress
    ) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    if (!data.confirmation) {
      return NextResponse.json(
        { error: "You must confirm you are an official representative." },
        { status: 400 }
      );
    }

    const rawMembers = [
      { name: data.captainName, subject: data.captainSubject, isCaptain: true },
      { name: data.member1Name, subject: data.member1Subject, isCaptain: false },
      { name: data.member2Name, subject: data.member2Subject, isCaptain: false },
      { name: data.member3Name, subject: data.member3Subject, isCaptain: false },
    ].filter((m) => m.name && m.name.trim() && m.subject);

    if (rawMembers.length === 0) {
      return NextResponse.json(
        { error: "At least the captain with a subject is required." },
        { status: 400 }
      );
    }

    const membersNorm = rawMembers.map((m) => ({
      ...m,
      name: m.name.trim(),
      subjectSlug:
        SUBJECT_MAP[m.subject] ?? m.subject.toLowerCase().replace(/\s+/g, "_"),
    }));

    const slugs = membersNorm.map((m) => m.subjectSlug);
    if (new Set(slugs).size !== slugs.length) {
      return NextResponse.json(
        { error: "Each member must have a different subject." },
        { status: 400 }
      );
    }

    const presidentPhone = formatPhone(data.presidentContact);
    const captainPhone = formatPhone(data.captainContact);

    const { data: emailDupe } = await supabase
      .from("evo_registrations")
      .select("id")
      .eq("email", data.emailAddress)
      .maybeSingle();
    if (emailDupe) {
      return NextResponse.json(
        {
          error:
            "This email address has already been used to register. Each school may only register once.",
        },
        { status: 400 }
      );
    }

    const { error: evoErr } = await supabase.from("evo_registrations").insert([
      {
        school_name: data.schoolName,
        president_name: data.presidentName,
        president_contact: presidentPhone,
        mic_name: data.micName || null,
        mic_contact: formatPhone(data.micContact),
        captain_name: data.captainName,
        captain_contact: captainPhone,
        captain_subject: data.captainSubject,
        member1_name: data.member1Name || null,
        member1_subject: data.member1Subject || null,
        member2_name: data.member2Name || null,
        member2_subject: data.member2Subject || null,
        member3_name: data.member3Name || null,
        member3_subject: data.member3Subject || null,
        email: data.emailAddress,
        confirmed: data.confirmation === true || data.confirmation === "on",
      },
    ]);

    if (evoErr) {
      console.error("evo_registrations insert error:", evoErr);
      return NextResponse.json(
        { error: "Database submission failed: " + evoErr.message },
        { status: 500 }
      );
    }

    const { data: regRow, error: regErr } = await supabase
      .from("registrations")
      .insert([
        {
          school_name: data.schoolName,
          contact_email: data.emailAddress,
          status: "active",
        },
      ])
      .select("id")
      .single();

    if (regErr || !regRow) {
      console.error("registrations insert error:", regErr);
      return NextResponse.json(
        {
          error:
            "Failed to create quiz registration: " +
            (regErr?.message ?? "Unknown error"),
        },
        { status: 500 }
      );
    }

    const registrationId = regRow.id;
    const membersWithCodes = [];

    for (const m of membersNorm) {
      const accessCode = await generateUniqueCode(supabase, m.subjectSlug);
      await supabase.from("members").insert([
        {
          registration_id: registrationId,
          name: m.name,
          subject: m.subjectSlug,
          is_captain: m.isCaptain,
          access_code: accessCode,
        },
      ]);
      membersWithCodes.push({ ...m, accessCode });
    }

    const quizUrl = "https://summons.ssdssc.com";

    if (resend) {
      const html = buildEmailHtml({
        schoolName: data.schoolName,
        members: membersWithCodes.map((m) => ({
          name: m.name,
          subject: m.subjectSlug,
          accessCode: m.accessCode,
          isCaptain: m.isCaptain,
        })),
        quizUrl,
      });

      await resend.emails.send({
        from: "Evolvion'27 <evolvion@ssdssc.com>",
        to: [data.emailAddress],
        subject: `THE SUMMONS — Your Access Codes | ${data.schoolName}`,
        html,
      });
    }

    return NextResponse.json(
      {
        success: true,
        message:
          "Registration submitted successfully! Check your email for access codes.",
        members: membersWithCodes.map((m) => ({
          name: m.name,
          subject: SUBJECT_LABEL[m.subjectSlug] ?? m.subjectSlug,
          accessCode: m.accessCode,
          isCaptain: m.isCaptain,
        })),
      },
      { status: 200 }
    );
  } catch (err: any) {
    console.error("register handler error:", err);
    return NextResponse.json(
      { error: "Internal server error: " + err.message },
      { status: 500 }
    );
  }
}

export function GET() {
  return new NextResponse("Method not allowed", { status: 405 });
}
