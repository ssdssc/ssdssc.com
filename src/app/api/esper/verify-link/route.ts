import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

async function checkGoogleLink(rawUrl: string) {
  if (!rawUrl || typeof rawUrl !== "string") {
    return { ok: false, accessible: false, reason: "missing_url", message: "URL is required." };
  }

  let parsed: URL;
  try {
    parsed = new URL(rawUrl.trim());
  } catch {
    return { ok: false, accessible: false, reason: "invalid_url", message: "Please enter a valid web link." };
  }

  const host = parsed.hostname.toLowerCase();
  const isGoogle = host.includes("docs.google.com") || host.includes("drive.google.com");

  // If it's not a Google link (e.g. GitHub link for coder category), we don't restrict it
  if (!isGoogle) {
    return { ok: true, accessible: true, isGoogle: false };
  }

  try {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 4500);

    const res = await fetch(parsed.toString(), {
      method: "GET",
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",
        Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
        "Accept-Language": "en-US,en;q=0.9",
      },
      redirect: "follow",
      signal: controller.signal,
    });
    clearTimeout(timer);

    const finalUrl = (res.url || "").toLowerCase();

    // 1. Google redirects unauthenticated visitors to login when link is Restricted / Private
    if (
      finalUrl.includes("accounts.google.com") ||
      finalUrl.includes("servicelogin") ||
      finalUrl.includes("/signin")
    ) {
      return {
        ok: true,
        accessible: false,
        reason: "private",
        message: 'This link is Private (Restricted). Please change General Access to "Anyone with the link can view".',
      };
    }

    // 2. HTTP 401 / 403 status codes
    if (res.status === 401 || res.status === 403) {
      return {
        ok: true,
        accessible: false,
        reason: "private",
        message: 'This link is Private (Restricted). Please change General Access to "Anyone with the link can view".',
      };
    }

    // 3. Inspect HTML response title and content for access restriction messages
    if (res.ok) {
      let snippet = "";
      try {
        const reader = res.body?.getReader();
        if (reader) {
          const { value } = await reader.read();
          if (value) {
            snippet = new TextDecoder().decode(value);
          }
          try {
            await reader.cancel();
          } catch {
            // Ignore cancel error
          }
        } else {
          snippet = await res.text();
        }
      } catch {
        // Ignore read errors
      }

      const titleMatch = snippet.match(/<title[^>]*>([^<]+)<\/title>/i);
      const title = (titleMatch ? titleMatch[1] : "").toLowerCase();
      const lower = snippet.toLowerCase();

      // Check title for explicit sign-in or access denied pages
      const isTitleBlocked =
        title.includes("sign in - google accounts") ||
        title.includes("google drive: sign-in") ||
        title.includes("request access") ||
        title.includes("you need access") ||
        title.includes("access denied");

      // Check body text for explicit access denied / permission required phrasing
      const isBodyBlocked =
        lower.includes("you need access") ||
        lower.includes("you need permission") ||
        lower.includes("request access") ||
        lower.includes("ask for access") ||
        lower.includes("switch to an account with access");

      if (isTitleBlocked || isBodyBlocked) {
        return {
          ok: true,
          accessible: false,
          reason: "private",
          message: 'This link is Private (Restricted). Please change General Access to "Anyone with the link can view".',
        };
      }
    }

    return { ok: true, accessible: true, isGoogle: true };
  } catch (err: unknown) {
    const errorMsg = err instanceof Error ? err.message : String(err);
    console.warn("[verify-link] Link check exception:", errorMsg);
    // On timeout or transient network failure, don't falsely block the user
    return { ok: true, accessible: true, isGoogle: true, warning: "could_not_verify" };
  }
}

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
