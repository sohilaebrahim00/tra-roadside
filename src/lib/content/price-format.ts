/**
 * Formats a price amount. Deliberately free of imports so services.ts can use
 * it while SERVICES is being built, and kept ASCII-only (comments included in
 * that rule's spirit) because the text messages are built with it:
 * scripts/check-sms-gsm7.mjs fails the build if this file, or
 * src/lib/notifications/sms-lines.ts, gains a character outside ASCII.
 *
 * The dash is always passed in: the site uses an en dash, the texts a hyphen,
 * since an en dash would switch a whole SMS to UCS-2 encoding.
 */
export interface Amount {
  /** Whole USD: the low end of a range, or the only figure. */
  min: number;
  /** Top of the range. */
  max?: number;
  /** An open-ended starting price ("From $75"). */
  from?: boolean;
}

export function usd(n: number): string {
  return `$${n}`;
}

/**
 * "$49-$75" (with the dash given), "From $75" / "from $75", or "$140".
 * `fromWord` lets a sentence say "is from $129" and a label say "From $129".
 */
export function formatAmount(a: Amount, dash: string, fromWord: "From" | "from" = "From"): string {
  if (a.max !== undefined && a.max !== a.min) return `${usd(a.min)}${dash}${usd(a.max)}`;
  return a.from ? `${fromWord} ${usd(a.min)}` : usd(a.min);
}

/** The same amount with a fee added once to every figure in it. */
export function plus(a: Amount, fee: number): Amount {
  return { min: a.min + fee, max: a.max === undefined ? undefined : a.max + fee, from: a.from };
}
