import {
  getLogoExtension,
  getSupabaseAdmin,
  IGNITERC_LOGO_BUCKET,
  jsonResponse,
  MAX_LOGO_BYTES,
} from "@/lib/ignitercRegistration.js";
import { registrationsAreOpen } from "@/config/ignitercRegistration.js";

const FILE_KEYS = Object.freeze([
  ["schoolLogo", "school"],
  ["societyLogo", "society"],
] as const);

function validateFileMetadata(file: any, label: string) {
  if (file == null) return { value: null };
  if (typeof file !== "object") return { error: `${label} details are invalid.` };

  const size = Number(file.size);
  const type = typeof file.type === "string" ? file.type : "";
  const extension = getLogoExtension(type);

  if (!Number.isInteger(size) || size <= 0) {
    return { error: `${label} is empty or invalid.` };
  }
  if (size > MAX_LOGO_BYTES) {
    return { error: `${label} must be 10 MB or smaller.`, status: 413 };
  }
  if (!extension) {
    return { error: `${label} must be a JPG, PNG, or WebP image.`, status: 415 };
  }

  return { value: { size, type, extension } };
}

export async function POST(request: Request) {
  const isDev = process.env.NODE_ENV === "development";
  if (!isDev && !registrationsAreOpen()) {
    return jsonResponse({ error: "Registrations are closed.", closed: true }, 403);
  }

  let payload: any;
  try {
    payload = await request.json();
  } catch {
    return jsonResponse({ error: "Invalid request." }, 400);
  }

  const files = payload?.files;
  if (!files || typeof files !== "object") {
    return jsonResponse({ error: "No logo files were provided." }, 400);
  }

  const validated: Record<string, any> = {};
  for (const [key, pathLabel] of FILE_KEYS) {
    const result: any = validateFileMetadata(
      files[key],
      pathLabel === "school" ? "School logo" : "Society logo"
    );
    if (result.error) return jsonResponse({ error: result.error }, result.status ?? 400);
    validated[key] = result.value;
  }

  if (!validated.schoolLogo && !validated.societyLogo) {
    return jsonResponse({ error: "No logo files were provided." }, 400);
  }

  const supabase = getSupabaseAdmin();
  if (!supabase) {
    console.error("[igniterc/upload-urls] SUPABASE_SERVICE_ROLE_KEY is not configured");
    return jsonResponse({ error: "Registration uploads are temporarily unavailable." }, 500);
  }

  const submissionId = crypto.randomUUID();
  const uploads: Record<string, any> = {};

  for (const [key, pathLabel] of FILE_KEYS) {
    const file = validated[key];
    if (!file) continue;

    const path = `${submissionId}/${pathLabel}.${file.extension}`;
    const { data, error } = await supabase.storage
      .from(IGNITERC_LOGO_BUCKET)
      .createSignedUploadUrl(path, { upsert: false });

    if (error || !data?.signedUrl) {
      console.error("[igniterc/upload-urls] Could not create signed upload URL");
      return jsonResponse({ error: "Could not prepare the logo upload." }, 500);
    }

    uploads[key] = {
      path,
      signedUrl: data.signedUrl,
    };
  }

  return jsonResponse({ submissionId, uploads }, 201);
}
