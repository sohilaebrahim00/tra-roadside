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

interface PricedService {
  slug: string;
  priceBadge?: string;
  priceFrom?: number;
  semiTruckPrice?: string;
}

/**
 * A service's price for a text message, from SERVICES so it never drifts:
 * "$55-65", "$120 + $5/mile", "From $189 (battery only, installation quoted)".
 * A semi truck gets its own figure where the service has one ("$140" for a
 * jump start). En and em dashes become hyphens, because either one would
 * switch the whole text to UCS-2 and halve the characters per SMS part.
 */
export function smsPrice(service: PricedService, vehicleType?: string): string {
  const ascii = (s: string) => s.replace(/[–—]/g, "-");
  if (vehicleType === "semi_truck" && service.semiTruckPrice) return ascii(service.semiTruckPrice);
  if (service.slug === "battery-replacement" && service.priceFrom) {
    return `From $${service.priceFrom} (battery only, installation quoted)`;
  }
  const badge = service.priceBadge ? ascii(service.priceBadge) : service.priceFrom ? `From $${service.priceFrom}` : "";
  if (service.slug === "tire-replacement" && badge) return `${badge} (by wheel size)`;
  return badge;
}
