/**
 * Verified geographic detail for the 27 DFW cities TRA serves.
 *
 * WHY THIS FILE EXISTS
 * Local landing pages only earn local relevance if the local detail on them is
 * true. Before this file, `nearbyAreas()` built its "nearby cities" list with a
 * deterministic pseudo-spread over the service-area array — its own comment
 * described the aim as giving "each city a different-looking list". It was
 * never geography. It told visitors, and Google, that Denton is near Rockwall
 * (opposite corners of the metroplex) and that Grapevine is near Wylie.
 *
 * Everything lives in ONE file so every local claim the site makes is
 * reviewable in one place, and one correction propagates to every page.
 *
 * PROVENANCE
 * `verified` records whether this city's own reference article was read while
 * authoring the entry. `sourceNote` records what that reading established and,
 * where relevant, which adjacency claims came from a NEIGHBOR's article
 * rather than this city's own. All 27 entries were checked.
 *
 * This metadata is INTERNAL. It supports auditing and content generation and
 * must never be rendered to a customer.
 *
 * EDITING RULES
 *  - `neighbors` means genuinely adjacent served cities — municipalities that
 *    border this one. It is NOT "roughly nearby". Carrollton sits 18 miles
 *    from Dallas and 14 from Plano; neither belongs on its list. Denton has no
 *    adjacent served city at all, so its list is empty, and an empty list is
 *    the correct answer rather than something to pad.
 *  - Reciprocity is a VALIDATION CHECK, not a reason to add a relationship. If
 *    A lists B but B does not list A, one of them is wrong — resolve it on the
 *    geography, not by copying the claim across.
 *  - `corridors`, `districts` and `airport` are omitted when they could not be
 *    confidently verified. An empty list is correct; an invented one is not.
 *  - `airport` states the real relationship: land inside the city, a facility
 *    nearby, or regional service. It never implies TRA holds airport access,
 *    authorization, contracts or any partnership.
 */
import type { ServiceArea } from "./business";

export interface LocalArea {
  /** Matches ServiceArea.slug. */
  slug: string;
  /** Primary county first; cities spanning several list them in order. */
  counties: string[];
  /** Highways and major roads verified as running through or bounding the city. */
  corridors: string[];
  /** Recognizable districts. Empty where nothing could be verified. */
  districts: string[];
  /** Factual airport/transport relationship. Omitted where there is none. */
  airport?: string;
  /** Genuinely adjacent served cities. May be empty. */
  neighbors: string[];
  /** Was this city's own reference article read while authoring the entry? */
  verified: boolean;
  /** What the check established. Internal only — never rendered. */
  sourceNote?: string;
}

