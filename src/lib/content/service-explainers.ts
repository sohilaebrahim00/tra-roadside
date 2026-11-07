import type { ServiceTypeSlug } from "@/lib/types/domain";
import type { GuideSection } from "./guides";

/**
 * The long explanation on each service page: how the job goes, how to tell
 * you need it, what it covers and what it doesn't, plus the questions drivers
 * ask most. Owner, 2026-11-07: explain as much as the competitor does, with
 * nothing made up.
 *
 * RULES FOR EDITING
 *  - Prices only through tokens: {{price:<slug>}}, {{total:<slug>}},
 *    {{price2:jump-start}}, {{price2:lockout}}, {{dispatchFee}}.
 *  - Describe the job as it is done on any car, and what TRA offers as
 *    services.ts states it. No equipment brands, certifications, warranties
 *    beyond services.ts, after-hours pricing, payment methods or response times
 *    other than the published 30-minute average.
 *  - Customers do not follow the driver: we text or call when they are on the way.
 *  - US English, plain sentences.
 */
export interface ServiceExplainer {
  sections: GuideSection[];
  faqs: { q: string; a: string }[];
}

export const SERVICE_EXPLAINERS: Partial<Record<ServiceTypeSlug, ServiceExplainer>> = {};
