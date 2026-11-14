"use client";

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body style={{ backgroundColor: "#070707", color: "#ffffff", fontFamily: "sans-serif", margin: 0, padding: 0 }}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: "100vh", textAlign: "center", padding: "24px" }}>
          <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>System Disturbance</h1>
          <p style={{ color: "rgba(255, 255, 255, 0.7)", maxWidth: "400px", marginBottom: "2rem" }}>
            A critical error occurred while initializing the application.
          </p>
          <button
            onClick={() => reset()}
            type="button"
            style={{
              padding: "12px 28px",
              borderRadius: "9999px",
              backgroundColor: "#ffd57e",
              color: "#000000",
              fontWeight: 600,
              border: "none",
              cursor: "pointer",
            }}
          >
            Refresh
          </button>
        </div>
      </body>
    </html>
  );
}
