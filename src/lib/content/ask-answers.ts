import { BUSINESS, SERVICE_AREAS } from "./business";
import { type ServiceContent } from "./services";
import { normalizeQuery, searchServices } from "./service-search";
import { formatAmount } from "./price-format";
import { DISPATCH_FEE_USD, headlineLine } from "./pricing";
import { pricesInWords } from "./quick-answers";

/**
 * The answers behind the "Ask" button. There is no AI model and no server call:
 * it reads what the driver typed, picks the matching fact from the site's own
 * content, and always leaves a way to reach a real dispatcher. That means no
 * running cost and no chance of it inventing a price or a promise.
 */

export interface AskAnswer {
  text: string;
  /** The service the answer is about: the buttons request it and link to it. */
  service?: ServiceContent;
  /** A page that says more. */
  link?: { href: string; label: string };
}

export const ASK_SUGGESTIONS = [
  "Locked my keys in the car",
  "My car won't start",
  "I have a flat tire",
  "How much does it cost?",
  "How fast can you get here?",
  "Do I need a membership?",
];

function serviceAnswer(svc: ServiceContent): AskAnswer {
  const line = headlineLine(svc);
  const price = line ? ` ${svc.name} is ${formatAmount(line, "–", "from")}, plus the flat ${DISPATCH_FEE_USD} dispatch fee.` : "";
  return {
    text: `${svc.summary}${price}${svc.priceNote ? ` ${svc.priceNote}` : ""}`,
    service: svc,
    link: { href: `/services/${svc.slug}`, label: `More about ${svc.shortName.toLowerCase()}` },
  };
}

export function answerQuestion(raw: string): AskAnswer {
  const q = normalizeQuery(raw);
  const has = (pattern: RegExp) => pattern.test(q);
  // "how much is ..." and the like say nothing about which service it is.
  const topic = q.replace(/(how|much|does|it|is|what|cost|costs|price|prices|pricing|charge|charges|fee|fees|rate|rates)/g, " ");
  const svc = searchServices(topic, 1)[0];

  if (has(/\b(child|kid|kids|baby|infant|toddler|pet|dog|puppy|cat)\b/)) {
    return { text: `If anyone is in danger, call 911 first. Then call ${BUSINESS.phoneDisplay}: we treat a child or pet locked in a car as urgent and route it to the nearest driver first.` };
  }
  if (has(/\b(tow|towing|towed|wrecker|flatbed)\b/)) {
    return { text: "We don't tow. We fix what can be fixed where the car sits: batteries, jump starts, lockouts and tires. If your car needs a tow, a towing company is the right call." };
  }
  if (has(/\b(gas|fuel|diesel)\b/)) {
    return { text: "We don't deliver fuel. We handle batteries, jump starts, lockouts and tires, 24 hours a day." };
  }

  const city = SERVICE_AREAS.find((c) => q.includes(normalizeQuery(c.name)));
  if (city) {
    return {
      text: `Yes, we cover ${city.name}, 24 hours a day. A driver comes to wherever the car is, and you can follow them live once they're dispatched.`,
      link: { href: `/service-areas/${city.slug}`, label: `Roadside help in ${city.name}` },
    };
  }

  if (has(/\b(cost|costs|price|prices|pricing|much|charge|charges|fee|fees|rate|rates|dispatch|cheap|expensive)\b/)) {
    if (svc) return serviceAnswer(svc);
    return {
      text: `Our prices are published: ${pricesInWords()}. The fee is charged once per job, and dispatch confirms the price before a driver is sent.`,
      link: { href: "/pricing", label: "See every price" },
    };
  }
  if (has(/\b(fast|long|soon|eta|arrive|arrival|quick|quickly|wait|minutes)\b/)) {
    return { text: "Our average is a 30-minute arrival. The actual time depends on your location and traffic, and you can follow your driver live once they're dispatched.", service: svc };
  }
  if (has(/\b(open|hours|tonight|night|weekend|weekends|holiday|holidays|sunday|24)\b/)) {
    return { text: "Yes, we're open 24 hours a day, 365 days a year, including nights, weekends and holidays.", service: svc };
  }
  if (has(/\b(member|membership|memberships|aaa|club|dues|subscription|contract|insurance)\b/)) {
    return { text: "No membership needed. There are no annual dues and no contract: you pay only for the job you asked for." };
  }
  if (has(/\b(area|areas|cover|coverage|serve|service area|where|city|cities|near)\b/)) {
    return {
      text: `We cover ${SERVICE_AREAS.length} cities across Dallas–Fort Worth, and a driver comes to wherever the car is. Tell us your city to check.`,
      link: { href: "/service-areas", label: "See all service areas" },
    };
  }
  if (has(/\b(pay|payment|card|cash|apple|zelle)\b/)) {
    return { text: `Dispatch can tell you the payment options when you request help, or call ${BUSINESS.phoneDisplay}.` };
  }

  if (svc) return serviceAnswer(svc);
  return { text: `I don't have an answer for that one here. A real dispatcher does: send a request or call ${BUSINESS.phoneDisplay}, any hour.` };
}
