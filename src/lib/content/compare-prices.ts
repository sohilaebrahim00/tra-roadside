import { getService } from "./services";
import { DISPATCH_FEE_USD, expectedTotal, headlineLine } from "./pricing";
import { formatAmount, type Amount } from "./price-format";
import type { ServiceTypeSlug } from "@/lib/types/domain";

/**
 * What a job really comes to, next to another DFW mobile roadside company's
 * published prices, both with their $19 dispatch fee added.
 *
 * The other company is not named on purpose. Its figures are its own published
 * rates, read from its public pricing page on 2026-11-04; recheck them before
 * changing this table, and remove any row where the comparison stops being true.
 * Only services where the two offers are the same job are listed.
 */
export const COMPARISON_CHECKED = "November 2026";

const THEIR_DISPATCH_FEE = 19;

const ROWS: { service: ServiceTypeSlug; label: string; theirPrice: Amount }[] = [
  { service: "jump-start", label: "Jump start", theirPrice: { min: 60, max: 75 } },
  { service: "lockout", label: "Car lockout, doors", theirPrice: { min: 65, max: 89 } },
  { service: "battery-replacement", label: "New battery, installed", theirPrice: { min: 249, max: 289 } },
];

export interface ComparisonRow {
  label: string;
  ours: string;
  theirs: string;
}

export function comparisonRows(): ComparisonRow[] {
  return ROWS.flatMap(({ service, label, theirPrice }) => {
    const svc = getService(service);
    const line = svc && headlineLine(svc);
    if (!line) return [];
    return [
      {
        label,
        ours: expectedTotal(line),
        theirs: formatAmount({ ...theirPrice, min: theirPrice.min + THEIR_DISPATCH_FEE, max: (theirPrice.max ?? theirPrice.min) + THEIR_DISPATCH_FEE }, "–"),
      },
    ];
  });
}

export const COMPARISON_NOTE = `Totals include each company's ${DISPATCH_FEE_USD} dispatch fee. The other company's figures are its own published rates, checked ${COMPARISON_CHECKED}. Dispatch confirms your price before a driver is sent.`;
