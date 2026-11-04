import { BUSINESS, SERVICE_AREAS, type ServiceArea } from "./business";
import type { LocalArea } from "./local-data";
import { SERVICES, getService, type ServiceContent } from "./services";
import { formatAmount } from "./price-format";
import type { FaqItem } from "./faqs";
import { DISPATCH_FEE_EXPLAINER, DISPATCH_FEE_USD, glanceLine, headlineLine, priceSummary, servicePrice } from "./pricing";
import type { ServiceTypeSlug } from "@/lib/types/domain";

/**
 * The direct answers a driver is looking for, written the way people ask them,
 * so a search result or an AI assistant can lift them whole: a question, a
 * short answer, and a table of the facts behind it (owner, 2026-11-04: work the
 * way the leading competitor's pages do, with our own words and our own facts).
 *
 * Every figure comes from SERVICES and every geographic fact from local-data,
 * so nothing here can go stale. It states only what the site already stands
 * behind. Things still unconfirmed by the owner are deliberately absent: an
 * after-hours policy, payment methods, and an arrival time better than the
 * published 30-minute average.
 *
 * The city-page answers repeat a sentence pattern across cities on purpose.
 * They are short facts sitting above the prose that city-service-pages.ts
 * writes individually, not a replacement for it.
 */

export interface QuickFact {
  label: string;
  value: string;
  href?: string;
}

export interface QuickAnswerContent {
  question: string;
  answer: string;
  facts: QuickFact[];
  note: string;
}

const DFW = "Dallas–Fort Worth";
const AVAILABILITY = "Open 24 hours a day, 365 days a year, including nights, weekends and holidays";
const MEMBERSHIP = "None. No sign-up and no annual dues: you pay only for the job.";
const ARRIVAL = "Average 30-minute arrival. Actual time depends on your location and traffic.";
const NOTE = `Prices are starting prices. Dispatch confirms the price for your vehicle and location before a driver is sent.`;
const CONTACT: QuickFact = { label: "Contact", value: `Request online or call ${BUSINESS.phoneDisplay}`, href: BUSINESS.phoneHref };

/** How people ask what a service costs. */
const PRICE_QUESTION: Record<ServiceTypeSlug, string> = {
  "jump-start": "How much is a jump start",
  "battery-replacement": "How much is a car battery replacement",
  lockout: "How much does it cost to unlock a car",
  "tire-repair-plug-patch": "How much is a flat tire repair",
  "flat-tire-change": "How much is a flat tire change",
  "tire-replacement": "How much is a mobile tire replacement",
  "stuck-screw-in-tire": "How much does it cost to get a screw out of a tire",
  "rim-lock-removal": "How much is wheel lock removal",
};

/** How people ask who can help. */
const WHO_QUESTION: Record<ServiceTypeSlug, string> = {
  "jump-start": "Who can jump start my car",
  "battery-replacement": "Who replaces a car battery on site",
  lockout: "Who can unlock my car",
  "tire-repair-plug-patch": "Who repairs a flat tire on site",
  "flat-tire-change": "Who changes a flat tire",
  "tire-replacement": "Who brings and installs a new tire",
  "stuck-screw-in-tire": "Who can get a screw out of my tire",
  "rim-lock-removal": "Who can remove a wheel lock",
};

/** A service's price as a sentence reads it: "$49–$75, or $140 for semi trucks and 18-wheelers". */
function priceWords(svc: ServiceContent): string {
  const [headline, ...variants] = svc.priceLines ?? [];
  if (!headline) return "";
  const first = formatAmount(headline, "–", "from");
  const rest = variants.map((v) => `${formatAmount(v, "–", "from")} for ${(v.label ?? "").toLowerCase()}`);
  return [first, ...rest].join(", or ");
}

function priceOf(slug: ServiceTypeSlug): string {
  const svc = getService(slug);
  const line = svc && headlineLine(svc);
  return line ? formatAmount(line, "–", "from") : "";
}

function lowOfSlug(slug: ServiceTypeSlug): string {
  const svc = getService(slug);
  const line = svc && headlineLine(svc);
  return line ? `$${line.min}` : "";
}

/** The sentence used wherever the whole price list is quoted in words. */
export function pricesInWords(): string {
  return `jump starts from ${lowOfSlug("jump-start")}, lockouts from ${lowOfSlug("lockout")}, tire repair from ${lowOfSlug("tire-repair-plug-patch")}, spare tire changes from ${lowOfSlug("flat-tire-change")}, and batteries installed from ${lowOfSlug("battery-replacement")}, plus a flat ${DISPATCH_FEE_USD} dispatch fee`;
}

const LEAD_SERVICES: ServiceTypeSlug[] = ["jump-start", "lockout", "tire-repair-plug-patch", "flat-tire-change", "battery-replacement"];

/** The at-a-glance line for the five calls that cover most breakdowns. */
export function leadGlance(): string {
  return glanceLine(LEAD_SERVICES.flatMap((slug) => getService(slug) ?? []));
}

