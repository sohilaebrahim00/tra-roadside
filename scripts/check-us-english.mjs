/**
 * Fails the build on British spellings in customer-facing copy.
 *
 *   node scripts/check-us-english.mjs
 *
 * TRA is a Dallas-Fort Worth business writing for Texas drivers. Copy that
 * says "boot", "car park" or "tyre" reads as though it was written by someone
 * who has never been here, which is corrosive on exactly the local-intent
 * pages that exist to prove otherwise.
 *
 * This has now slipped through three times — once in image alt text, once
 * across the City x Service pilot, and then as a class the word list could not
 * see: "-isation" forms ("authorisation" reached the Irving and Grapevine
 * pages, because \bauthorise\b does not match it), and idioms that are made of
 * ordinary words — a car "standing" for days, "long-stay parking", "the
 * commonest call", "a flat fob battery", "From stranded to sorted". So the
 * gate now has three layers: whole terms, -ise/-isation stems, and phrase
 * patterns.
 *
 * Scope is every customer-facing source file, not a hand-picked list: the
 * content files, every page under src/app/(site), and every component outside
 * the admin and driver portals. Code comments are scanned too; that is
 * deliberate, since comment wording tends to migrate into copy when someone
 * writes the next batch from an existing entry.
 */
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";
import process from "node:process";

/** Directories walked recursively for .ts/.tsx files. */
const ROOTS = ["src/lib/content", "src/lib/validation", "src/app/(site)", "src/components"];
/** Internal tools, not customer-facing. */
const EXCLUDE = [/[\\/]admin[\\/]/, /[\\/]driver[\\/]/];

function walk(dir) {
  let out = [];
  let entries;
  try {
    entries = readdirSync(dir);
  } catch {
    return out; // root may not exist in a given branch
  }
  for (const name of entries) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) out = out.concat(walk(p));
    else if (/\.(ts|tsx)$/.test(name)) out.push(p);
  }
  return out;
}
const FILES = ROOTS.flatMap(walk).filter((f) => !EXCLUDE.some((re) => re.test(f)));

