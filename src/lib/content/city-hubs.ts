import { CITY_HUBS_EAST } from "./city-hubs-east";
import { CITY_HUBS_WEST } from "./city-hubs-west";

/**
 * Written copy for each city's hub page (/service-areas/<city>): an opening
 * paragraph, what driving there is like, and the questions drivers in that city
 * ask. Every geographic fact comes from local-data.ts, and the rules at the top
 * of city-service-pages.ts apply: a paragraph that reads the same with another
 * city's name in it is a doorway page and must be rewritten.
 */
export interface CityHubContent {
  city: string;
  intro: string;
  /** 2 paragraphs on roadside trouble in this city, from its verified geography. */
  local: string[];
  faqs: { q: string; a: string }[];
}

const BY_CITY = new Map([...CITY_HUBS_EAST, ...CITY_HUBS_WEST].map((c) => [c.city, c]));

export function getCityHub(city: string): CityHubContent | undefined {
  return BY_CITY.get(city);
}
