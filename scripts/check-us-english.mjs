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
 * This has now slipped through twice — once in image alt text, once across the
 * City x Service pilot — so it is a gate rather than a habit. It matters more
 * as the city pages scale: one careless "car park" in a shared phrase
 * multiplies across every city it is copied into.
 *
 * Checked files are the customer-facing content sources. Code comments are
 * scanned too; that is deliberate, since comment wording tends to migrate into
 * copy when someone writes the next batch from an existing entry.
 */
import { readFileSync } from "node:fs";
import process from "node:process";

const FILES = [
  "src/lib/content/city-service-pages.ts",
  "src/lib/content/services.ts",
  "src/lib/content/business.ts",
  "src/lib/content/local-data.ts",
  "src/lib/content/notification-templates.ts",
  // Location hubs carry customer-facing prose inside the component rather than
  // in a content file, so they are checked too.
  "src/app/(site)/airports/dallas-love-field/page.tsx",
  // City x Service template components. These hold no editorial copy, but they
  // do hold the section labels a visitor reads ("Roads we cover", "Starting
  // price"), and comment wording migrates into labels when someone edits them.
  "src/components/city-service/service-hero.tsx",
  "src/components/city-service/hero-visual.tsx",
  "src/components/city-service/price-panel.tsx",
  "src/components/city-service/scenario-cards.tsx",
  "src/components/city-service/local-section.tsx",
  "src/components/city-service/service-nav.tsx",
  "src/components/city-service/final-cta.tsx",
];

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
  ["estate car", "station wagon"],
  ["saloon", "sedan"],
  ["hire car", "rental car"],

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
  ["licence", "license (noun)"],
  ["practise", "practice (noun/verb)"],
  ["programme", "program"],
  ["grey", "gray"],
  ["ageing", "aging"],
  ["enquire", "inquire"],
  ["enquiry", "inquiry"],
  ["learnt", "learned"],
  ["burnt", "burned"],
  ["realise", "realize"],
  ["organise", "organize"],
  ["analyse", "analyze"],
  ["apologise", "apologize"],
  ["recognise", "recognize"],
  ["specialise", "specialize"],
  ["authorise", "authorize"],
  ["prioritise", "prioritize"],
  ["customise", "customize"],
  ["minimise", "minimize"],
  ["maximise", "maximize"],
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

const failures = [];

for (const file of FILES) {
  let text;
  try {
    text = readFileSync(file, "utf8");
  } catch {
    continue; // file may not exist yet in a given branch
  }
  const lines = text.split(/\r?\n/);
  for (const [term, replacement] of TERMS) {
    const re = new RegExp(`\\b${term}\\b`, "gi");
    lines.forEach((line, i) => {
      if (re.test(line)) {
        failures.push(
          `${file}:${i + 1}  "${term}" -> use "${replacement}"\n      ${line.trim().slice(0, 110)}`
        );
      }
      re.lastIndex = 0;
    });
  }
}

if (failures.length) {
  console.error(`\nUS English check FAILED (${failures.length}):\n`);
  for (const f of failures) console.error(`  - ${f}\n`);
  console.error("TRA writes for Texas drivers. Use American terms in customer-facing copy.\n");
  process.exit(1);
}

console.log(`US English check passed: ${FILES.length} content files, no British spellings.`);
