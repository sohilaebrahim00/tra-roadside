import { DISPATCH_FEE, SERVICES, type PriceLine, type ServiceContent } from "./services";
import { BUSINESS } from "./business";
import { formatAmount, plus, usd, type Amount } from "./price-format";
import type { VehicleType } from "@/lib/types/domain";

/**
 * How TRA prices a job, in one place (owner's pricing brief, 2026-11-03, and
 * voice notes of 2026-11-04):
 *
 *   expected total = service price + dispatch fee (once per job)
 *
 * Every page, the request form, the confirmation page, the emails and the
 * structured data format prices through these helpers, so the same figure
 * reads the same way everywhere and the dispatch fee is never added twice.
 *
 * Wherever a customer is choosing, the low figure leads ("from $49") with the
 * fee on its own beside it ("+ $19 dispatch"), as the competitors in the
 * owner's market show it. The total appears where the customer confirms: the
 * request forms, the texts and the emails.
 *
 * No price mentions tax. An earlier version did, after the "$420 plus tax" in
 * one voice note was taken for an instruction; the owner corrected that on
 * 2026-11-04. It was an example of how a low figure reads.
 */

export { DISPATCH_FEE };

/** The en dash the site uses in a range: "$49–$75". */
const DASH = "–";

/** Longest title that still carries the phone number in a search result. */
const TITLE_WITH_PHONE_MAX = 65;

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

/** "+ $19 dispatch" — the fee on its own, next to a service price. */
export const DISPATCH_FEE_TAG = `+ ${DISPATCH_FEE_USD} dispatch`;

/** "$49–$75", "From $75", "$70": a service price, without the fee. */
export function servicePrice(a: Amount): string {
  return formatAmount(a, DASH);
}

/** The amount with the dispatch fee added once. */
export function withDispatchFee(a: Amount): Amount {
  return plus(a, DISPATCH_FEE);
}

/** "$68–$94", "From $94", "$159": the expected total. */
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

/** The low figure of a price: "from $49" for a range or an open-ended price, "$70" for a single one. */
export function lowOf(a: Amount): string {
  return a.max !== undefined || a.from ? `from ${usd(a.min)}` : usd(a.min);
}

/** The low figure a service is advertised at, for use mid-sentence. */
export function lowPrice(svc: ServiceContent): string | undefined {
  const line = headlineLine(svc);
  return line && lowOf(line);
}

/** "from $49": the lowest published price, for titles that speak for every service. */
export function startingPrice(): string {
  return `from ${usd(Math.min(...SERVICES.flatMap((svc) => (svc.priceLines?.[0] ? [svc.priceLines[0].min] : []))))}`;
}

/** "Jump Start from $49 · Lockout from $50 · ...": the at-a-glance line. */
export function glanceLine(services: ServiceContent[]): string {
  return services.flatMap((svc) => (lowPrice(svc) ? [`${svc.shortName} ${lowPrice(svc)}`] : [])).join(" · ");
}

/** "From $49", "$70" — the badge on cards and tiles. */
export function priceBadge(svc: ServiceContent): string | undefined {
  const low = lowPrice(svc);
  return low && low.charAt(0).toUpperCase() + low.slice(1);
}

/** "From $49 + $19 dispatch" — for one-line places such as search results. */
export function priceSummary(svc: ServiceContent): string | undefined {
  const badge = priceBadge(svc);
  return badge ? `${badge} ${DISPATCH_FEE_TAG}` : undefined;
}

/** "Jump start from $49 + $19 = $68" — the brief's example sentence. */
export function exampleTotal(name: string, a: Amount): string {
  const low: Amount = { min: a.min };
  return `${name} from ${servicePrice(low)} + ${DISPATCH_FEE_USD} = ${expectedTotal(low)}`;
}

/**
 * A search-result title that carries the price and the phone number, which is
 * what a driver scanning results on a phone is looking for:
 * "Jump Start DFW 24/7 · from $49 · (945) 412-1215". The phone is dropped when
 * the title would run past what Google shows, because the price matters more.
 */
export function pricedTitle(base: string, price?: string): string {
  const withPrice = price ? `${base} · ${price}` : base;
  const withPhone = `${withPrice} · ${BUSINESS.phoneDisplay}`;
  return withPhone.length <= TITLE_WITH_PHONE_MAX ? withPhone : withPrice;
}

/**
 * The schema.org Offer for a service: the expected total (service price plus
 * the dispatch fee, once) as the price, with both parts listed as components.
 * Undefined for a service with no published price.
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
      description: `${svc.name} ${servicePrice(line)}${line.note ? ` (${line.note})` : ""}, plus a ${DISPATCH_FEE_USD} dispatch fee charged once per job: ${expectedTotal(line)} in total.`,
      priceComponent: [
        {
          "@type": "UnitPriceSpecification",
          name: "Service price",
          priceCurrency: "USD",
          price: line.min,
          ...range(line),
        },
        {
          "@type": "UnitPriceSpecification",
          name: "Dispatch fee, once per job",
          priceCurrency: "USD",
          price: DISPATCH_FEE,
        },
      ],
    },
  };
}
