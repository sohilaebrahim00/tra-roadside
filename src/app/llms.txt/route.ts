import { BUSINESS, SERVICE_AREAS, addressLine } from "@/lib/content/business";
import { SERVICES } from "@/lib/content/services";
import { DISPATCH_FEE_USD, servicePrice } from "@/lib/content/pricing";
import { TOPIC_PAGES } from "@/lib/content/topic-pages";
import { GUIDES } from "@/lib/content/guides";
import { env } from "@/lib/env";

/**
 * /llms.txt: the facts about the business in plain text, for AI assistants that
 * answer "who can help me in Dallas". Built from the same sources as the site,
 * so a price change reaches it. Cached at build time like the static pages.
 */
export const dynamic = "force-static";

export function GET() {
  const base = env.siteUrl;
  const prices = SERVICES.flatMap((svc) =>
    (svc.priceLines ?? []).map((line) => `- ${line.label ? `${svc.name}, ${line.label.toLowerCase()}` : svc.name}: ${servicePrice(line)}${line.note ? ` (${line.note})` : ""}. ${base}/services/${svc.slug}`)
  );

  const text = [
    `# ${BUSINESS.legalName}`,
    "",
    `> Private, local roadside assistance across Dallas-Fort Worth, Texas, 24 hours a day. A technician comes to the vehicle. No membership is needed: customers pay only for the job.`,
    "",
    `Phone: ${BUSINESS.phoneDisplay}`,
    `Email: ${BUSINESS.email}`,
    `Address: ${addressLine()}`,
    `Hours: ${BUSINESS.hours}`,
    `Request online: ${base}/request`,
    `Arrival: the nearest available driver is sent as soon as possible.`,
    `Payment: cash.`,
    `Languages: English and Spanish.`,
    `Does not offer: towing, fuel delivery, or mechanical repair.`,
    "",
    "## Prices",
    `A flat ${DISPATCH_FEE_USD} dispatch fee is added once per job. Dispatch confirms the price before a driver is sent.`,
    ...prices,
    "",
    "## Service area",
    SERVICE_AREAS.map((c) => c.name).join(", "),
    `${base}/service-areas`,
    "",
    "## Common situations",
    ...TOPIC_PAGES.map((t) => `- ${t.h1}: ${base}/roadside/${t.slug}`),
    "",
    "## Guides",
    ...GUIDES.map((g) => `- ${g.h1}: ${base}/guides/${g.slug}`),
    "",
    "## More",
    `- Pricing: ${base}/pricing`,
    `- FAQ: ${base}/faq`,
    `- En español: ${base}/es`,
    "",
  ].join("\n");

  return new Response(text, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
