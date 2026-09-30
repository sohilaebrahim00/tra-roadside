/**
 * Verified geographic detail for the 27 DFW cities TRA serves.
 *
 * WHY THIS FILE EXISTS
 * Local landing pages only earn local relevance if the local detail on them is
 * actually true. Before this file, `nearbyAreas()` produced its "nearby cities"
 * list with a deterministic pseudo-spread over the service-area array — its own
 * comment described it as a way to make "each city get a different-looking
 * list". It was never geography. It told visitors, and Google, that Denton is
 * near Rockwall (~60 miles apart, opposite corners of the metroplex) and that
 * Grapevine is near Wylie.
 *
 * Everything here is in ONE file on purpose: every local claim the site makes
 * is reviewable in a single place, and one correction propagates to every page
 * that uses it, rather than being scattered across dozens of templates.
 *
 * ACCURACY RULES FOR ANYONE EDITING THIS
 *  - `neighbors` means the cities that genuinely border or directly adjoin this
 *    one, restricted to cities TRA actually serves. It is not "nearby-ish".
 *    Returning three real neighbours is correct; padding to five with a city
 *    forty miles away is not.
 *  - `corridors` are highways and major roads that actually run through or
 *    bound the city.
 *  - `districts` are recognisable areas within the city. Left empty where
 *    nothing is confidently known — an empty list is correct, an invented
 *    neighbourhood name is not.
 *  - Counties list every county the city falls in, primary first.
 */
import type { ServiceArea } from "./business";

export interface LocalArea {
  /** Matches ServiceArea.slug. */
  slug: string;
  /** Primary county first; cities spanning several list them in order. */
  counties: string[];
  /** Highways and major roads through or bounding the city. */
  corridors: string[];
  /** Recognisable districts within the city. Empty when nothing is confidently known. */
  districts: string[];
  /** Cities that genuinely adjoin this one, limited to TRA's service area. */
  neighbors: string[];
}

