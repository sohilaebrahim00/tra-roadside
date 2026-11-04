import { DISPATCH_FEE, type ServiceContent } from "@/lib/content/services";
import { formatAmount, plus } from "@/lib/content/price-format";

/**
 * One labeled line of a text message, with its own leading line break:
 * "\nVehicle: 2019 Toyota Camry", or "" when there is no value. Templates
 * write `Service: {{serviceShort}}{{vehicleLine}}` so a request with no
 * vehicle details leaves no empty "Vehicle:" line behind.
 *
 * Labels are plain ASCII, so the text stays on GSM-7 encoding.
 */
export function smsLine(label: string, value: string | null | undefined): string {
  const v = value?.trim();
  return v ? `\n${label}: ${v}` : "";
}

/**
 * The price breakdown for a text message, from SERVICES so it never drifts:
 * the service price, the dispatch fee on its own (added once), and the total,
 * with tax added to the final bill (owner's brief, 2026-11-03 and 2026-11-04):
 *
 *   "$49-$75 + $19 dispatch = $68-$94, plus tax"
 *   "$140 + $19 dispatch = $159, plus tax"           a semi truck jump start
 *   "From $129 + $19 dispatch = from $148, plus tax"
 *
 * A semi truck gets the line published for semi trucks where the service has
 * one. Ranges use a hyphen, never an en dash: either dash would switch the
 * whole text to UCS-2 and halve the characters per SMS part. This file stays
 * ASCII-only; scripts/check-sms-gsm7.mjs fails the build if it does not.
 */
export function smsPrice(service: Pick<ServiceContent, "priceLines">, vehicleType?: string): string {
  const lines = service.priceLines ?? [];
  const line = lines.find((l) => l.vehicleType && l.vehicleType === vehicleType) ?? lines[0];
  if (!line) return "";
  const price = formatAmount(line, "-");
  const total = formatAmount(plus(line, DISPATCH_FEE), "-", "from");
  return `${price} + $${DISPATCH_FEE} dispatch = ${total}, plus tax`;
}
