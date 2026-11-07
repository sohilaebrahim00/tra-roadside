import type { ServiceTypeSlug } from "@/lib/types/domain";
import type { GuideSection } from "./guides";
import { TOPICS_PROBLEMS } from "./topic-pages-problems";
import { TOPICS_PLACES } from "./topic-pages-places";

/**
 * Landing pages for what drivers actually search: a problem ("flat tire at
 * night"), a kind of driver ("semi truck jump start"), or a place ("stuck on
 * I-35E"). They live at /roadside/<slug> and are rendered by one template, with
 * every word of copy written for that page in the two data files.
 *
 * RULES FOR EDITING
 *  - Prices are never typed into prose. Write {{price:<service-slug>}},
 *    {{total:<service-slug>}} or {{dispatchFee}}; the page renders them from
 *    SERVICES.
 *  - State only what TRA actually does (services.ts, business.ts) and general
 *    automotive facts. No arrival times (the nearest driver is sent as soon as
 *    possible), no invented statistics, no reviews, no named customers.
 *  - A place page may name only what local-data.ts records, and must never imply
 *    a permit, an authorization, or a partnership with an airport, a venue or a
 *    road authority.
 *  - Written from scratch. Competitor pages show which questions people ask,
 *    never the wording.
 *  - US English, plain sentences. In a live traffic lane the advice is always to
 *    call 911 first.
 */

export type TopicKind = "problem" | "driver" | "place";

export interface TopicPage {
  slug: string;
  kind: TopicKind;
  /** Base of the <title>; the price and phone are added by pricedTitle(). Under 40 characters. */
  title: string;
  h1: string;
  /** May use price tokens. Under 150 characters. */
  metaDescription: string;
  /** Short label above the H1. */
  eyebrow: string;
  /** Opening paragraph: what this page helps with, who it helps, how to get it. */
  intro: string;
  /** The main service: its price panel and request button. */
  service: ServiceTypeSlug;
  /** Other services worth offering here. */
  alsoServices: ServiceTypeSlug[];
  /** Served cities this page belongs to, for linking from their hubs. */
  cities?: string[];
  sections: GuideSection[];
  faqs: { q: string; a: string }[];
}

export const TOPIC_PAGES: TopicPage[] = [...TOPICS_PROBLEMS, ...TOPICS_PLACES];

const BY_SLUG = new Map(TOPIC_PAGES.map((t) => [t.slug, t]));

export function getTopicPage(slug: string): TopicPage | undefined {
  return BY_SLUG.get(slug);
}

/** Topic pages that belong to a city, for its hub. */
export function topicsForCity(city: string): TopicPage[] {
  return TOPIC_PAGES.filter((t) => t.cities?.includes(city));
}

/** Topic pages built around a service, for its page. */
export function topicsForService(service: ServiceTypeSlug): TopicPage[] {
  return TOPIC_PAGES.filter((t) => t.service === service);
}
