export function generateRequestNumber(date = new Date()): string {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  const suffix = Math.random().toString(36).slice(2, 6).toUpperCase();
  return `TRA-${y}${m}${d}-${suffix}`;
}

/**
 * 128 bits of randomness as 22 base64url characters.
 *
 * Was 24 bytes rendered as hex, which spent 48 characters carrying 192 bits —
 * hex is only 4 bits per character. Every customer SMS carries this token
 * inside a tracking link, and at 160 characters per GSM-7 segment those 26
 * wasted characters were pushing driver_assigned and driver_en_route over the
 * one-segment boundary for nothing.
 *
 * 128 bits is the standard floor for an unguessable capability URL and is what
 * a UUIDv4 carries. base64url is `A-Za-z0-9-_`, which is URL-safe and entirely
 * inside the GSM-7 alphabet, so it never forces a message to UCS-2.
 *
 * Old 48-character hex tokens stay valid: lookup is an exact string match on
 * customer_tracking_tokens.token with no format or length constraint, so both
 * shapes resolve. Nothing about this change invalidates a link already sent.
 */
export function generateTrackingToken(): string {
  const bytes = new Uint8Array(16);
  crypto.getRandomValues(bytes);
  return Buffer.from(bytes).toString("base64url");
}
