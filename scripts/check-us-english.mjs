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
];

/** British -> American. Word-boundary matched, case-insensitive. */
const TERMS = [
  ["boot", "trunk (of a car)"],
  ["car park", "parking lot / parking garage"],
  ["car parks", "parking lots"],
  ["tyre", "tire"],
  ["tyres", "tires"],
  ["bonnet", "hood"],
  ["windscreen", "windshield"],
  ["petrol", "gas"],
  ["kerb", "curb"],
  ["colour", "color"],
  ["neighbourhood", "neighborhood"],
  ["neighbourhoods", "neighborhoods"],
  ["centre", "center"],
  ["metres", "meters"],
  ["litre", "liter"],
  ["realise", "realize"],
  ["organise", "organize"],
  ["whilst", "while"],
  ["spanner", "wrench"],
  // Phrase-level, not single words: Americans park in a driveway, not on a drive.
  ["on the drive", "in the driveway"],
  ["on a drive", "in a driveway"],
  ["indicator", "turn signal"],
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
