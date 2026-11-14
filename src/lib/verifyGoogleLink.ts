/**
 * Server-side helper for verifying Google Drive / Google Docs link accessibility.
 * Checks whether an anonymous visitor can access the given URL without getting redirected
 * to a sign-in or access-denied screen.
 */
export async function checkGoogleLink(rawUrl: string) {
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

  // Non-Google links (e.g. GitHub links for coder category) are permitted
  if (!isGoogle) {
    return { ok: true, accessible: true, isGoogle: false };
  }

  try {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 5000);

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
          // ignore
        }
      } else {
        snippet = await res.text();
      }
    } catch {
      // ignore read errors
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

    return { ok: true, accessible: true, isGoogle: true };
  } catch (err: unknown) {
    const errorMsg = err instanceof Error ? err.message : String(err);
    console.warn("[verify-link] Link check exception:", errorMsg);
    // On transient network error or timeout, do not block the user unexpectedly
    return { ok: true, accessible: true, isGoogle: true, warning: "could_not_verify" };
  }
}
