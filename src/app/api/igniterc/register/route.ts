import {
  GENDER_OPTIONS,
  getSupabaseAdmin,
  IGNITERC_LOGO_BUCKET,
  IGNITERC_TABLE,
  isEmail,
  isSubmissionId,
  jsonResponse,
  LOGO_TYPES,
  MAX_LOGO_BYTES,
  normalizePhone,
} from "@/lib/ignitercRegistration.js";
import { registrationsAreOpen } from "@/config/ignitercRegistration.js";

interface ReadResult {
  value?: string | null;
  error?: string;
}

function readText(
  payload: Record<string, unknown> | null | undefined,
  key: string,
  label: string,
  maxLength: number,
  required = false
): ReadResult {
  const raw = payload?.[key];
  if (raw == null || raw === "") {
    return required ? { error: `${label} is required.` } : { value: null };
  }
  if (typeof raw !== "string") return { error: `${label} is invalid.` };

  const value = raw.trim();
  if (!value) return required ? { error: `${label} is required.` } : { value: null };
  if (value.length > maxLength) return { error: `${label} is too long.` };
  return { value };
}

function readPhone(
  payload: Record<string, unknown> | null | undefined,
  key: string,
  label: string,
  required = false
): ReadResult {
  const raw = payload?.[key];
  if (raw == null || raw === "") {
    return required ? { error: `${label} is required.` } : { value: null };
  }
  if (typeof raw !== "string") return { error: `Enter a valid ${label.toLowerCase()}.` };

  const value = normalizePhone(raw);
  return value
    ? { value }
    : { error: `Enter a valid ${label.toLowerCase()}.` };
}

function validateLogoPath(
  path: unknown,
  submissionId: string,
  kind: string
): ReadResult {
  if (path == null || path === "") return { value: null };
  if (typeof path !== "string" || !isSubmissionId(submissionId)) {
    return { error: "Logo upload details are invalid." };
  }

  const pattern = new RegExp(`^${submissionId}/${kind}\\.(jpg|png|webp)$`);
  return pattern.test(path)
    ? { value: path }
    : { error: "Logo upload details are invalid." };
}

async function verifyLogo(
  supabase: NonNullable<ReturnType<typeof getSupabaseAdmin>>,
  path: string | null
) {
  if (!path) return true;

  const { data, error } = await supabase.storage
    .from(IGNITERC_LOGO_BUCKET)
    .info(path);

  if (error || !data) return false;

  const contentType = (data as { contentType?: string }).contentType ?? (data as { metadata?: { mimetype?: string } }).metadata?.mimetype;
  const size = Number((data as { size?: number }).size ?? (data as { metadata?: { size?: number } }).metadata?.size);
  return (
    Boolean(LOGO_TYPES[contentType as keyof typeof LOGO_TYPES]) &&
    Number.isFinite(size) &&
    size > 0 &&
    size <= MAX_LOGO_BYTES
  );
}

async function removeUploads(
  supabase: NonNullable<ReturnType<typeof getSupabaseAdmin>>,
  paths: (string | null)[]
) {
  const uploadedPaths = paths.filter(Boolean) as string[];
  if (uploadedPaths.length === 0) return;
  await supabase.storage.from(IGNITERC_LOGO_BUCKET).remove(uploadedPaths);
}

