import { DISPATCH_FEE, type PriceLine, type ServiceContent } from "./services";
import { formatAmount, plus, usd, type Amount } from "./price-format";
import type { VehicleType } from "@/lib/types/domain";

/**
 * How TRA prices a job, in one place (owner's pricing brief, 2026-11-03, and
 * the tax decision of 2026-11-04):
 *
 *   expected total = service price + dispatch fee (once per job), plus tax
 *
 * Every page, the request form, the confirmation page, the emails and the
 * structured data format prices through these helpers, so the same figure
 * reads the same way everywhere and the dispatch fee is never added twice.
 * Service prices are always shown BEFORE tax, with "+ tax" after them; the
 * dispatch fee is always shown on its own, as "+ $19 dispatch".
 */

export { DISPATCH_FEE };

/** The en dash the site uses in a range: "$49–$75". */
const DASH = "–";

/** "$19" */
export const DISPATCH_FEE_USD = usd(DISPATCH_FEE);

/** The banner headline from the owner's brief. */
export const DISPATCH_FEE_HEADLINE = `${DISPATCH_FEE_USD} Dispatch Fee + Service Price`;

/**
 * The owner's supporting copy, adapted so it is true for every service: the
 * service price is not "quoted separately" — it is published, and each service
 * says what its price covers.
 */
export const DISPATCH_FEE_EXPLAINER =
  "The dispatch fee covers sending a technician to your location, and it is charged once per job. The service price is listed with each service, along with what it covers.";

/** Owner's wording (2026-11-04). */
export const TAX_NOTE = "Prices are before sales tax; tax is added to the final bill.";

/** "+ $19 dispatch" — the fee on its own, next to a service price. */
export const DISPATCH_FEE_TAG = `+ ${DISPATCH_FEE_USD} dispatch`;

/** "$49–$75", "From $75", "$140": a service price, before tax, without the fee. */
export function servicePrice(a: Amount): string {
  return formatAmount(a, DASH);
}

/** The amount with the dispatch fee added once. */
export function withDispatchFee(a: Amount): Amount {
  return plus(a, DISPATCH_FEE);
}

/** "$68–$94", "From $94", "$159": the expected total before tax. */
export function expectedTotal(a: Amount): string {
  return formatAmount(withDispatchFee(a), DASH);
}

/** A service's headline price line: the one cards, badges and texts show. */
export function headlineLine(svc: ServiceContent): PriceLine | undefined {
  return svc.priceLines?.[0];
}

/**
 * The price line that applies to a request: the line published for that
 * vehicle type (the semi truck jump start) when the service has one, the
 * headline line otherwise.
 */
export function lineForVehicle(svc: ServiceContent, vehicleType?: VehicleType | string | null): PriceLine | undefined {
  return svc.priceLines?.find((l) => l.vehicleType && l.vehicleType === vehicleType) ?? headlineLine(svc);
}

/** "$49–$75 + tax" — the badge on cards and tiles. */
export function priceBadge(svc: ServiceContent): string | undefined {
  const line = headlineLine(svc);
  return line ? `${servicePrice(line)} + tax` : undefined;
}

/** "$49–$75 + tax + $19 dispatch" — for one-line places such as search results. */
export function priceSummary(svc: ServiceContent): string | undefined {
  const badge = priceBadge(svc);
  return badge ? `${badge} ${DISPATCH_FEE_TAG}` : undefined;
}

/** "Jump start from $49 + $19 = $68, plus tax" — the brief's example sentence. */
export function exampleTotal(name: string, a: Amount): string {
  const low: Amount = { min: a.min };
  return `${name} from ${servicePrice(low)} + ${DISPATCH_FEE_USD} = ${expectedTotal(low)}, plus tax`;
}

/**
 * The schema.org Offer for a service: the expected total (service price plus
 * the dispatch fee, once) as the price, with both parts listed as components
 * and tax marked as not included. Undefined for a service with no published
 * price.
 */
export function offerJsonLd(svc: ServiceContent) {
  const line = headlineLine(svc);
  if (!line) return undefined;
  const total = withDispatchFee(line);
  const range = (a: Amount) => (a.max !== undefined ? { minPrice: a.min, maxPrice: a.max } : { minPrice: a.min });
  return {
    "@type": "Offer",
    priceCurrency: "USD",
    price: total.min,
    priceSpecification: {
      "@type": "CompoundPriceSpecification",
      priceCurrency: "USD",
      price: total.min,
      ...range(total),
      valueAddedTaxIncluded: false,
      description: `${svc.name} ${servicePrice(line)}${line.note ? ` (${line.note})` : ""}, plus a ${DISPATCH_FEE_USD} dispatch fee charged once per job: ${expectedTotal(line)} in total. ${TAX_NOTE}`,
      priceComponent: [
        {
          "@type": "UnitPriceSpecification",
          name: "Service price",
          priceCurrency: "USD",
          price: line.min,
          ...range(line),
          valueAddedTaxIncluded: false,
        },
        {
          "@type": "UnitPriceSpecification",
          name: "Dispatch fee, once per job",
          priceCurrency: "USD",
          price: DISPATCH_FEE,
          valueAddedTaxIncluded: false,
        },
      ],
    },
  };
}