export const LOCAL_AREAS: LocalArea[] = [
  {
    slug: "dallas",
    counties: ["Dallas"],
    corridors: ["I-35E", "I-30", "I-45", "I-20", "I-635 (LBJ Freeway)", "US-75 (Central Expressway)", "Dallas North Tollway", "Loop 12"],
    districts: ["Downtown Dallas", "Uptown", "Deep Ellum", "Oak Cliff", "North Dallas", "Lake Highlands", "Love Field area", "Bishop Arts"],
    neighbors: ["irving", "garland", "mesquite", "richardson", "grand-prairie", "farmers-branch", "addison", "coppell", "rowlett", "carrollton"],
  },
  {
    slug: "arlington",
    counties: ["Tarrant"],
    corridors: ["I-20", "I-30", "TX-360", "US-287", "Collins Street", "Cooper Street"],
    districts: ["Entertainment District", "Downtown Arlington", "North Arlington", "South Arlington", "Viridian"],
    neighbors: ["grand-prairie", "euless"],
  },
  {
    slug: "irving",
    counties: ["Dallas"],
    corridors: ["TX-114", "TX-183 (Airport Freeway)", "I-635", "Loop 12", "President George Bush Turnpike", "MacArthur Boulevard"],
    districts: ["Las Colinas", "Valley Ranch", "Irving Heights", "Downtown Irving"],
    neighbors: ["dallas", "coppell", "grand-prairie", "farmers-branch", "grapevine", "euless"],
  },
  {
    slug: "grand-prairie",
    counties: ["Dallas", "Tarrant", "Ellis"],
    corridors: ["I-20", "I-30", "TX-161 (President George Bush Turnpike)", "TX-360", "Belt Line Road"],
    districts: ["Downtown Grand Prairie", "Dalworth", "South Grand Prairie"],
    neighbors: ["arlington", "irving", "dallas"],
  },
  {
    slug: "mesquite",
    counties: ["Dallas"],
    corridors: ["I-30", "I-635", "US-80", "Loop 12", "Town East Boulevard"],
    districts: ["Town East", "Downtown Mesquite"],
    neighbors: ["dallas", "garland", "rowlett"],
  },
  {
    slug: "garland",
    counties: ["Dallas"],
    corridors: ["I-635", "President George Bush Turnpike (TX-190)", "TX-78", "Northwest Highway", "Broadway Boulevard"],
    districts: ["Downtown Garland", "Firewheel"],
    neighbors: ["dallas", "mesquite", "richardson", "rowlett", "sachse"],
  },
  {
    slug: "richardson",
    counties: ["Dallas", "Collin"],
    corridors: ["US-75 (Central Expressway)", "President George Bush Turnpike (TX-190)", "Belt Line Road", "Campbell Road"],
    districts: ["Telecom Corridor", "Canyon Creek", "Downtown Richardson"],
    neighbors: ["dallas", "garland", "plano", "addison"],
  },
  {
    slug: "plano",
    counties: ["Collin", "Denton"],
    corridors: ["US-75 (Central Expressway)", "Dallas North Tollway", "President George Bush Turnpike (TX-190)", "Sam Rayburn Tollway (TX-121)", "Preston Road"],
    districts: ["Legacy West", "Downtown Plano", "West Plano", "Willow Bend"],
    neighbors: ["richardson", "frisco", "allen", "carrollton", "the-colony", "addison"],
  },
  {
    slug: "frisco",
    counties: ["Collin", "Denton"],
    corridors: ["Dallas North Tollway", "Sam Rayburn Tollway (TX-121)", "US-380", "Preston Road", "Legacy Drive"],
    districts: ["The Star", "Frisco Square", "Stonebriar"],
    neighbors: ["plano", "the-colony", "mckinney"],
  },
  {
    slug: "mckinney",
    counties: ["Collin"],
    corridors: ["US-75 (Central Expressway)", "US-380", "Sam Rayburn Tollway (TX-121)", "TX-5", "Custer Road"],
    districts: ["Historic Downtown McKinney", "Craig Ranch", "Stonebridge Ranch"],
    neighbors: ["allen", "frisco"],
  },
  {
    slug: "allen",
    counties: ["Collin"],
    corridors: ["US-75 (Central Expressway)", "Sam Rayburn Tollway (TX-121)", "Exchange Parkway", "Stacy Road"],
    districts: ["Watters Creek", "Twin Creeks"],
    neighbors: ["plano", "mckinney"],
  },
  {
    slug: "carrollton",
    counties: ["Dallas", "Denton", "Collin"],
    corridors: ["I-35E", "President George Bush Turnpike (TX-190)", "Belt Line Road", "Josey Lane", "Trinity Mills Road"],
    districts: ["Downtown Carrollton", "Trinity Mills"],
    neighbors: ["farmers-branch", "addison", "the-colony", "lewisville", "coppell", "dallas", "plano"],
  },
  {
    slug: "lewisville",
    counties: ["Denton"],
    corridors: ["I-35E", "Sam Rayburn Tollway (TX-121)", "FM 407", "Main Street", "Round Grove Road"],
    districts: ["Old Town Lewisville", "Vista Ridge", "Lake Lewisville area"],
    neighbors: ["the-colony", "carrollton", "denton", "coppell"],
  },
  {
    slug: "denton",
    counties: ["Denton"],
    corridors: ["I-35E", "I-35W", "US-380", "US-377", "Loop 288"],
    districts: ["Downtown Denton Square", "University of North Texas area", "Texas Woman's University area"],
    neighbors: ["lewisville"],
  },
  {
    slug: "the-colony",
    counties: ["Denton"],
    corridors: ["Sam Rayburn Tollway (TX-121)", "FM 423", "Main Street", "Josey Lane"],
    districts: ["Grandscape", "Austin Ranch"],
    neighbors: ["frisco", "lewisville", "carrollton", "plano"],
  },
  {
    slug: "euless",
    counties: ["Tarrant"],
    corridors: ["TX-183 (Airport Freeway)", "TX-360", "TX-10", "Main Street", "Glade Road"],
    districts: ["Midway Park", "Glade Crossing"],
    neighbors: ["bedford", "hurst", "grapevine", "irving", "arlington"],
  },
  {
    slug: "bedford",
    counties: ["Tarrant"],
    corridors: ["TX-183 (Airport Freeway)", "TX-121", "Brown Trail", "Harwood Road", "Central Drive"],
    districts: ["Old Bedford", "Brown Trail corridor"],
    neighbors: ["euless", "hurst", "north-richland-hills"],
  },
  {
    slug: "hurst",
    counties: ["Tarrant"],
    corridors: ["TX-183 (Airport Freeway)", "TX-26", "Loop 820", "Pipeline Road", "Precinct Line Road"],
    districts: ["North East Mall area", "Bellaire Drive corridor"],
    neighbors: ["bedford", "euless", "north-richland-hills"],
  },
  {
    slug: "north-richland-hills",
    counties: ["Tarrant"],
    corridors: ["Loop 820", "TX-26", "TX-121 (Airport Freeway)", "Rufe Snow Drive", "Davis Boulevard"],
    districts: ["Smithfield", "Iron Horse"],
    neighbors: ["hurst", "bedford", "grapevine"],
  },
  {
    slug: "grapevine",
    counties: ["Tarrant", "Dallas", "Denton"],
    corridors: ["TX-114", "TX-121", "TX-26", "William D. Tate Avenue", "DFW Airport north entrance"],
    districts: ["Historic Main Street", "Grapevine Mills area", "Lake Grapevine"],
    neighbors: ["euless", "north-richland-hills", "coppell", "irving"],
  },
  {
    slug: "coppell",
    counties: ["Dallas", "Denton"],
    corridors: ["TX-121", "I-635", "Belt Line Road", "MacArthur Boulevard", "Sandy Lake Road"],
    districts: ["Old Town Coppell", "Valley Ranch border"],
    neighbors: ["irving", "grapevine", "carrollton", "lewisville", "dallas"],
  },
  {
    slug: "farmers-branch",
    counties: ["Dallas"],
    corridors: ["I-35E", "I-635", "Josey Lane", "Valley View Lane", "Webb Chapel Road"],
    districts: ["Mustang Station", "Historic Farmers Branch"],
    neighbors: ["dallas", "carrollton", "addison", "irving"],
  },
  {
    slug: "addison",
    counties: ["Dallas"],
    corridors: ["Dallas North Tollway", "President George Bush Turnpike (TX-190)", "Belt Line Road", "Midway Road", "Addison Airport"],
    districts: ["Addison Circle", "Belt Line restaurant corridor"],
    neighbors: ["dallas", "farmers-branch", "carrollton", "richardson", "plano"],
  },
  {
    slug: "rockwall",
    counties: ["Rockwall"],
    corridors: ["I-30", "TX-66", "FM 740", "John King Boulevard", "Lake Ray Hubbard"],
    districts: ["Historic Downtown Rockwall", "The Harbor"],
    neighbors: ["rowlett"],
  },
  {
    slug: "rowlett",
    counties: ["Dallas", "Rockwall"],
    corridors: ["President George Bush Turnpike (TX-190)", "Lakeview Parkway (TX-66)", "Rowlett Road", "Lake Ray Hubbard"],
    districts: ["Downtown Rowlett", "Lake Ray Hubbard shoreline"],
    neighbors: ["garland", "rockwall", "sachse", "mesquite", "dallas"],
  },
  {
    slug: "sachse",
    counties: ["Dallas", "Collin"],
    corridors: ["TX-78", "President George Bush Turnpike (TX-190)", "Ranch Road", "Miles Road"],
    districts: [],
    neighbors: ["garland", "rowlett", "wylie"],
  },
  {
    slug: "wylie",
    counties: ["Collin", "Dallas", "Rockwall"],
    corridors: ["TX-78", "FM 544", "Brown Street", "Lake Lavon"],
    districts: ["Downtown Wylie"],
    neighbors: ["sachse"],
  },
];

const BY_SLUG = new Map(LOCAL_AREAS.map((a) => [a.slug, a]));

export function getLocalArea(slug: string): LocalArea | undefined {
  return BY_SLUG.get(slug);
}

/**
 * Real adjoining cities, in service-area order, capped at `limit`.
 *
 * Returns FEWER than `limit` when a city genuinely has fewer served
 * neighbours — Denton and Wylie sit at the edge of the coverage area and have
 * one each. That is the honest answer, and padding it out with a city on the
 * far side of the metroplex is what this function exists to stop.
 */
export function realNeighbors(slug: string, areas: ServiceArea[], limit = 5): ServiceArea[] {
  const local = BY_SLUG.get(slug);
  if (!local) return [];
  const order = new Map(areas.map((a, i) => [a.slug, i]));
  return local.neighbors
    .map((n) => areas.find((a) => a.slug === n))
    .filter((a): a is ServiceArea => Boolean(a))
    .sort((a, b) => (order.get(a.slug) ?? 0) - (order.get(b.slug) ?? 0))
    .slice(0, limit);
}
