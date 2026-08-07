"use client";

export default function GlobalError({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <html lang="en">
      <body style={{ fontFamily: "system-ui, sans-serif", textAlign: "center", padding: "4rem 1rem" }}>
        <h1 style={{ fontSize: "1.5rem", fontWeight: 700 }}>Something went wrong</h1>
        <p style={{ marginTop: "0.5rem", color: "#525252" }}>
          If you need roadside help right now, please call us directly.
        </p>
        <a
          href="tel:+19454121215"
          style={{ display: "inline-block", marginTop: "1.5rem", padding: "0.75rem 1.5rem", background: "#c81721", color: "#fff", borderRadius: "999px", fontWeight: 700, textDecoration: "none" }}
        >
          Call (945) 412-1215
        </a>
        <div>
          <button
            onClick={reset}
            style={{ marginTop: "1rem", background: "none", border: "none", color: "#c81721", textDecoration: "underline", cursor: "pointer" }}
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}
