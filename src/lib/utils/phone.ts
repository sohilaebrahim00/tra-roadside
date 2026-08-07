/**
 * Normalizes a phone number to E.164 before handing it to Twilio.
 * TRA operates only in the DFW (US) market, so this is intentionally a
 * US/Canada (+1) normalizer rather than a full international library —
 * if the service area ever expands, swap this for a proper libphonenumber
 * call without touching any of the call sites (they all go through here).
 */
export function toE164(raw: string): string | null {
  const trimmed = raw.trim();
  if (!trimmed) return null;

  const digits = trimmed.replace(/[^\d+]/g, "");

  if (digits.startsWith("+")) {
    // Already has a country code — just validate it's a plausible length.
    const rest = digits.slice(1);
    return /^\d{8,15}$/.test(rest) ? `+${rest}` : null;
  }

  const digitsOnly = digits.replace(/\D/g, "");
  if (digitsOnly.length === 10) return `+1${digitsOnly}`;
  if (digitsOnly.length === 11 && digitsOnly.startsWith("1")) return `+${digitsOnly}`;

  return null;
}
