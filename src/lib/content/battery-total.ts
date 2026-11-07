import { getService, type ServiceContent } from "./services";
import { DISPATCH_FEE_USD, checkoutLine, expectedTotal, headlineLine, servicePrice } from "./pricing";

/**
 * What a customer is told about the battery total, and where (owner,
 * 2026-11-07, the same on all three of his sites). The battery price is shown
 * as $239 on its own. The $19 dispatch fee is still charged on a battery job,
 * so the customer hears it the moment they choose to book the battery, or
 * click its price: a short dialog with the total, then Continue or Go back
 * (components/request/battery-total.tsx). The request form repeats it as one
 * line just before the send button.
 *
 * Every figure comes from SERVICES, so a price change reaches the dialog too.
 * Calls and texts are not interrupted: dispatch states the total on the phone.
 */

export const BATTERY_SLUG = "battery-replacement";

export interface BatteryTotalCopy {
  title: string;
  /** What the price covers, and the fee. */
  body: string;
  /** "Total: $258." */
  total: string;
  proceed: string;
  back: string;
  /** "Battery $239 + $19 dispatch = $258 total", for the request form. */
  checkout: string;
}

export function batteryTotalCopy(lang: "en" | "es"): BatteryTotalCopy | undefined {
  const svc = getService(BATTERY_SLUG);
  const line = svc && headlineLine(svc);
  if (!line) return undefined;
  const price = servicePrice(line);
  const total = expectedTotal(line);
  if (lang === "es") {
    return {
      title: "Su total por la batería",
      body: `${price} cubre la batería, el casco y la instalación. Se suma un cargo de despacho de ${DISPATCH_FEE_USD} una vez por trabajo.`,
      total: `Total: ${total}.`,
      proceed: "Continuar",
      back: "Regresar",
      checkout: `Batería ${price} + ${DISPATCH_FEE_USD} de despacho = ${total} en total`,
    };
  }
  return {
    title: "Your battery total",
    body: `${price} covers the battery, core charge and installation. A ${DISPATCH_FEE_USD} dispatch fee is added once per job.`,
    total: `Total: ${total}.`,
    proceed: "Continue",
    back: "Go back",
    checkout: checkoutLine("Battery", line),
  };
}

/**
 * Spread onto the element that shows a service's price, or books it, so a
 * click on it opens the battery total first: `<span {...totalOnClick(svc)}>`.
 * Empty for every service whose fee is printed beside its price.
 */
export function totalOnClick(svc?: Pick<ServiceContent, "feeAtBooking"> | null): { "data-battery-total"?: "" } {
  return svc?.feeAtBooking ? { "data-battery-total": "" } : {};
}
