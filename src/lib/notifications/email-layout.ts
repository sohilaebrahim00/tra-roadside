/**
 * Branded HTML email, plus a matching plain-text version.
 *
 * Email clients are not browsers: Gmail strips <style> blocks in some views,
 * Outlook renders with Word's engine, and none of them run CSS layout. So this
 * is deliberately old-fashioned markup: nested tables, inline styles, web-safe
 * fonts, no images (a blocked image would leave a hole where the logo was),
 * and a fixed 600px column that scales down on phones.
 *
 * Every value that could come from a customer (name, address, notes) is
 * HTML-escaped here, in one place, so nothing a customer types can inject
 * markup or links into a message dispatch or another customer reads.
 */

export interface EmailRow {
  label: string;
  value: string;
  /** Makes the value a link (tel:, sms:, https:). */
  href?: string;
  /** Renders the value in red bold, for things dispatch must not miss. */
  emphasis?: boolean;
}

export interface EmailSection {
  title: string;
  rows?: EmailRow[];
  bullets?: string[];
  /** A short paragraph under the title, before rows or bullets. */
  note?: string;
}

export interface EmailButton {
  label: string;
  href: string;
  tone?: "primary" | "secondary";
}

export interface RichEmail {
  /** Inbox preview text, hidden in the body. */
  preheader: string;
  /** Small red label above the heading. */
  eyebrow: string;
  heading: string;
  /** The editable message text from the template, shown as the intro. */
  intro: string;
  /** A one-line status pill under the heading. */
  badge?: string;
  /** A boxed one-line summary, e.g. the vehicle's situation for dispatch. */
  summary?: string;
  buttons?: EmailButton[];
  sections: EmailSection[];
  /** Small print at the bottom. */
  footer: string[];
}

const C = {
  ink: "#0a0a0b",
  text: "#2b2b30",
  muted: "#6b6b75",
  line: "#e6e6ea",
  paper: "#f6f6f8",
  red: "#e0131c",
  white: "#ffffff",
} as const;

const FONT = "Arial, Helvetica, sans-serif";

export function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

/** Escapes, then keeps the author's line breaks. */
function paragraphs(text: string): string {
  return text
    .trim()
    .split(/\n{2,}/)
    .map((p) => `<p style="margin:0 0 14px 0;font-family:${FONT};font-size:16px;line-height:24px;color:${C.text};">${escapeHtml(p).replace(/\n/g, "<br>")}</p>`)
    .join("");
}

function button(b: EmailButton): string {
  const primary = b.tone !== "secondary";
  const bg = primary ? C.red : C.white;
  const fg = primary ? C.white : C.ink;
  const border = primary ? C.red : "#c9c9d1";
  // Inline-block links in one cell rather than one cell per button, so the
  // row wraps on a phone instead of pushing the email wider than the screen.
  return `<a href="${escapeHtml(b.href)}" style="display:inline-block;margin:0 8px 8px 0;background:${bg};color:${fg};border:1px solid ${border};border-radius:8px;padding:12px 18px;font-family:${FONT};font-size:15px;font-weight:bold;line-height:18px;text-decoration:none;white-space:nowrap;">${escapeHtml(b.label)}</a>`;
}

function row(r: EmailRow): string {
  const valueStyle = `font-family:${FONT};font-size:15px;line-height:21px;color:${r.emphasis ? C.red : C.ink};${r.emphasis ? "font-weight:bold;" : ""}`;
  const value = r.href
    ? `<a href="${escapeHtml(r.href)}" style="${valueStyle}color:${C.red};text-decoration:underline;">${escapeHtml(r.value)}</a>`
    : `<span style="${valueStyle}">${escapeHtml(r.value).replace(/\n/g, "<br>")}</span>`;
  return `<tr>
<td width="38%" valign="top" style="padding:9px 12px 9px 0;border-top:1px solid ${C.line};font-family:${FONT};font-size:13px;line-height:19px;color:${C.muted};">${escapeHtml(r.label)}</td>
<td valign="top" style="padding:9px 0;border-top:1px solid ${C.line};">${value}</td>
</tr>`;
}

function section(s: EmailSection): string {
  const note = s.note
    ? `<p style="margin:0 0 10px 0;font-family:${FONT};font-size:14px;line-height:21px;color:${C.text};">${escapeHtml(s.note)}</p>`
    : "";
  const rows = s.rows?.length
    ? `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">${s.rows.map(row).join("")}</table>`
    : "";
  const bullets = s.bullets?.length
    ? `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">${s.bullets
        .map(
          (b) =>
            `<tr><td width="18" valign="top" style="padding:5px 0;font-family:${FONT};font-size:15px;line-height:21px;color:${C.red};">&#9632;</td><td valign="top" style="padding:5px 0;font-family:${FONT};font-size:15px;line-height:21px;color:${C.text};">${escapeHtml(b)}</td></tr>`
        )
        .join("")}</table>`
    : "";
  return `<tr><td style="padding:22px 28px 6px 28px;">
