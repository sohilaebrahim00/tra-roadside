/**
 * Location hubs: pages about one PLACE inside a served city, which route a
 * driver to the right City x Service page rather than selling one service.
 *
 * This list is the single source for where hubs appear: the sitemap reads it,
 * and each city hub links to the hubs inside its own limits. Before it existed
 * the Love Field page was listed in the sitemap and linked from nowhere on the
 * site, which left the one page written for that intent orphaned.
 *
 * A hub belongs here only when the place's relationship to `city` is recorded
 * in local-data.ts. Love Field qualifies because Dallas's entry states it lies
 * inside the city. `summary` describes what the page helps with and must never
 * imply airport access, authorization, permits or any partnership.
 */
export interface LocationHub {
  path: string;
  /** Slug of the served city the place sits inside. */
  city: string;
  name: string;
  summary: string;
}

export const LOCATION_HUBS: LocationHub[] = [
  {
    path: "/airports/dallas-love-field",
    city: "dallas",
    name: "Dallas Love Field",
    summary: "Back from a trip to a car that won't start, won't open or has a flat? Match the symptom to the right service and know what to tell dispatch.",
  },
];

export function locationHubsForCity(city: string): LocationHub[] {
  return LOCATION_HUBS.filter((h) => h.city === city);
}
