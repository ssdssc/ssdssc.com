import { NextResponse } from "next/server";
import { checkGoogleLink } from "@/lib/verifyGoogleLink";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const url = body?.url;
    const result = await checkGoogleLink(url);
    return NextResponse.json(result, {
      status: 200,
      headers: {
        "Cache-Control": "no-store",
      },
    });
  } catch (err: unknown) {
    const errorMsg = err instanceof Error ? err.message : String(err);
    return NextResponse.json(
      { ok: false, accessible: false, reason: "bad_request", message: errorMsg || "Invalid request" },
      { status: 400 }
    );
  }
}