<p style="margin:0 0 10px 0;font-family:${FONT};font-size:12px;line-height:16px;font-weight:bold;letter-spacing:1.5px;text-transform:uppercase;color:${C.ink};">${escapeHtml(s.title)}</p>
${note}${rows}${bullets}
</td></tr>`;
}

export function renderRichEmailHtml(e: RichEmail): string {
  const buttons = e.buttons?.length
    ? `<tr><td style="padding:6px 28px 4px 28px;">${e.buttons.map(button).join("")}</td></tr>`
    : "";
  const badge = e.badge
    ? `<p style="margin:0 0 16px 0;"><span style="display:inline-block;background:#e9f7ef;color:#11663a;border-radius:999px;padding:5px 12px;font-family:${FONT};font-size:13px;font-weight:bold;line-height:16px;">${escapeHtml(e.badge)}</span></p>`
    : "";
  const summary = e.summary
    ? `<tr><td style="padding:4px 28px 6px 28px;"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="background:${C.paper};border-left:4px solid ${C.red};border-radius:6px;padding:14px 16px;font-family:${FONT};font-size:15px;line-height:22px;font-weight:bold;color:${C.ink};">${escapeHtml(e.summary)}</td></tr></table></td></tr>`
    : "";

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="color-scheme" content="light">
<meta name="supported-color-schemes" content="light">
<title>${escapeHtml(e.heading)}</title>
</head>
<body style="margin:0;padding:0;background:${C.paper};">
<div style="display:none;max-height:0;overflow:hidden;opacity:0;color:${C.paper};">${escapeHtml(e.preheader)}</div>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:${C.paper};">
<tr><td align="center" style="padding:24px 12px;">
<table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0" style="width:100%;max-width:600px;background:${C.white};border:1px solid ${C.line};border-radius:12px;overflow:hidden;">
<tr><td style="background:${C.ink};padding:20px 28px;">
<span style="font-family:${FONT};font-size:24px;line-height:28px;font-weight:bold;color:${C.white};letter-spacing:1px;">TR<span style="color:${C.red};">A</span></span>
<span style="font-family:${FONT};font-size:11px;line-height:28px;color:#b9b9c2;letter-spacing:2px;text-transform:uppercase;padding-left:10px;">Texas Roadside Assistance</span>
</td></tr>
<tr><td style="padding:26px 28px 4px 28px;">
<p style="margin:0 0 8px 0;font-family:${FONT};font-size:12px;line-height:16px;font-weight:bold;letter-spacing:1.5px;text-transform:uppercase;color:${C.red};">${escapeHtml(e.eyebrow)}</p>
<h1 style="margin:0 0 14px 0;font-family:${FONT};font-size:24px;line-height:30px;font-weight:bold;color:${C.ink};">${escapeHtml(e.heading)}</h1>
${badge}${paragraphs(e.intro)}
</td></tr>
${summary}${buttons}${e.sections.map(section).join("")}
<tr><td style="padding:24px 28px 26px 28px;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="border-top:1px solid ${C.line};padding-top:16px;">
${e.footer.map((f) => `<p style="margin:0 0 6px 0;font-family:${FONT};font-size:12px;line-height:18px;color:${C.muted};">${escapeHtml(f)}</p>`).join("")}
</td></tr></table>
</td></tr>
</table>
</td></tr>
</table>
</body>
</html>`;
}

/** The same content as plain text, for clients that show text only and for spam filters that score the text part. */
export function renderRichEmailText(e: RichEmail): string {
  const out: string[] = [e.heading, ""];
  if (e.badge) out.push(`Status: ${e.badge}`, "");
  out.push(e.intro.trim(), "");
  if (e.summary) out.push(e.summary, "");
  for (const b of e.buttons ?? []) out.push(`${b.label}: ${b.href.replace(/^(tel|sms):/, "")}`);
  if (e.buttons?.length) out.push("");
  for (const s of e.sections) {
    out.push(s.title.toUpperCase());
    if (s.note) out.push(s.note);
    for (const r of s.rows ?? []) out.push(`${r.label}: ${r.value}${r.href && !/^(tel|sms|mailto):/.test(r.href) && r.href !== r.value ? ` (${r.href})` : ""}`);
    for (const b of s.bullets ?? []) out.push(`- ${b}`);
    out.push("");
  }
  out.push(...e.footer);
  return out.join("\n");
}