export async function POST(request: Request) {
  const isDev = process.env.NODE_ENV === "development";
  if (!isDev && !registrationsAreOpen()) {
    return jsonResponse({ error: "Registrations are closed.", closed: true }, 403);
  }

  let payload: Record<string, unknown> | null = null;
  try {
    payload = (await request.json()) as Record<string, unknown>;
  } catch {
    return jsonResponse({ error: "Invalid request." }, 400);
  }

  const fields: [string, string, number, boolean][] = [
    ["schoolName", "School name", 180, true],
    ["presidentName", "President name", 120, false],
    ["masterInChargeName", "Master in charge name", 120, false],
    ["contestantFirstName", "Contestant first name", 100, true],
    ["contestantLastName", "Contestant last name", 100, true],
    ["contestantEmail", "Email address", 254, false],
    ["parentFirstName", "Parent first name", 100, true],
    ["parentLastName", "Parent last name", 100, true],
    ["homeAddress", "Home address", 500, true],
  ];

  const values: Record<string, string | null> = {};
  for (const [key, label, maxLength, required] of fields) {
    const result = readText(payload, key, label, maxLength, required);
    if (result.error) return jsonResponse({ error: result.error }, 400);
    values[key] = result.value ?? null;
  }

  if (values.contestantEmail && !isEmail(values.contestantEmail)) {
    return jsonResponse({ error: "Enter a valid email address." }, 400);
  }

  const phones: [string, string, boolean][] = [
    ["presidentContact", "president contact number", false],
    ["micContact", "MIC contact number", false],
    ["contestantPhone", "contestant phone number", true],
    ["parentPhone", "parent phone number", true],
  ];

  for (const [key, label, required] of phones) {
    const result = readPhone(payload, key, label, required);
    if (result.error) return jsonResponse({ error: result.error }, 400);
    values[key] = result.value ?? null;
  }

  const gender = typeof payload?.contestantGender === "string" ? payload.contestantGender : null;
  if (gender != null && gender !== "" && !GENDER_OPTIONS.includes(gender)) {
    return jsonResponse({ error: "Select a valid gender option." }, 400);
  }
  values.contestantGender = gender || null;

  const submissionId = typeof payload?.submissionId === "string" ? payload.submissionId : "";
  const schoolLogo = validateLogoPath(payload?.schoolLogoPath, submissionId, "school");
  if (schoolLogo.error) return jsonResponse({ error: schoolLogo.error }, 400);
  const societyLogo = validateLogoPath(payload?.societyLogoPath, submissionId, "society");
  if (societyLogo.error) return jsonResponse({ error: societyLogo.error }, 400);

  const supabase = getSupabaseAdmin();
  if (!supabase) {
    console.error("[igniterc/register] SUPABASE_SERVICE_ROLE_KEY is not configured");
    return jsonResponse({ error: "Registration is temporarily unavailable." }, 500);
  }

  const uploadedPaths: (string | null)[] = [
    schoolLogo.value ?? null,
    societyLogo.value ?? null,
  ];
  const logosAreValid = await Promise.all(
    uploadedPaths.map((logoPath) => verifyLogo(supabase, logoPath))
  );
  if (logosAreValid.some((valid) => !valid)) {
    await removeUploads(supabase, uploadedPaths);
    return jsonResponse(
      { error: "A logo upload could not be verified. Please try again." },
      400
    );
  }

  const { data, error } = await supabase
    .from(IGNITERC_TABLE)
    .insert([
      {
        school_name: values.schoolName,
        president_name: values.presidentName,
        president_contact: values.presidentContact,
        master_in_charge_name: values.masterInChargeName,
        mic_contact: values.micContact,
        contestant_first_name: values.contestantFirstName,
        contestant_last_name: values.contestantLastName,
        contestant_email: values.contestantEmail,
        contestant_phone: values.contestantPhone,
        contestant_gender: values.contestantGender,
        parent_first_name: values.parentFirstName,
        parent_last_name: values.parentLastName,
        home_address: values.homeAddress,
        parent_phone: values.parentPhone,
        school_logo_path: schoolLogo.value,
        society_logo_path: societyLogo.value,
      },
    ])
    .select("id")
    .single();

  if (error || !data?.id) {
    console.error("[igniterc/register] Database insert failed", error);
    await removeUploads(supabase, uploadedPaths);
    return jsonResponse(
      { error: "Registration could not be saved. Please try again." },
      500
    );
  }

  return jsonResponse(
    {
      success: true,
      registrationId: data.id,
      message: "Registration submitted successfully.",
    },
    201
  );
}

export function GET() {
  return jsonResponse({ error: "Method not allowed." }, 405, { Allow: "POST" });
}