export const LOCAL_AREAS: LocalArea[] = [
  {
    slug: "dallas",
    counties: ["Dallas", "Collin", "Denton", "Kaufman", "Rockwall"],
    corridors: ["I-35E", "I-30", "I-45", "I-20", "I-635 (LBJ Freeway)", "US-75 (Central Expressway)", "Dallas North Tollway"],
    districts: ["Downtown", "Uptown", "Arts District", "West End Historic District", "Deep Ellum", "Bishop Arts District", "Design District", "Fair Park", "Lakewood", "Lake Highlands", "Oak Cliff"],
    airport: "Dallas Love Field lies inside the city, northwest near Bachman Lake; DFW International serves the wider region.",
    neighbors: ["irving", "garland", "mesquite", "richardson", "grand-prairie", "farmers-branch", "addison", "coppell"],
    verified: true,
    sourceNote:
      "Article confirms five counties and the district list, and names Cockrell Hill, Highland Park and University Park as enclaves. It does not enumerate bordering cities. Adjacency to Mesquite, Richardson, Grand Prairie, Addison and Coppell is confirmed by those cities' own articles; Irving, Garland and Farmers Branch rest on general geography and are the weakest claims here. Rowlett was removed — nothing supports a shared boundary.",
  },
  {
    slug: "arlington",
    counties: ["Tarrant"],
    corridors: ["I-20", "I-30", "US-287"],
    districts: ["Entertainment District"],
    neighbors: ["grand-prairie"],
    verified: true,
    sourceNote:
      "Article states Arlington borders Kennedale, Grand Prairie, Mansfield and Fort Worth, and surrounds Dalworthington Gardens and Pantego. Only Grand Prairie is served. Euless was removed: it is roughly 11 miles away and does not border Arlington.",
  },
  {
    slug: "irving",
    counties: ["Dallas"],
    corridors: ["TX-183 (Airport Freeway)", "I-635 (LBJ Freeway)", "TX-114 (John Carpenter Freeway)", "President George Bush Turnpike"],
    districts: ["Las Colinas", "Valley Ranch"],
    airport: "Part of Dallas/Fort Worth International Airport lies within Irving city limits.",
    neighbors: ["dallas", "coppell", "grand-prairie", "grapevine", "euless"],
    verified: true,
    sourceNote:
      "Article confirms Dallas County, the highway set, Las Colinas and Valley Ranch, and that the city includes part of DFW Airport. It does not list bordering cities; Coppell, Grand Prairie and Euless are confirmed from their own articles. Farmers Branch was removed as unsupported.",
  },
  {
    slug: "grand-prairie",
    counties: ["Dallas", "Tarrant", "Ellis", "Johnson"],
    corridors: ["I-20", "I-30", "TX-360", "TX-161 (President George Bush Turnpike)", "Spur 303 (Pioneer Parkway)", "TX-180 (Main Street)", "Belt Line Road"],
    districts: [],
    airport: "Grand Prairie Municipal Airport is within the city.",
    neighbors: ["dallas", "arlington", "irving"],
    verified: true,
    sourceNote:
      "Article names Dallas to the east, Arlington to the west, Fort Worth to the northwest, Irving to the north, Cedar Hill and Midlothian to the southeast and Mansfield to the southwest. Of those, Dallas, Arlington and Irving are served. Four counties confirmed, including a small part in Johnson County. No named residential districts, so the list is left empty.",
  },
  {
    slug: "mesquite",
    counties: ["Dallas", "Kaufman"],
    corridors: ["I-635 (LBJ Freeway)", "I-30", "I-20", "US-80", "TX-352", "Belt Line Road"],
    districts: ["Skyline Industrial Park"],
    neighbors: ["garland", "dallas"],
    verified: true,
    sourceNote:
      "Article names Garland to the north, Sunnyvale to the northeast, Dallas to the west and south, Seagoville to the south and Balch Springs to the southwest. Only Garland and Dallas are served. Rowlett was REMOVED — it is not among the bordering cities. Kaufman County added.",
  },
  {
    slug: "garland",
    counties: ["Dallas", "Collin", "Rockwall"],
    corridors: ["I-30", "I-635 (LBJ Freeway)", "TX-66", "TX-78", "President George Bush Turnpike", "Belt Line Road"],
    districts: ["Historic Downtown Garland", "Travis College Hill Historic District", "Firewheel"],
    neighbors: ["dallas", "mesquite", "richardson", "rowlett", "sachse"],
    verified: true,
    sourceNote:
      "Article confirms Dallas County with portions in Collin and Rockwall, the highway set, and both historic districts (Downtown Garland listed on the National Register in 2017). It does not enumerate borders: Mesquite, Richardson and Rowlett are confirmed from their own articles, and Sachse's article places Firewheel Town Center a mile to its south, inside Garland.",
  },
  {
    slug: "richardson",
    counties: ["Dallas", "Collin"],
    corridors: ["US-75 (Central Expressway)", "I-635 (LBJ Freeway)", "TX-190 (President George Bush Turnpike)"],
    districts: ["Telecom Corridor", "Galatyn Park"],
    neighbors: ["dallas", "plano", "garland", "sachse"],
    verified: true,
    sourceNote:
      "Article states Dallas, Plano and Garland make up almost all of the Richardson border, and adds Murphy to the northeast and Sachse to the east. Roughly two-thirds Dallas County, northern third Collin. Addison was REMOVED — Addison's article states outright that Richardson does not border it. Belt Line Road and Campbell Road were dropped as unverified.",
  },
  {
    slug: "plano",
    counties: ["Collin", "Denton"],
    corridors: ["US-75 (Central Expressway)", "Dallas North Tollway", "TX-190 (President George Bush Turnpike)", "Sam Rayburn Tollway (TX-121)", "TX-289 (Preston Road)"],
    districts: ["Legacy Drive corporate corridor"],
    neighbors: ["richardson", "frisco", "allen", "the-colony"],
    verified: true,
    sourceNote:
      "Article confirms both counties and that US-75, the Dallas North Tollway, PGBT and the Sam Rayburn Tollway bound central Plano; it notes Plano is the largest city in Texas without an interstate. It does not list borders. Richardson, Allen and The Colony are confirmed from their own articles. Carrollton was REMOVED at 14 miles, and Addison removed per Addison's article.",
  },
  {
    slug: "frisco",
    counties: ["Collin", "Denton"],
    corridors: ["Dallas North Tollway", "Sam Rayburn Tollway (TX-121)", "TX-289 (Preston Road)", "US-380 (University Drive)", "FM 423"],
    districts: [],
    neighbors: ["plano", "the-colony", "mckinney", "allen"],
    verified: true,
    sourceNote:
      "Article confirms both counties and the tollway/highway set. It does not list borders. The Colony's article names Frisco to its north and east, and Allen's article lists Frisco as adjacent. Previously listed districts (The Star, Frisco Square, Stonebriar) were dropped as unverified.",
  },
  {
    slug: "mckinney",
    counties: ["Collin"],
    corridors: ["US-75 (Central Expressway)", "US-380", "TX-5", "Sam Rayburn Tollway (TX-121)"],
    districts: ["Historic Downtown McKinney", "Chestnut Square Heritage Village"],
    airport: "McKinney National Airport, a public general-aviation field, is within the city.",
    neighbors: ["allen", "frisco"],
    verified: true,
    sourceNote:
      "County seat of Collin County. Article confirms the highway set, notes the Sam Rayburn Tollway runs along the McKinney–Allen border, and describes the historic downtown and both airports. Craig Ranch and Stonebridge Ranch were dropped as unverified.",
  },
  {
    slug: "allen",
    counties: ["Collin"],
    corridors: ["US-75 (Central Expressway)", "Sam Rayburn Tollway (TX-121)"],
    districts: [],
    neighbors: ["plano", "mckinney", "frisco"],
    verified: true,
    sourceNote:
      "Article names the adjacent municipalities as Frisco, McKinney, Fairview, Lucas and Plano; Fairview and Lucas are not served. Exchange Parkway, Stacy Road, Watters Creek and Twin Creeks were dropped as unverified.",
  },
  {
    slug: "carrollton",
    counties: ["Dallas", "Denton", "Collin"],
    corridors: ["I-35E", "President George Bush Turnpike", "Sam Rayburn Tollway (TX-121)"],
    districts: [],
    neighbors: ["the-colony", "farmers-branch", "coppell", "addison", "lewisville"],
    verified: true,
    sourceNote:
      "Article confirms three counties and lists adjacent places with distances: The Colony 2mi, Farmers Branch 4mi, Coppell 6mi, Addison 6mi, Lewisville 8mi, Irving 13mi, Plano 14mi, Dallas 18mi. Dallas and Plano were REMOVED as not adjacent — this also overturned an earlier reciprocity patch that had added Carrollton to Dallas.",
  },
  {
    slug: "lewisville",
    counties: ["Denton", "Dallas"],
    corridors: ["I-35E", "Sam Rayburn Tollway (TX-121)", "FM 1171 (Main Street)", "FM 407", "FM 3040"],
    districts: [],
    airport: "Lewisville Lake, created by the Garza–Little Elm Dam, forms the city's northern edge.",
    neighbors: ["the-colony", "carrollton", "coppell"],
    verified: true,
    sourceNote:
      "Article confirms Denton County with portions in Dallas County and the FM-road network. It does not list borders; The Colony's and Coppell's articles both name Lewisville as adjacent, and Carrollton's places it 8 miles away. Denton was REMOVED at roughly 15 miles — near, but not adjacent.",
  },
  {
    slug: "denton",
    counties: ["Denton"],
    corridors: ["I-35", "I-35E", "I-35W", "US-380", "US-377", "US-77", "Loop 288"],
    districts: ["Downtown Denton Square", "University of North Texas area", "Texas Woman's University area"],
    neighbors: [],
    verified: true,
    sourceNote:
      "County seat of Denton County; I-35E and I-35W rejoin as I-35 near the UNT campus. NO served city borders Denton — the nearest, Lewisville, is about 15 miles south and separated by Corinth and Highland Village. The empty list is the correct answer; padding it is what produced the original Denton/Rockwall defect.",
  },
  {
    slug: "the-colony",
    counties: ["Denton"],
    corridors: ["Sam Rayburn Tollway (TX-121)", "FM 423"],
    districts: [],
    airport: "About 23 miles of Lewisville Lake shoreline lie inside the city.",
    neighbors: ["frisco", "lewisville", "carrollton", "plano"],
    verified: true,
    sourceNote:
      "Article states the city is bordered by Lewisville to the west, Frisco to the north and east, and Carrollton and Plano to the south — all four confirmed directly. Grandscape and Austin Ranch were dropped as unverified.",
  },
  {
    slug: "euless",
    counties: ["Tarrant"],
    corridors: ["TX-183 (Airport Freeway)", "TX-360"],
    districts: [],
    airport: "The southwestern portion of Dallas/Fort Worth International Airport lies inside Euless city limits.",
    neighbors: ["bedford", "hurst", "grapevine", "irving"],
    verified: true,
    sourceNote:
      "Article names Bedford to the west, Grapevine to the north and Irving to the east, and confirms the DFW Airport land. Hurst is added from Hurst's own article, which lists Euless as bordering. Arlington was REMOVED at roughly 11 miles. Midway Park and Glade Crossing were dropped as unverified.",
  },
  {
    slug: "bedford",
    counties: ["Tarrant"],
    corridors: ["TX-183 (Airport Freeway)", "TX-121"],
    districts: [],
    neighbors: ["hurst", "euless"],
    verified: true,
    sourceNote:
      "Article gives northeastern Tarrant County and names neighboring cities as Hurst and Euless only. North Richland Hills was REMOVED — neither Bedford's nor NRH's article supports a shared boundary. Brown Trail and Harwood Road were dropped as unverified.",
  },
  {
    slug: "hurst",
    counties: ["Tarrant"],
    corridors: ["TX-183 (Airport Freeway)", "TX-26", "Loop 820"],
    districts: [],
    airport: "About 13 miles from Dallas/Fort Worth International Airport.",
    neighbors: ["bedford", "euless", "north-richland-hills", "grapevine"],
    verified: true,
    sourceNote:
      "Article states Hurst is surrounded by Bedford, Euless, Fort Worth, Richland Hills, North Richland Hills, Grapevine and Colleyville. Of those, four are served. Grapevine was ADDED — it was missing before. Pipeline Road and Precinct Line Road were dropped as unverified for Hurst specifically.",
  },
  {
    slug: "north-richland-hills",
    counties: ["Tarrant"],
    corridors: ["I-820", "TX-26", "FM 1938 (Davis Boulevard)", "FM 3029 (Precinct Line Road)", "Mid Cities Boulevard", "North Tarrant Parkway"],
    districts: [],
    neighbors: ["hurst"],
    verified: true,
    sourceNote:
      "Article lists bordering municipalities as Haltom City, Hurst, Richland Hills, Keller and Colleyville; Watauga is nearby but not bordering. Only Hurst is served. Bedford and Grapevine were REMOVED. Smithfield and Iron Horse were dropped as unverified.",
  },
  {
    slug: "grapevine",
    counties: ["Tarrant", "Dallas", "Denton"],
    corridors: ["TX-114", "TX-121", "TX-26", "TX-360", "I-635 (LBJ Freeway)", "FM 2499"],
    districts: [],
    airport: "Grapevine contains a larger share of Dallas/Fort Worth International Airport than any other city.",
    neighbors: ["euless", "hurst", "coppell", "irving"],
    verified: true,
    sourceNote:
      "Article gives northeast Tarrant County with minor portions in Dallas and Denton, confirms the highway set and the DFW Airport share. Euless's and Coppell's articles name Grapevine as adjacent, and Hurst's lists it too. North Richland Hills was REMOVED. Historic Main Street and Grapevine Mills were dropped as unverified.",
  },
  {
    slug: "coppell",
    counties: ["Dallas", "Denton"],
    corridors: ["TX-121", "Sam Rayburn Tollway", "I-635 (LBJ Freeway)", "President George Bush Turnpike", "I-35E"],
    districts: [],
    airport: "Part of Dallas/Fort Worth International Airport property lies within Coppell city limits.",
    neighbors: ["grapevine", "lewisville", "carrollton", "irving", "dallas"],
    verified: true,
    sourceNote:
      "Article states Coppell is bordered west by Grapevine, north by Lewisville, east by Carrollton and south by Irving and Dallas — all five confirmed directly. It also notes no freeway runs through Coppell; the listed routes bound it. Belt Line Road, MacArthur Boulevard and Sandy Lake Road were dropped as unverified.",
  },
  {
    slug: "farmers-branch",
    counties: ["Dallas"],
    corridors: ["I-35E", "I-635 (LBJ Freeway)", "Dallas North Tollway"],
    districts: [],
    neighbors: ["dallas", "carrollton", "addison"],
    verified: true,
    sourceNote:
      "Article confirms Dallas County and that I-35E bounds it west, the Dallas North Tollway east and I-635 south. It does not list borders: Carrollton's article puts Farmers Branch 4 miles away and Addison's names it as a western and southern neighbor. Irving was REMOVED as unsupported. Mustang Station was dropped as unverified.",
  },
  {
    slug: "addison",
    counties: ["Dallas"],
    corridors: ["Dallas North Tollway", "Belt Line Road", "Keller Springs Road"],
    districts: [],
    airport: "Addison Airport, a business-aviation field, covers roughly one-eighth of the town's area.",
    neighbors: ["dallas", "carrollton", "farmers-branch"],
    verified: true,
    sourceNote:
      "Article states Addison is bordered by Dallas to the north, east and south, Carrollton to the west, and Farmers Branch to the west and south, and says explicitly that Richardson does NOT border Addison. Richardson and Plano were REMOVED. PGBT and Midway Road were dropped as unverified for Addison specifically.",
  },
  {
    slug: "rockwall",
    counties: ["Rockwall"],
    corridors: ["I-30", "US-67", "TX-66", "TX-205", "TX-276"],
    districts: [],
    airport: "Sits on the eastern shore of Lake Ray Hubbard, about 20 miles northeast of Dallas.",
    neighbors: ["rowlett"],
    verified: true,
    sourceNote:
      "County seat of Rockwall County; article confirms the highway set and the Lake Ray Hubbard shoreline. Rowlett is the only served city in contact: it spans Dallas AND Rockwall counties and sits on the opposite shore, linked by I-30. The Harbor and Historic Downtown Rockwall were dropped as unverified.",
  },
  {
    slug: "rowlett",
    counties: ["Dallas", "Rockwall"],
    corridors: ["President George Bush Turnpike", "I-30", "TX-66 (Lakeview Parkway)"],
    districts: [],
    airport: "Sits on Lake Ray Hubbard.",
    neighbors: ["garland", "sachse", "rockwall"],
    verified: true,
    sourceNote:
      "Article confirms Dallas and Rockwall counties, the route set and the lake, and names Garland and Sunnyvale as neighboring cities. Mesquite was REMOVED — Mesquite's own article does not list Rowlett among its borders. Dallas was removed as unsupported.",
  },
  {
    slug: "sachse",
    counties: ["Collin", "Dallas"],
    corridors: ["TX-78", "President George Bush Turnpike"],
    districts: [],
    neighbors: ["garland", "rowlett", "wylie", "richardson"],
    verified: true,
    sourceNote:
      "Article places Sachse in Collin and Dallas counties, off SH 78 and the President George Bush Turnpike, about a mile north of Firewheel Town Center in Garland. Richardson's article names Sachse as its eastern neighbor. No districts could be verified, so none are listed.",
  },
  {
    slug: "wylie",
    counties: ["Collin", "Dallas", "Rockwall"],
    corridors: ["TX-78", "FM 544", "FM 1378", "FM 2514", "FM 3412"],
    districts: [],
    airport: "Sits between Lavon Lake and Lake Ray Hubbard, about 24 miles northeast of central Dallas.",
    neighbors: ["sachse"],
    verified: true,
    sourceNote:
      "Article confirms all three counties and the FM-road network. It does not enumerate borders; Sachse is the only served city genuinely adjacent. Downtown Wylie was dropped as unverified.",
  },
];

const BY_SLUG = new Map(LOCAL_AREAS.map((a) => [a.slug, a]));

export function getLocalArea(slug: string): LocalArea | undefined {
  return BY_SLUG.get(slug);
}

/**
 * Genuinely adjacent served cities, in listed order, capped at `limit`.
 *
 * Returns FEWER than `limit` — including NONE — when a city genuinely has
 * fewer adjacent served cities. Denton has none, Arlington, North Richland
 * Hills, Rockwall and Wylie have one each. Callers must handle an empty array
 * by omitting the section rather than rendering an empty heading.
 */
export function realNeighbors(slug: string, areas: ServiceArea[], limit = 5): ServiceArea[] {
  const local = BY_SLUG.get(slug);
  if (!local) return [];
  return local.neighbors
    .map((n) => areas.find((a) => a.slug === n))
    .filter((a): a is ServiceArea => Boolean(a))
    .slice(0, limit);
}
