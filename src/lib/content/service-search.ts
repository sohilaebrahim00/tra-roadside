import { SERVICES, type ServiceContent } from "./services";
import { SERVICE_PROBLEM } from "./service-problems";
import type { ServiceTypeSlug } from "@/lib/types/domain";

/**
 * The words drivers actually type when something goes wrong, per service.
 * Several services share a phrase on purpose ("dead battery" is a jump start
 * or a new battery), so the search can offer both and let the driver choose.
 */
const KEYWORDS: Record<ServiceTypeSlug, string[]> = {
  "battery-replacement": [
    "battery", "new battery", "replace battery", "battery replacement", "dead battery", "battery died",
    "bad battery", "car battery", "battery wont hold a charge", "battery light", "corroded battery",
  ],
  "jump-start": [
    "jump", "jump start", "jumpstart", "boost", "dead battery", "car wont start", "wont start",
    "clicking", "no power", "left lights on", "battery died",
  ],
  lockout: [
    "locked out", "lockout", "keys locked", "keys inside", "locked keys", "key fob", "unlock",
    "unlock car", "keys in trunk", "door locked", "locked in car",
  ],
  "tire-repair-plug-patch": [
    "tire repair", "plug", "patch", "puncture", "slow leak", "leak", "nail in tire", "low tire",
    "tire pressure", "air", "losing air",
  ],
  "flat-tire-change": ["flat tire", "flat", "spare tire", "spare", "change tire", "tire change", "blown tire", "blowout"],
  "tire-replacement": ["tire replacement", "new tire", "replace tire", "damaged tire", "sidewall", "no spare", "tire"],
  "stuck-screw-in-tire": ["screw", "screw in tire", "nail", "nail in tire", "stuck screw", "something in tire"],
  "rim-lock-removal": ["wheel lock", "rim lock", "locking lug nut", "lug nut", "wheel lock key", "lug key", "lost wheel lock key"],
  "fuel-delivery": ["out of gas", "gas", "fuel", "fuel delivery", "ran out of gas", "empty tank", "diesel", "gasoline", "no gas"],
};

/** Words too common to tell services apart ("my car has no gas" is about gas). */
const FILLER = new Set(["the", "and", "car", "my", "has", "its", "was", "for", "got", "truck", "vehicle", "help", "need"]);

/** Lowercase, apostrophes dropped ("won't" -> "wont"), everything else to spaces. */
export function normalizeQuery(s: string): string {
  return s.toLowerCase().replace(/['’]/g, "").replace(/[^a-z0-9]+/g, " ").trim();
}

/**
 * Ranks services for a free-text query. A whole phrase match counts most,
 * then each word the driver typed that starts a word in a phrase, so partial
 * typing ("batt", "fla") already finds the right service.
 */
export function searchServices(query: string, limit = 5): ServiceContent[] {
  const q = normalizeQuery(query);
  if (!q) return [];
  const words = q.split(" ").filter((w) => w.length > 2 && !FILLER.has(w));

  const scored = SERVICES.map((service) => {
    const phrases = [
      ...KEYWORDS[service.slug],
      normalizeQuery(service.name),
      normalizeQuery(service.shortName),
      normalizeQuery(SERVICE_PROBLEM[service.slug]),
    ];
    let score = 0;
    for (const phrase of phrases) {
      if (phrase === q) score += 30;
      else if (phrase.includes(q)) score += 12;
      else if (q.includes(phrase) && phrase.length > 2) score += 10;
      const phraseWords = phrase.split(" ");
      for (const w of words) if (phraseWords.some((pw) => pw.startsWith(w))) score += 2;
    }
    return { service, score };
  });

  return scored
    .filter((s) => s.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((s) => s.service);
}

/** One-tap starting points shown under the search box. */
export const POPULAR_SEARCHES = ["Dead battery", "Flat tire", "Locked out", "Out of gas", "Nail in tire", "Wheel lock key"];
