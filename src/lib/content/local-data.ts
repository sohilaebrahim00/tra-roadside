/**
 * Verified geographic detail for the 55 DFW cities TRA serves.
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
 * rather than this city's own. All 55 entries were checked.
 *
 * The 28 cities added on 2026-11-04 (Fort Worth onward) follow the same rule.
 * Where a city's own article did not enumerate its borders, adjacency was
 * confirmed against U.S. Census Bureau place boundaries (TIGERweb, 2026
 * Boundary and Annexation Survey), counting two cities as adjacent only where
 * their boundaries share an edge of several hundred meters or more, and the
 * note on each entry says which source carried which claim. ZIP codes come
 * from the city's article infobox, cross-checked against a second source.
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
  /**
   * The city's main 5-digit ZIP codes, up to eight. Small cities that have
   * only one or two ZIP codes list only those; none are padded.
   */
  zips?: string[];
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
    zips: ["75201", "75204", "75206", "75208", "75214", "75219", "75231", "75240"],
    neighbors: ["irving", "garland", "mesquite", "richardson", "grand-prairie", "farmers-branch", "addison", "coppell", "cedar-hill", "desoto", "duncanville", "lancaster", "highland-park", "university-park"],
    verified: true,
    sourceNote:
      "Article confirms five counties and the district list, and names Cockrell Hill, Highland Park and University Park as enclaves. It does not enumerate bordering cities. Adjacency to Mesquite, Richardson, Grand Prairie, Addison and Coppell is confirmed by those cities' own articles; Irving, Garland and Farmers Branch rest on general geography and are the weakest claims here. Rowlett was removed — nothing supports a shared boundary. Cedar Hill, DeSoto, Duncanville, Lancaster, Highland Park and University Park were added with the 28 new cities: the Highland Park, University Park, Cedar Hill and Lancaster articles each name Dallas as a border, and Census place boundaries (TIGERweb 2026) confirm all six. The Dallas infobox lists no ZIPs; the eight are a spread of main Dallas codes that two other ZIP lists agree on.",
  },
  {
    slug: "arlington",
    counties: ["Tarrant"],
    corridors: ["I-20", "I-30", "US-287"],
    districts: ["Entertainment District"],
    zips: ["76010", "76011", "76012", "76013", "76014", "76015", "76017", "76018"],
    neighbors: ["grand-prairie", "fort-worth", "mansfield", "kennedale"],
    verified: true,
    sourceNote:
      "Article states Arlington borders Kennedale, Grand Prairie, Mansfield and Fort Worth, and surrounds Dalworthington Gardens and Pantego. Grand Prairie was the only served one until Fort Worth, Mansfield and Kennedale joined; all four are now listed. Euless was removed: it is roughly 11 miles away and does not border Arlington.",
  },
  {
    slug: "irving",
    counties: ["Dallas"],
    corridors: ["TX-183 (Airport Freeway)", "I-635 (LBJ Freeway)", "TX-114 (John Carpenter Freeway)", "President George Bush Turnpike"],
    districts: ["Las Colinas", "Valley Ranch"],
    airport: "Part of Dallas/Fort Worth International Airport lies within Irving city limits.",
    zips: ["75038", "75039", "75060", "75061", "75062", "75063"],
    neighbors: ["dallas", "coppell", "grand-prairie", "grapevine", "euless", "fort-worth"],
    verified: true,
    sourceNote:
      "Article confirms Dallas County, the highway set, Las Colinas and Valley Ranch, and that the city includes part of DFW Airport. It does not list bordering cities; Coppell, Grand Prairie and Euless are confirmed from their own articles. Fort Worth was added from Census place boundaries (TIGERweb 2026), which show a shared edge of about 2.4 km. Farmers Branch was removed as unsupported.",
  },
  {
    slug: "grand-prairie",
    counties: ["Dallas", "Tarrant", "Ellis", "Johnson"],
    corridors: ["I-20", "I-30", "TX-360", "TX-161 (President George Bush Turnpike)", "Spur 303 (Pioneer Parkway)", "TX-180 (Main Street)", "Belt Line Road"],
    districts: [],
    airport: "Grand Prairie Municipal Airport is within the city.",
    zips: ["75050", "75051", "75052", "75053", "75054"],
    neighbors: ["dallas", "arlington", "irving", "fort-worth", "mansfield", "cedar-hill", "midlothian"],
    verified: true,
    sourceNote:
      "Article names Dallas to the east, Arlington to the west, Fort Worth to the northwest, Irving to the north, Cedar Hill and Midlothian to the southeast and Mansfield to the southwest. All seven are now served, so all seven are listed. Four counties confirmed, including a small part in Johnson County. No named residential districts, so the list is left empty.",
  },
  {
    slug: "mesquite",
    counties: ["Dallas", "Kaufman"],
    corridors: ["I-635 (LBJ Freeway)", "I-30", "I-20", "US-80", "TX-352", "Belt Line Road"],
    districts: ["Skyline Industrial Park"],
    zips: ["75149", "75150", "75181"],
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
    zips: ["75040", "75041", "75042", "75043", "75044"],
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
    zips: ["75080", "75081", "75082"],
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
    zips: ["75023", "75024", "75025", "75074", "75075", "75093"],
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
    zips: ["75033", "75034", "75035", "75036"],
    neighbors: ["plano", "the-colony", "mckinney", "allen", "prosper", "little-elm"],
    verified: true,
    sourceNote:
      "Article confirms both counties and the tollway/highway set. It does not list borders. The Colony's article names Frisco to its north and east, and Allen's article lists Frisco as adjacent. Prosper and Little Elm were added with the new cities: Frisco's adjacent-places box shows both, and Census place boundaries (TIGERweb 2026) confirm them. Previously listed districts (The Star, Frisco Square, Stonebriar) were dropped as unverified.",
  },
  {
    slug: "mckinney",
    counties: ["Collin"],
    corridors: ["US-75 (Central Expressway)", "US-380", "TX-5", "Sam Rayburn Tollway (TX-121)"],
    districts: ["Historic Downtown McKinney", "Chestnut Square Heritage Village"],
    airport: "McKinney National Airport, a public general-aviation field, is within the city.",
    zips: ["75069", "75070", "75071", "75072"],
    neighbors: ["allen", "frisco", "prosper", "melissa", "celina"],
    verified: true,
    sourceNote:
      "County seat of Collin County. Article confirms the highway set, notes the Sam Rayburn Tollway runs along the McKinney–Allen border, and describes the historic downtown and both airports. Prosper, Melissa and Celina were added with the new cities, confirmed from Census place boundaries (TIGERweb 2026); the Celina edge is short, about 0.35 km. Craig Ranch and Stonebridge Ranch were dropped as unverified.",
  },
  {
    slug: "allen",
    counties: ["Collin"],
    corridors: ["US-75 (Central Expressway)", "Sam Rayburn Tollway (TX-121)"],
    districts: [],
    zips: ["75002", "75013"],
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
    zips: ["75006", "75007", "75010"],
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
    zips: ["75029", "75057", "75067", "75077"],
    neighbors: ["the-colony", "carrollton", "coppell", "flower-mound"],
    verified: true,
    sourceNote:
      "Article confirms Denton County with portions in Dallas County and the FM-road network. It does not list borders; The Colony's and Coppell's articles both name Lewisville as adjacent, and Carrollton's places it 8 miles away. Flower Mound was added: its article says it borders Lewisville to the east, and Lewisville's adjacent-places box shows it. Denton was REMOVED at roughly 15 miles — near, but not adjacent.",
  },
  {
    slug: "denton",
    counties: ["Denton"],
    corridors: ["I-35", "I-35E", "I-35W", "US-380", "US-377", "US-77", "Loop 288"],
    districts: ["Downtown Denton Square", "University of North Texas area", "Texas Woman's University area"],
    zips: ["76201", "76205", "76207", "76208", "76209"],
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
    zips: ["75056"],
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
    zips: ["76039", "76040"],
    neighbors: ["bedford", "hurst", "grapevine", "irving", "fort-worth", "colleyville"],
    verified: true,
    sourceNote:
      "Article names Bedford to the west, Grapevine to the north and Irving to the east, and confirms the DFW Airport land. Hurst is added from Hurst's own article, which lists Euless as bordering. Fort Worth and Colleyville were added with the new cities, from Census place boundaries (TIGERweb 2026): shared edges of about 15 km and 2.3 km. Arlington was REMOVED at roughly 11 miles. Midway Park and Glade Crossing were dropped as unverified.",
  },
  {
    slug: "bedford",
    counties: ["Tarrant"],
    corridors: ["TX-183 (Airport Freeway)", "TX-121"],
    districts: [],
    zips: ["76021", "76022"],
    neighbors: ["hurst", "euless", "colleyville"],
    verified: true,
    sourceNote:
      "Article gives northeastern Tarrant County and names neighboring cities as Hurst and Euless only. Colleyville was added with the new cities: Census place boundaries (TIGERweb 2026) show a shared edge of about 7 km, though Bedford's article does not name it. North Richland Hills was REMOVED — neither Bedford's nor NRH's article supports a shared boundary. Brown Trail and Harwood Road were dropped as unverified.",
  },
  {
    slug: "hurst",
    counties: ["Tarrant"],
    corridors: ["TX-183 (Airport Freeway)", "TX-26", "Loop 820"],
    districts: [],
    airport: "About 13 miles from Dallas/Fort Worth International Airport.",
    zips: ["76053", "76054"],
    neighbors: ["bedford", "euless", "north-richland-hills", "grapevine", "fort-worth", "colleyville"],
    verified: true,
    sourceNote:
      "Article states Hurst is surrounded by Bedford, Euless, Fort Worth, Richland Hills, North Richland Hills, Grapevine and Colleyville. Six of those are now served and listed. Grapevine was ADDED — it was missing before. Pipeline Road and Precinct Line Road were dropped as unverified for Hurst specifically.",
  },
  {
    slug: "north-richland-hills",
    counties: ["Tarrant"],
    corridors: ["I-820", "TX-26", "FM 1938 (Davis Boulevard)", "FM 3029 (Precinct Line Road)", "Mid Cities Boulevard", "North Tarrant Parkway"],
    districts: [],
    zips: ["76180", "76182"],
    neighbors: ["hurst", "haltom-city", "keller", "colleyville"],
    verified: true,
    sourceNote:
      "Article lists bordering municipalities as Haltom City, Hurst, Richland Hills, Keller and Colleyville; Watauga is nearby but not bordering. Hurst, Haltom City, Keller and Colleyville are now served and listed. Bedford and Grapevine were REMOVED. Smithfield and Iron Horse were dropped as unverified.",
  },
  {
    slug: "grapevine",
    counties: ["Tarrant", "Dallas", "Denton"],
    corridors: ["TX-114", "TX-121", "TX-26", "TX-360", "I-635 (LBJ Freeway)", "FM 2499"],
    districts: [],
    airport: "Grapevine contains a larger share of Dallas/Fort Worth International Airport than any other city.",
    zips: ["76051"],
    neighbors: ["euless", "hurst", "coppell", "irving", "southlake", "colleyville", "flower-mound"],
    verified: true,
    sourceNote:
      "Article gives northeast Tarrant County with minor portions in Dallas and Denton, confirms the highway set and the DFW Airport share. Euless's and Coppell's articles name Grapevine as adjacent, and Hurst's lists it too. Southlake, Colleyville and Flower Mound were added with the new cities, from Census place boundaries (TIGERweb 2026); Flower Mound's article puts Grapevine Lake and Marshall Creek along its southern boundary but does not name Grapevine as a neighbor. North Richland Hills was REMOVED. Historic Main Street and Grapevine Mills were dropped as unverified.",
  },
  {
    slug: "coppell",
    counties: ["Dallas", "Denton"],
    corridors: ["TX-121", "Sam Rayburn Tollway", "I-635 (LBJ Freeway)", "President George Bush Turnpike", "I-35E"],
    districts: [],
    airport: "Part of Dallas/Fort Worth International Airport property lies within Coppell city limits.",
    zips: ["75019"],
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
    zips: ["75234", "75244"],
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
    zips: ["75001"],
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
    zips: ["75032", "75087"],
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
    zips: ["75030", "75088", "75089"],
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
    zips: ["75048"],
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
    zips: ["75098"],
    neighbors: ["sachse"],
    verified: true,
    sourceNote:
      "Article confirms all three counties and the FM-road network. It does not enumerate borders; Sachse is the only served city genuinely adjacent. Downtown Wylie was dropped as unverified.",
  },
  {
    slug: "fort-worth",
    counties: ["Tarrant", "Denton", "Johnson", "Parker", "Wise"],
    corridors: ["I-30", "I-20", "I-35W", "I-820", "US-287", "US-377", "US-81", "TX-114", "TX-183", "TX-121"],
    districts: ["Sundance Square", "Upper West Side", "Fort Worth Stockyards", "Arlington Heights", "Fairmount–Southside", "Tanglewood", "Panther Island"],
    airport: "Fort Worth Alliance, Meacham International and Spinks airports and Naval Air Station Joint Reserve Base Fort Worth lie within the city; Dallas/Fort Worth International sits between Fort Worth and Dallas.",
    zips: ["76102", "76104", "76106", "76107", "76109", "76110", "76116", "76132"],
    neighbors: ["arlington", "grand-prairie", "irving", "euless", "hurst", "keller", "haltom-city", "saginaw", "benbrook", "kennedale", "crowley", "burleson"],
    verified: true,
    sourceNote:
      "Article read: county seat of Tarrant, reaching into four more counties; I-30, I-20, I-35W and I-820 pass through, with US-287, US-377, US-81 and SH 114, 183 and 121 named; districts from the text and neighborhood box; four airports inside the city. It names Saginaw and Benbrook among the cities it nearly surrounds. Arlington, Grand Prairie, Hurst, Keller, Haltom City, Burleson and Crowley are confirmed from those cities' articles, Kennedale from its adjacent-places box, and Irving and Euless from Census place boundaries (TIGERweb 2026).",
  },
  {
    slug: "southlake",
    counties: ["Tarrant", "Denton"],
    corridors: ["TX-114", "TX-26", "FM 1709 (Southlake Boulevard)", "FM 1938"],
    districts: ["Southlake Town Square", "Solana business park"],
    airport: "Lies close to Dallas/Fort Worth International Airport.",
    zips: ["76092"],
    neighbors: ["keller", "colleyville", "grapevine"],
    verified: true,
    sourceNote:
      "Article read: mostly Tarrant with minor Denton areas; four highways listed, Town Square on SH 114 and Southlake Boulevard; DFW proximity. It does not list bordering cities. Keller's article names Southlake; Colleyville and Grapevine are from Census place boundaries (TIGERweb 2026).",
  },
  {
    slug: "keller",
    counties: ["Tarrant"],
    corridors: ["US-377", "FM 1938 (Davis Boulevard)", "FM 1709 (Keller Parkway)"],
    districts: ["Keller Town Center"],
    zips: ["76244", "76248"],
    neighbors: ["southlake", "colleyville", "north-richland-hills", "fort-worth"],
    verified: true,
    sourceNote:
      "Article read: US-377 along the western border, Davis Boulevard (FM 1938) through the city, Keller Parkway, Town Center. Its surrounding-cities list names Fort Worth and Southlake; North Richland Hills's article names Keller, and Colleyville is from Census place boundaries (TIGERweb 2026). SH 114 was dropped because the article's wording about it is unclear. The infobox ZIPs 76262 and 76180 belong to Roanoke and North Richland Hills and were left out; 76244 is from a ZIP-by-city lookup.",
  },
  {
    slug: "colleyville",
    counties: ["Tarrant"],
    corridors: ["TX-26 (Colleyville Boulevard)", "TX-121"],
    districts: [],
    airport: "Lies close to Dallas/Fort Worth International Airport.",
    zips: ["76034"],
    neighbors: ["southlake", "keller", "grapevine", "hurst", "north-richland-hills", "euless", "bedford"],
    verified: true,
    sourceNote:
      "Article read: SH 26 bisects the city and SH 121 runs along part of its eastern edge; DFW proximity. No districts or bordering cities stated. Hurst's and North Richland Hills's articles name Colleyville; the rest are from Census place boundaries (TIGERweb 2026).",
  },
  {
    slug: "flower-mound",
    counties: ["Denton", "Tarrant"],
    corridors: ["US-377", "FM 1171 (Cross Timbers Road)", "FM 2499 (Long Prairie)", "FM 3040"],
    districts: ["Lakeside Business District", "Denton Creek District", "Parker Square"],
    airport: "Dallas/Fort Worth International Airport lies about 4 miles south of the town.",
    zips: ["75022", "75027", "75028"],
    neighbors: ["lewisville", "grapevine"],
    verified: true,
    sourceNote:
      "Article read: almost entirely Denton County, minor Tarrant portion; US-377 on the western edge and three FM roads; two development districts and Parker Square; DFW 4 miles south. It says the town borders Lewisville to the east; Grapevine is from Census place boundaries (TIGERweb 2026). Highland Village, Double Oak and Bartonville to the north are not served.",
  },
  {
    slug: "mansfield",
    counties: ["Tarrant", "Johnson", "Ellis"],
    corridors: ["TX-360", "US-287"],
    districts: ["Downtown Mansfield", "Historic Mansfield"],
    zips: ["76063"],
    neighbors: ["arlington", "grand-prairie"],
    verified: true,
    sourceNote:
      "Article read: mostly Tarrant with small Ellis and Johnson parts; SH 360 and US 287 listed; downtown and historic area. It says Mansfield is adjacent to Arlington; Grand Prairie's article names Mansfield to its southwest. Fort Worth is about 20 miles away and Census place boundaries (TIGERweb 2026) show no shared edge.",
  },
  {
    slug: "burleson",
    counties: ["Johnson", "Tarrant"],
    corridors: ["I-35W", "TX-174"],
    districts: ["Old Town Burleson"],
    airport: "Fort Worth Spinks Airport lies on the northern edge of the city limits.",
    zips: ["76028", "76097"],
    neighbors: ["fort-worth", "crowley"],
    verified: true,
    sourceNote:
      "Article read: mostly northern Johnson County with a small Tarrant portion; bordered north by Crowley and Fort Worth and southwest by Joshua (not served); I-35W and SH 174; Old Town; Spinks Airport on the northern edge. I-35 was dropped: the article mentions it only for 1960.",
  },
  {
    slug: "cedar-hill",
    counties: ["Dallas", "Ellis"],
    corridors: ["US-67"],
    districts: ["Cedar Hill City Center", "Historic Downtown Cedar Hill", "Lake Ridge"],
    airport: "Sits on the eastern shore of Joe Pool Lake.",
    zips: ["75104", "75106"],
    neighbors: ["dallas", "grand-prairie", "duncanville", "desoto", "midlothian"],
    verified: true,
    sourceNote:
      "Article read: Dallas and Ellis counties; names Grand Prairie, Dallas, Duncanville, DeSoto, Glenn Heights, Ovilla and Midlothian as adjacent, of which five are served; US-67 retail frontage; City Center sub-districts; Lake Ridge; Joe Pool Lake. Census place boundaries (TIGERweb 2026) agree.",
  },
  {
    slug: "desoto",
    counties: ["Dallas"],
    corridors: ["I-35E", "US-77"],
    districts: ["DeSoto Town Center"],
    airport: "The city jointly owns the DeSoto Heliport with the Texas Department of Transportation.",
    zips: ["75115", "75123"],
    neighbors: ["dallas", "duncanville", "cedar-hill", "lancaster"],
    verified: true,
    sourceNote:
      "Article read: Dallas County, part of the Best Southwest group, I-35E/US-77, Town Center, heliport. It lists no bordering cities. Cedar Hill's article names DeSoto, and the I-35E exit table shows a Lancaster–DeSoto line and a Lancaster–DeSoto–Dallas meeting point; Duncanville is from Census place boundaries (TIGERweb 2026).",
  },
  {
    slug: "duncanville",
    counties: ["Dallas"],
    corridors: ["I-20", "US-67"],
    districts: [],
    zips: ["75116", "75137", "75138"],
    neighbors: ["dallas", "cedar-hill", "desoto"],
    verified: true,
    sourceNote:
      "Article read: southwestern Dallas County; I-20 across the northern part and US-67 through the eastern part; part of the Best Southwest group. Its adjacent-places box shows only Dallas. Cedar Hill's article names Duncanville; DeSoto is from Census place boundaries (TIGERweb 2026).",
  },
  {
    slug: "lancaster",
    counties: ["Dallas"],
    corridors: ["I-35E", "I-20"],
    districts: ["Downtown Lancaster"],
    airport: "Lancaster Regional Airport, a city-owned general-aviation reliever for Dallas/Fort Worth International and Love Field, lies about two miles southeast of the central business district.",
    zips: ["75134", "75146"],
    neighbors: ["dallas", "desoto", "red-oak"],
    verified: true,
    sourceNote:
      "Article read: I-35E forms the western boundary and I-20 runs across the far north; regional airport; downtown; Cedar Valley College on the Lancaster–Dallas border. Red Oak's article names Lancaster; DeSoto is from the I-35E exit table. All three are confirmed by Census place boundaries (TIGERweb 2026). I-45 was dropped: it is about five miles east.",
  },
  {
    slug: "prosper",
    counties: ["Collin", "Denton"],
    corridors: ["Dallas North Tollway", "US-380", "TX-289 (Preston Road)"],
    districts: [],
    zips: ["75078"],
    neighbors: ["frisco", "mckinney", "little-elm", "celina"],
    verified: true,
    sourceNote:
      "Article read: gives only the counties, a ZIP code and an adjacent-places box; no roads or districts. Roads come from the highway articles: the tollway ends at First Street in Prosper, and US-380 and Preston Road pass through. Frisco's article shows Prosper beside it; the other borders are from Census place boundaries (TIGERweb 2026).",
  },
  {
    slug: "celina",
    counties: ["Collin", "Denton"],
    corridors: ["TX-289 (Preston Road)"],
    districts: ["Historic Downtown Celina"],
    zips: ["75009"],
    neighbors: ["prosper", "mckinney"],
    verified: true,
    sourceNote:
      "Article read: Collin and Denton counties, centered on SH 289 with downtown to its west. It says the Dallas North Tollway will be located west of the city, so the tollway is not listed. No bordering cities stated; Prosper and McKinney are from Census place boundaries (TIGERweb 2026), and the McKinney edge is short, about 0.35 km.",
  },
  {
    slug: "anna",
    counties: ["Collin"],
    corridors: ["US-75", "TX-5"],
    districts: [],
    zips: ["75409"],
    neighbors: ["melissa"],
    verified: true,
    sourceNote:
      "Article read: northern Collin County with US-75 through the west side; SH 5 is from the SH 5 route table. No bordering cities stated; Melissa is from Census place boundaries (TIGERweb 2026), which show no shared edge with McKinney.",
  },
  {
    slug: "melissa",
    counties: ["Collin"],
    corridors: ["US-75", "TX-5", "TX-121"],
    districts: [],
    zips: ["75454"],
    neighbors: ["anna", "mckinney"],
    verified: true,
    sourceNote:
      "Article read: north-central Collin County; SH 5 through the center, SH 121 through the east, US-75 along the west, converging in the southwest about 6 miles from McKinney. No bordering cities stated; both neighbors are from Census place boundaries (TIGERweb 2026). The infobox also lists 75071, a McKinney ZIP, which was left out.",
  },
  {
    slug: "princeton",
    counties: ["Collin"],
    corridors: ["US-380"],
    districts: [],
    zips: ["75407"],
    neighbors: [],
    verified: true,
    sourceNote:
      "Article read: just east of the center of Collin County, bordered to the west by Lowry Crossing (not served); US-380 passes through. No served city touches Princeton on Census place boundaries (TIGERweb 2026); McKinney is 8 miles west by road. The empty list is the correct answer.",
  },
  {
    slug: "waxahachie",
    counties: ["Ellis"],
    corridors: ["I-35E", "US-287", "US-77"],
    districts: ["Downtown Waxahachie"],
    airport: "MidWay Regional Airport, a general-aviation field, is jointly operated by Waxahachie and Midlothian.",
    zips: ["75165", "75167", "75168"],
    neighbors: ["midlothian", "red-oak"],
    verified: true,
    sourceNote:
      "Article read: county seat of Ellis County; I-35E bypasses the west side, US-287 runs across the north, US-77 passes through downtown; courthouse square. It lists no bordering cities: Midlothian's article puts Waxahachie to its southeast and Red Oak's puts it to the south. The airport line is from Midlothian's article.",
  },
  {
    slug: "midlothian",
    counties: ["Ellis"],
    corridors: ["US-67", "US-287"],
    districts: ["Railport industrial park"],
    airport: "MidWay Regional Airport, a general-aviation field jointly operated with Waxahachie, lies about 3 miles east of the city.",
    zips: ["76065"],
    neighbors: ["cedar-hill", "grand-prairie", "waxahachie"],
    verified: true,
    sourceNote:
      "Article read: northwestern Ellis County; names Cedar Hill, Grand Prairie, Venus, Waxahachie and Ovilla as adjacent, of which three are served; at the US-67 and US-287 junction; Railport park; MidWay Regional Airport. Census place boundaries (TIGERweb 2026) agree.",
  },
  {
    slug: "red-oak",
    counties: ["Ellis"],
    corridors: ["I-35E", "US-77"],
    districts: [],
    zips: ["75154"],
    neighbors: ["lancaster", "waxahachie"],
    verified: true,
    sourceNote:
      "Article read: northern edge of Ellis County, 18 miles south of downtown Dallas on I-35E with two exits in town. It names Glenn Heights, Lancaster, Ferris, Pecan Hill, Waxahachie and Oak Leaf as adjacent, of which two are served. Census place boundaries (TIGERweb 2026) agree.",
  },
  {
    slug: "crowley",
    counties: ["Tarrant", "Johnson"],
    corridors: ["FM 1187", "FM 731"],
    districts: ["Downtown Crowley"],
    zips: ["76036"],
    neighbors: ["fort-worth", "burleson"],
    verified: true,
    sourceNote:
      "Article read: southern Tarrant County with a small strip in Johnson; bordered north and east by Fort Worth and south by Burleson; center at the FM 1187 and FM 731 crossroads. Its subdivision list was not used as districts.",
  },
  {
    slug: "kennedale",
    counties: ["Tarrant"],
    corridors: ["I-20", "US-287"],
    districts: [],
    zips: ["76060", "76140"],
    neighbors: ["fort-worth", "arlington"],
    verified: true,
    sourceNote:
      "Article read: thin; it gives Tarrant County, two ZIP codes and an adjacent-places box showing Forest Hill, Arlington and Fort Worth. Highways come from the I-20 exit table, which lists Kennedale at the Business US-287 exit and the I-820/US-287 split. Arlington's article names Kennedale; both served neighbors are confirmed by Census place boundaries (TIGERweb 2026).",
  },
  {
    slug: "highland-park",
    counties: ["Dallas"],
    corridors: ["Dallas North Tollway", "US-75 (Central Expressway)", "Preston Road"],
    districts: ["Highland Park Village", "Park Cities"],
    zips: ["75205", "75209", "75219", "75225"],
    neighbors: ["dallas", "university-park"],
    verified: true,
    sourceNote:
      "Article read: town of about 2.2 square miles between the Dallas North Tollway and US-75; bordered by Dallas on the south, east and west and University Park on the north; with University Park it forms the Park Cities, an enclave of Dallas. Preston Road is from the SH 289 article.",
  },
  {
    slug: "university-park",
    counties: ["Dallas"],
    corridors: ["US-75 (Central Expressway)", "Dallas North Tollway", "Preston Road"],
    districts: ["Park Cities", "Snider Plaza", "Preston Center", "Southern Methodist University"],
    zips: ["75205", "75225"],
    neighbors: ["dallas", "highland-park"],
    verified: true,
    sourceNote:
      "Article read: bordered by Dallas on the north, east and west and Highland Park on the south; Park Cities enclave; SMU campus, Snider Plaza and Preston Center; Central Expressway is named, with a small part of the city west of it. The tollway is from its own article, which has the Mockingbird Lane interchange and Lovers Lane exit in University Park.",
  },
  {
    slug: "little-elm",
    counties: ["Denton"],
    corridors: ["US-380", "FM 423", "FM 720", "Eldorado Parkway"],
    districts: ["The Lakefront"],
    airport: "Sits on the northern and eastern shores of Lewisville Lake.",
    zips: ["75068"],
    neighbors: ["frisco", "prosper"],
    verified: true,
    sourceNote:
      "Article read: Denton County on the Lewisville Lake shore; The Lakefront is the original downtown. Its highway list also names the Dallas North Tollway, dropped because the tollway's article does not mention Little Elm. No bordering cities stated; Frisco's article shows Little Elm beside it, and Frisco and Prosper are confirmed by Census place boundaries (TIGERweb 2026). The Colony is across the lake and does not share an edge.",
  },
  {
    slug: "forney",
    counties: ["Kaufman"],
    corridors: ["US-80"],
    districts: [],
    zips: ["75126"],
    neighbors: [],
    verified: true,
    sourceNote:
      "Article read: northwestern Kaufman County; US-80 passes through as a limited-access highway; about 4 miles southeast of Lake Ray Hubbard. No served city touches Forney on Census place boundaries (TIGERweb 2026). The empty list is the correct answer.",
  },
  {
    slug: "haltom-city",
    counties: ["Tarrant"],
    corridors: ["I-820", "US-377 (Denton Highway)", "TX-121", "TX-183"],
    districts: [],
    airport: "About 20 miles from Dallas/Fort Worth International Airport.",
    zips: ["76117"],
    neighbors: ["north-richland-hills", "fort-worth"],
    verified: true,
    sourceNote:
      "Article read: surrounded almost entirely by Fort Worth, North Richland Hills, Watauga and Richland Hills, of which two are served; six miles from downtown Fort Worth. Its highway list also names SH 26, dropped as unconfirmed; the four listed are confirmed by the I-820, US-377, SH 121 and SH 183 articles.",
  },
  {
    slug: "saginaw",
    counties: ["Tarrant"],
    corridors: ["I-820", "Business US-287 (Main Street)", "FM 156 (Blue Mound Road)"],
    districts: [],
    zips: ["76131", "76179"],
    neighbors: ["fort-worth"],
    verified: true,
    sourceNote:
      "Article read: small home-rule city and inner suburb of Fort Worth, with rail lines through the middle; it names no roads. Highways are from the I-820 exit table. Fort Worth's article lists Saginaw among the cities it nearly surrounds; Census place boundaries (TIGERweb 2026) show only Blue Mound besides Fort Worth, and Blue Mound is not served.",
  },
  {
    slug: "benbrook",
    counties: ["Tarrant"],
    corridors: ["I-20", "US-377 (Benbrook Highway)", "TX-183"],
    districts: [],
    airport: "Benbrook Lake is the city's main body of water.",
    zips: ["76126", "76132", "76109", "76116"],
    neighbors: ["fort-worth"],
    verified: true,
    sourceNote:
      "Article read: suburb in the southwestern corner of Tarrant County; Benbrook Lake. Highways are from the I-20, US-377 and SH 183 articles. Fort Worth's article lists Benbrook among the cities it nearly surrounds; Census place boundaries (TIGERweb 2026) show Fort Worth as the only touching city.",
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
 * fewer adjacent served cities. Denton, Princeton and Forney have none;
 * Anna, Benbrook, Rockwall, Saginaw and Wylie have one each. Callers must
 * handle an empty array by omitting the section rather than rendering an
 * empty heading.
 */
export function realNeighbors(slug: string, areas: ServiceArea[], limit = 5): ServiceArea[] {
  const local = BY_SLUG.get(slug);
  if (!local) return [];
  return local.neighbors
    .map((n) => areas.find((a) => a.slug === n))
    .filter((a): a is ServiceArea => Boolean(a))
    .slice(0, limit);
}