/** British -> American. Word-boundary matched, case-insensitive. */
const TERMS = [
  // --- Vehicle parts and roadside vocabulary ---
  ["boot", "trunk (of a car)"],
  ["car park", "parking lot / parking garage"],
  ["car parks", "parking lots"],
  ["tyre", "tire"],
  ["tyres", "tires"],
  ["bonnet", "hood"],
  ["windscreen", "windshield"],
  ["petrol", "gas"],
  ["kerb", "curb"],
  ["spanner", "wrench"],
  ["indicator", "turn signal"],
  ["jump leads", "jumper cables"],
  ["wheel brace", "lug wrench"],
  ["wheel nut", "lug nut"],
  ["wheel nuts", "lug nuts"],
  ["glovebox", "glove box"],
  ["gearbox", "transmission"],
  ["gear stick", "gear shift"],
  ["handbrake", "parking brake"],
  ["number plate", "license plate"],
  ["wing mirror", "side mirror"],
  ["silencer", "muffler"],
  ["sump", "oil pan"],
  ["torch", "flashlight"],
  ["lorry", "truck"],
  ["lorries", "trucks"],
  ["motorway", "highway / freeway"],
  ["dual carriageway", "divided highway"],
  ["slip road", "on-ramp / off-ramp"],
  ["hard shoulder", "shoulder"],
  ["lay-by", "pull-off / rest area"],
  ["roundabout", "traffic circle"],
  ["flyover", "overpass"],
  ["tailback", "backup / traffic jam"],
  ["pavement", "sidewalk"],
  ["verge", "grass strip / median"],
  ["forecourt", "gas station lot"],
  ["estate car", "station wagon"],
  ["saloon", "sedan"],
  ["hire car", "rental car"],
  ["car hire", "car rental"],
  ["postcode", "ZIP code"],
  ["workshop", "repair shop / shop"],
  ["long-stay", "long-term"],
  ["short-stay", "short-term"],

  // --- Idioms that give the game away faster than spellings do ---
  // "flat battery" is the worst offender on this site, because the same copy
  // says "flat tire" two lines later. Americans say "dead battery".
  ["flat battery", "dead battery"],
  ["flat batteries", "dead batteries"],
  ["fortnight", "two weeks"],
  ["journey", "trip / drive"],
  ["queue", "line"],
  ["straight away", "right away"],
  ["amongst", "among"],
  ["whilst", "while"],
  ["commonest", "most common"],
  ["sorted", "fixed / taken care of (\"sorted\" is British slang)"],
  // Americans park in a driveway, not on a drive.
  ["on the drive", "in the driveway"],
  ["on a drive", "in a driveway"],
  // "shopping" as a mass noun is British; "shopping center" is fine, so these
  // are phrase-scoped rather than a ban on the word.
  ["loading shopping", "loading groceries"],
  ["the shopping", "the groceries"],
  ["shopping parking", "grocery store parking"],

  // --- Spellings ---
  ["colour", "color"],
  ["favour", "favor"],
  ["favourite", "favorite"],
  ["behaviour", "behavior"],
  ["labour", "labor"],
  ["neighbour", "neighbor"],
  ["neighbours", "neighbors"],
  ["neighbouring", "neighboring"],
  ["neighbourhood", "neighborhood"],
  ["neighbourhoods", "neighborhoods"],
  ["centre", "center"],
  ["metres", "meters"],
  ["litre", "liter"],
  ["defence", "defense"],
  ["offence", "offense"],
  ["licence", "license (noun)"],
  ["practise", "practice (noun/verb)"],
  ["programme", "program"],
  ["grey", "gray"],
  ["ageing", "aging"],
  ["enquire", "inquire"],
  ["enquiry", "inquiry"],
  ["learnt", "learned"],
  ["burnt", "burned"],
  ["spelt", "spelled"],
  ["artefact", "artifact"],
  ["artefacts", "artifacts"],
  ["aluminium", "aluminum"],
  ["manoeuvre", "maneuver"],
  ["cheque", "check"],
  ["storey", "story (of a building)"],
  // Doubled consonants before a suffix.
  ["travelling", "traveling"],
  ["travelled", "traveled"],
  ["traveller", "traveler"],
  ["cancelled", "canceled"],
  ["cancelling", "canceling"],
  ["labelled", "labeled"],
  ["modelling", "modeling"],
  ["signalling", "signaling"],
  ["fuelled", "fueled"],

  // --- Hyphenated compass points. American style closes them up. ---
  ["north-east", "northeast"],
  ["north-eastern", "northeastern"],
  ["north-west", "northwest"],
  ["north-western", "northwestern"],
  ["south-east", "southeast"],
  ["south-eastern", "southeastern"],
  ["south-west", "southwest"],
  ["south-western", "southwestern"],
];

/**
 * -ise / -isation verb families. A word list cannot keep up with these:
 * "authorise" was listed, and "authorisation" still shipped. Each stem is
 * matched with any of the suffixes below, so the noun, past tense and
 * gerund forms are all caught. ("analyses" is left alone — it is also the
 * correct American plural of "analysis".)
 */
const ISE_STEMS = [
  "authoris", "recognis", "realis", "organis", "optimis", "itemis", "prioritis",
  "minimis", "maximis", "customis", "specialis", "apologis", "standardis",
  "summaris", "finalis", "utilis", "categoris", "memoris", "criticis",
  "visualis", "modernis", "stabilis", "normalis", "centralis", "neutralis",
  "sanitis", "personalis", "characteris", "emphasis", "familiaris", "harmonis",
];
const ISE_RE = new RegExp(`\\b(${ISE_STEMS.join("|")})(e|ed|es|ing|ation|ations|able|er|ers)\\b`, "gi");
const ANALYSE_RE = /\banalys(e|ed|ing)\b/gi;