/** "Dallas, Arlington, Irving, Plano, Frisco and 22 more DFW cities" */
function coverageLine(): string {
  const named = ["dallas", "arlington", "irving", "plano", "frisco"];
  const names = named.flatMap((slug) => SERVICE_AREAS.find((c) => c.slug === slug)?.name ?? []);
  return `${names.join(", ")} and ${SERVICE_AREAS.length - names.length} more ${DFW} cities`;
}

export function homeAnswer(): QuickAnswerContent {
  return {
    question: "Who can I call for roadside help in Dallas right now?",
    answer: `Texas Roadside Assistance sends a technician to your car anywhere in ${DFW}, 24 hours a day, with no membership: ${pricesInWords()}. Request online or call ${BUSINESS.phoneDisplay}.`,
    facts: [
      { label: "Hours", value: AVAILABILITY },
      { label: "Service area", value: coverageLine() },
      { label: "Starting prices", value: leadGlance() },
      { label: "Dispatch fee", value: `${DISPATCH_FEE_USD} flat, once per job` },
      { label: "Services", value: SERVICES.map((s) => s.name).join(", ") },
      { label: "Arrival", value: ARRIVAL },
      { label: "Membership", value: MEMBERSHIP },
      { label: "Company", value: `${BUSINESS.dispatchNote}. Licensed and insured.` },
      CONTACT,
    ],
    note: NOTE,
  };
}

export function pricingAnswer(): QuickAnswerContent {
  return {
    question: "How much does roadside assistance cost in Dallas?",
    answer: `TRA publishes its prices: ${pricesInWords()}. There is no membership, and dispatch confirms the price before a driver is sent.`,
    facts: [
      ...SERVICES.flatMap((svc) => (headlineLine(svc) ? [{ label: svc.shortName, value: priceWords(svc) }] : [])),
      { label: "Dispatch fee", value: `${DISPATCH_FEE_USD} flat, once per job` },
      { label: "Service area", value: coverageLine() },
      { label: "Hours", value: AVAILABILITY },
      CONTACT,
    ],
    note: NOTE,
  };
}

export function serviceAnswer(svc: ServiceContent): QuickAnswerContent {
  return {
    question: `${PRICE_QUESTION[svc.slug]} in ${DFW}?`,
    answer: `${svc.name} is ${priceWords(svc)}, plus the flat ${DISPATCH_FEE_USD} dispatch fee charged once per job. ${svc.priceCovers ?? ""} TRA comes to your car anywhere in ${DFW}, 24 hours a day, with no membership. Request online or call ${BUSINESS.phoneDisplay}.`.replace(/\s+/g, " "),
    facts: [
      { label: "Service", value: svc.summary },
      { label: "Service area", value: coverageLine() },
      { label: "Availability", value: AVAILABILITY },
      { label: "Starting price", value: priceSummary(svc) ?? "Confirmed by dispatch" },
      { label: "Membership", value: MEMBERSHIP },
      CONTACT,
    ],
    note: svc.priceNote ?? NOTE,
  };
}

export function cityServiceAnswer(svc: ServiceContent, city: ServiceArea, local: LocalArea, nearby: readonly ServiceArea[]): QuickAnswerContent {
  const corridors = local.corridors.slice(0, 5).join(", ");
  const neighbors = nearby.map((c) => c.name).join(", ");
  return {
    question: `${WHO_QUESTION[svc.slug]} in ${city.name}?`,
    answer: `Texas Roadside Assistance sends a technician to your car in ${city.name}, TX, 24 hours a day, with no membership. ${svc.name} is ${priceWords(svc)}, plus the flat ${DISPATCH_FEE_USD} dispatch fee. Request online or call ${BUSINESS.phoneDisplay}.`,
    facts: [
      { label: "Service", value: svc.summary },
      { label: "Service area", value: [`${city.name}, TX`, corridors && `including ${corridors}`, neighbors && `and nearby ${neighbors}`].filter(Boolean).join(", ") },
      { label: "Availability", value: AVAILABILITY },
      { label: "Starting price", value: priceSummary(svc) ?? "Confirmed by dispatch" },
      { label: "Membership", value: MEMBERSHIP },
      CONTACT,
    ],
    note: svc.priceNote ?? NOTE,
  };
}

/**
 * Two questions every city and service page answers. A page whose written FAQs
 * already ask what it costs keeps its own wording and skips the first one.
 */
export function cityServiceFaqs(svc: ServiceContent, city: ServiceArea, existing: readonly { q: string }[]): { q: string; a: string }[] {
  const asksPrice = existing.some((f) => /how much|what does .* cost/i.test(f.q));
  const service = svc.shortName.toLowerCase();
  return [
    ...(asksPrice
      ? []
      : [
          {
            q: `${PRICE_QUESTION[svc.slug]} in ${city.name}?`,
            a: `${svc.name} is ${priceWords(svc)}, plus the flat ${DISPATCH_FEE_USD} dispatch fee charged once per job. The price list is the same across ${DFW}, and dispatch confirms the price for your vehicle before a driver is sent.`,
          },
        ]),
    {
      q: `Is there a 24 hour ${service} service near me in ${city.name}?`,
      a: `Yes. TRA dispatches 24 hours a day, 365 days a year, and the driver comes to wherever the car is in ${city.name}. There's no membership and no account: share your location, and we'll let you know when your driver is on the way.`,
    },
  ];
}

