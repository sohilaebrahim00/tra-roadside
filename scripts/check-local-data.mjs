/**
 * Integrity validation for src/lib/content/local-data.ts.
 *
 *   node scripts/check-local-data.mjs
 *
 * Geographic data degrades quietly: a slug typo, a one-way adjacency, a city
 * listed as its own neighbour. None of it throws at runtime — it just renders
 * a wrong local claim on an indexed page. This turns each of those into a
 * build failure.
 *
 * Checks:
 *   1. exactly 27 areas, matching SERVICE_AREAS one-for-one
 *   2. no unknown neighbour slugs
 *   3. no self-neighbours
 *   4. no duplicate neighbours
 *   5. adjacency is reciprocal (A lists B => B lists A)
 *   6. counties present on every verified entry
 *   7. no unsupported airport claims (no access/partnership language)
 */
import { readFileSync } from "node:fs";
import process from "node:process";

const local = readFileSync("src/lib/content/local-data.ts", "utf8");
const business = readFileSync("src/lib/content/business.ts", "utf8");

const SERVICE_SLUGS = [...business.matchAll(/\{ slug: "([a-z-]+)", name: "([^"]+)"/g)].map((m) => m[1]);

// Parse each LocalArea block.
const blocks = [...local.matchAll(/\{\s*slug: "([a-z-]+)",\s*counties: \[([^\]]*)\],\s*corridors: \[([^\]]*)\],\s*districts: \[([^\]]*)\],([\s\S]*?)neighbors: \[([^\]]*)\],\s*verified: (true|false),/g)];

const list = (s) => s.split(",").map((x) => x.trim().replace(/^"|"$/g, "")).filter(Boolean);

const areas = blocks.map((m) => ({
  slug: m[1],
  counties: list(m[2]),
  corridors: list(m[3]),
  districts: list(m[4]),
  airport: (m[5].match(/airport:\s*"([^"]*)"/) || [])[1] ?? null,
  neighbors: list(m[6]),
  verified: m[7] === "true",
}));

const failures = [];
const fail = (msg) => failures.push(msg);

// 1. Exactly 27, matching SERVICE_AREAS.
if (areas.length !== 27) fail(`expected 27 areas, parsed ${areas.length}`);
if (SERVICE_SLUGS.length !== 27) fail(`expected 27 SERVICE_AREAS, found ${SERVICE_SLUGS.length}`);
const known = new Set(areas.map((a) => a.slug));
for (const s of SERVICE_SLUGS) if (!known.has(s)) fail(`SERVICE_AREAS has "${s}" with no local-data entry`);
for (const a of areas) if (!SERVICE_SLUGS.includes(a.slug)) fail(`local-data has "${a.slug}" which is not a served city`);

// 2-4. Neighbour hygiene.
for (const a of areas) {
  const seen = new Set();
  for (const n of a.neighbors) {
    if (!known.has(n)) fail(`${a.slug}: unknown neighbour slug "${n}"`);
    if (n === a.slug) fail(`${a.slug}: listed as its own neighbour`);
    if (seen.has(n)) fail(`${a.slug}: duplicate neighbour "${n}"`);
    seen.add(n);
  }
}

// 5. Reciprocity.
const byslug = new Map(areas.map((a) => [a.slug, a]));
for (const a of areas) {
  for (const n of a.neighbors) {
    const other = byslug.get(n);
    if (other && !other.neighbors.includes(a.slug)) {
      fail(`non-reciprocal adjacency: ${a.slug} lists ${n}, but ${n} does not list ${a.slug}`);
    }
  }
}

// 6. Counties on verified entries.
for (const a of areas) {
  if (a.verified && a.counties.length === 0) fail(`${a.slug}: verified but has no counties`);
}

// 7. Airport claims must describe a relationship, never access or partnership.
const FORBIDDEN = /\b(authorised|authorized|permit|permitted|contract|partnership|partner|official|approved vendor|exclusive|access to the (ramp|airfield|tarmac))\b/i;
for (const a of areas) {
  if (a.airport && FORBIDDEN.test(a.airport)) {
    fail(`${a.slug}: airport text implies access or partnership — "${a.airport}"`);
  }
}

const verifiedCount = areas.filter((a) => a.verified).length;
const withNeighbors = areas.filter((a) => a.neighbors.length > 0).length;

if (failures.length) {
  console.error(`\nlocal-data integrity FAILED (${failures.length}):\n`);
  for (const f of failures) console.error(`  - ${f}`);
  console.error("");
  process.exit(1);
}

console.log(
  `local-data integrity passed: ${areas.length} cities, ${verifiedCount} verified, ` +
    `${withNeighbors} with at least one adjacent served city, adjacency fully reciprocal.`
);
