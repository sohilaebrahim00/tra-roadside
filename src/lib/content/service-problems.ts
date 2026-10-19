import type { ServiceTypeSlug } from "@/lib/types/domain";

/**
 * The situation a driver recognizes, for each service. A stressed driver
 * knows "my car won't start" before they know the name of the service, so
 * the home page leads with these and shows the service name second.
 */
export const SERVICE_PROBLEM: Record<ServiceTypeSlug, string> = {
  "battery-replacement": "Need a new battery",
  "jump-start": "Car won't start",
  lockout: "Locked out",
  "tire-repair-plug-patch": "Nail or slow leak",
  "flat-tire-change": "Flat tire",
  "tire-replacement": "Tire too damaged",
  "stuck-screw-in-tire": "Screw in the tire",
  "rim-lock-removal": "Lost wheel lock key",
  "fuel-delivery": "Out of gas",
  towing: "Need a tow",
};