/**
 * The questions drivers ask most, grouped the way they ask them. These live in
 * code rather than in the admin FAQ manager because every answer quotes prices
 * from SERVICES; getFaqs() puts them ahead of the managed list.
 */
export function roadsideFaqs(): FaqItem[] {
  const fee = DISPATCH_FEE_USD;
  const trunk = getService("lockout")?.priceLines?.[1];
  const jump = priceOf("jump-start");
  const lockout = priceOf("lockout");
  const repair = priceOf("tire-repair-plug-patch");
  const flat = priceOf("flat-tire-change");
  const tire = priceOf("tire-replacement");
  const battery = priceOf("battery-replacement");
  const faq = (id: string, category: string, question: string, answer: string): FaqItem => ({ id: `roadside-${id}`, category, question, answer });

  return [
    faq("right-now", "Getting Help Right Now", "Can someone come to me right now?", `Yes. TRA dispatches 24 hours a day across ${DFW}, and you don't need a membership or an account. Send a request with your location, or call ${BUSINESS.phoneDisplay}. Dispatch confirms the price before a driver is sent, and lets you know when they're on the way.`),
    faq("need", "Getting Help Right Now", "What do you need from me when I ask for help?", "Your location (an address, cross streets or a map pin), the vehicle's year, make and model, and what happened. That's enough to send the right driver with the right equipment."),
    faq("cost", "What It Costs", "How much does roadside assistance cost in Dallas?", `Jump starts are ${jump}, lockouts ${lockout}, tire repair ${repair}, a spare tire change ${flat}, a new tire installed ${tire}, and a new battery installed ${battery} for eligible vehicles. A flat ${fee} dispatch fee is added once per job.`),
    faq("dispatch", "What It Costs", `What is the ${fee} dispatch fee?`, `${DISPATCH_FEE_EXPLAINER} It is added to the service price, never charged twice on one job, and never the whole cost of the service.`),
    faq("tow", "What It Costs", "Is a roadside call cheaper than a tow and a shop visit?", `For a job we can finish where the car sits, you skip the tow and the trip to the shop. A tire plug or patch is ${repair}, putting on your spare is ${flat}, a new tire installed is ${tire}, and a battery installed is ${battery}, plus the ${fee} dispatch fee. We don't tow, so a car that needs a shop is the one case we can't fix at the roadside.`),
    faq("membership", "What It Costs", "Do I need a membership or a contract?", "No. There's no membership, no annual dues and no contract. You pay for the job you asked for, and you don't need an auto club or an insurance claim to call us."),
    faq("tire-24", "Flat Tires", "Is there a 24 hour tire service near me?", `Yes. TRA's drivers come to you at any hour across ${DFW}, in a driveway, a parking lot, a garage or on the shoulder, so you don't have to wait for a tire shop to open. Putting on your spare is ${flat} and a repair is ${repair}, plus the ${fee} dispatch fee.`),
    faq("keep-driving", "Flat Tires", "Should I keep driving on a flat tire?", "No. A few more miles on a flat can ruin the tire and damage the wheel, turning a repair into a replacement. Get to a safe spot and turn on your hazards. If you're on a highway shoulder, stay buckled in until the driver arrives."),
    faq("no-spare", "Flat Tires", "What if I don't have a spare?", `A new tire can be supplied and installed where you're parked, ${tire}, plus the ${fee} dispatch fee. Tire availability varies, so tell dispatch your tire size. It's printed on the sidewall, for example 235/55R18.`),
    faq("jump-or-new", "Batteries and Jump Starts", "Do I need a jump start or a new battery?", `If the battery still holds a charge, a jump start (${jump}) gets you going. If it won't hold one, your driver can advise on site, and a new battery installed is ${battery} for eligible vehicles, plus the ${fee} dispatch fee.`),
    faq("died-again", "Batteries and Jump Starts", "My car died again after a jump. What now?", "Usually the battery no longer holds a charge, or the alternator isn't recharging it. Request a battery replacement and tell dispatch what happened. A new battery won't fix a bad alternator, so ask your driver to advise before you buy one."),
    faq("unlock-cost", "Car Lockouts", "How much does it cost to unlock my car?", `A door lockout is ${lockout}${trunk ? `, and keys locked in the trunk are ${servicePrice(trunk)}` : ""}, plus the ${fee} dispatch fee. Have an ID ready that matches the registration.`),
    faq("child", "Car Lockouts", "A child or pet is locked in the car. What should I do?", `If anyone is in danger, call 911 first. Then call ${BUSINESS.phoneDisplay}: we treat it as urgent and route it to the nearest driver first.`),
    faq("dont-do", "What We Don't Do", "Is there anything you don't do?", "We handle batteries, jump starts, lockouts and tires. We don't tow and we don't deliver fuel, so if that's what you need, we'll tell you right away instead of sending a driver you'd have to pay for."),
  ];
}