/**
 * Idioms made of ordinary words, matched as phrases.
 *
 * "Standing" and "stood" for a parked, unused vehicle are British; Americans
 * say a car is "sitting" or "parked". These patterns are scoped to the vehicle
 * sense so that "standing beside a car on a live freeway" — a person standing,
 * correct in any English — still passes.
 *
 * "Fit"/"fitted"/"fitting" for installing a part is British trade usage
 * ("tyre fitting"); American copy installs a battery and puts on a spare.
 * "Battery fit" as a noun — whether a battery fits the vehicle — is fine.
 */
const PATTERNS = [
  [/\b(after|while|from) standing\b/gi, "after/while sitting (vehicle sense)"],
  [/\bleft standing\b/gi, "left sitting / left parked"],
  [/\bstanding (still|vehicles?|between|over|through|rather than|is what|for (a|two|ten|several|days|weeks))\b/gi, "sitting (vehicle sense)"],
  [/\b(car|vehicle|truck|it) (is |was |has been )?standing\b/gi, "the car is parked / sitting"],
  [/\b(car|vehicle|truck|it|that|has|had|have) stood\b/gi, "sat / sat parked"],
  [/\bstood (for|at|in|unused|through|while|near|over|idle)\b/gi, "sat (vehicle sense)"],
  [/\bwhere (it|the car|the vehicle|the car already) (stands|stood)\b/gi, "where it sits / where it is parked"],
  [/\bstand (still )?for (days|weeks|a week)\b/gi, "sit for days"],
  [/\bperiod of standing\b|\bspell of\b/gi, "stretch of sitting / stretch of"],
  [/\bflat (fob )?batter(y|ies)\b/gi, "dead (fob) battery"],
  [/\bbatter(y|ies) (is |are |was |were )?flat\b/gi, "battery dead"],
  [/\bhas run flat\b/gi, "has run down"],
  // Batteries "go dead" in American English; tires go flat.
  [/\b(cars?|vehicles?) that sit still go flat\b|\bgo(es)? flat sitting\b/gi, "go dead / end up with dead batteries"],
  [/\bflattens? (a |the )?batter(y|ies)\b/gi, "drains / kills a battery"],
  [/\bfitted\b/gi, "installed / put on / equipped with"],
  [/\b(the|a) fitting\b|\bfitting (it|one|the|a|your|batteries)\b/gi, "installation / installing / putting on"],
  [/\bfits? (it|one|a new one|the (spare|battery|replacement|new one)|a (spare|battery|replacement|new battery)|batteries)\b/gi, "install / put on"],
  [/\brecovered (to|across|anywhere)\b|\brecovery (run|truck)\b|\barranging a recovery\b/gi, "towed / tow truck (\"recovery\" is British for towing)"],
  [/\btrip away\b/gi, "trip / time away"],
  [/\bstranded to sorted\b/gi, "stranded to back on the road"],
];

const failures = [];

for (const file of FILES) {
  const text = readFileSync(file, "utf8");
  const lines = text.split(/\r?\n/);
  const check = (re, replacement, label) => {
    lines.forEach((line, i) => {
      re.lastIndex = 0;
      const m = re.exec(line);
      if (m) {
        failures.push(
          `${file}:${i + 1}  "${label ?? m[0]}" -> use "${replacement}"\n      ${line.trim().slice(0, 110)}`
        );
      }
      re.lastIndex = 0;
    });
  };
  // `(?!-\w)` skips hyphenated code identifiers such as the `journey-marker`
  // CSS class, which are not copy.
  for (const [term, replacement] of TERMS) check(new RegExp(`\\b${term}\\b(?!-\\w)`, "gi"), replacement, term);
  check(ISE_RE, "-ize / -ization");
  check(ANALYSE_RE, "analyze / analyzed / analyzing");
  for (const [re, replacement] of PATTERNS) check(re, replacement);
}

if (failures.length) {
  console.error(`\nUS English check FAILED (${failures.length}):\n`);
  for (const f of failures) console.error(`  - ${f}\n`);
  console.error("TRA writes for Texas drivers. Use American terms in customer-facing copy.\n");
  process.exit(1);
}

console.log(
  `US English check passed: ${FILES.length} customer-facing files, ${TERMS.length} terms, ${ISE_STEMS.length} -ise stems, ${PATTERNS.length} phrase patterns.`
);
