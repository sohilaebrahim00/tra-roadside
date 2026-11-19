import type { ServiceTypeSlug } from "@/lib/types/domain";

/**
 * Photos behind the dark opening band of inner pages (see HeroBackdrop), so no
 * page opens without a picture. Every file is the business's own: the
 * owner's job photos, the photos he posted on the Google Business Profile
 * (copied to /images/jobs on 2026-11-19, the ones another company also
 * publishes left out), and stills from his footage.
 *
 * A page gets a photo of its own subject, picked from the kind's list by a
 * hash of the page's key, so the same page always shows the same photo and
 * neighboring pages usually differ.
 */
export type HeroKind = "battery" | "tire" | "jump" | "lockout" | "wheel" | "general";

const P = (path: string) => `/images/${path}.webp`;

// Only photos bright enough to read through the backdrop's ink layer (mean
// luminance about 80 or more of 255); darker ones such as night engine-bay
// shots disappear under it.
const POOLS: Record<HeroKind, string[]> = {
  battery: [
    P("jobs/battery-tesla-frunk"),
    P("battery-install"),
    P("battery-terminal"),
    P("battery-test"),
    P("battery-carry"),
    P("battery-handover"),
  ],
  tire: [
    P("tire-spare-lot"),
    P("jobs/flat-tire-black-sedan"),
    P("jobs/spare-change-black-sedan"),
    P("jobs/tire-change-white-car"),
    P("jobs/tire-jack-garage"),
    P("tire-shoulder-night"),
    P("tire-spare-lugs"),
    P("jobs/tire-plug-pliers"),
    P("jobs/tire-mount-machine"),
    P("jobs/tire-jack-kneel"),
  ],
  jump: [
    P("jobs/jump-pack-compressor"),
    P("field/field-arrival-van"),
    P("field/field-jump-start-hood"),
    P("field/field-jump-start-booster"),
    P("field/field-arrival-gear"),
  ],
  lockout: [P("lockout-door-tools"), P("jobs/lockout-air-wedge")],
  wheel: [P("jobs/impact-wrench-sockets"), P("tire-spare-lugs"), P("jobs/spare-change-black-sedan")],
  general: [
    P("jobs/van-gear"),
    P("field/field-arrival-van"),
    P("field/field-arrival-gear"),
    P("jobs/jump-pack-compressor"),
    P("jobs/flat-tire-black-sedan"),
    P("tire-shoulder-night"),
    P("jobs/battery-tesla-frunk"),
    P("jobs/tire-change-white-car"),
    P("tire-spare-lot"),
  ],
};

/** The photo kind for a service's pages. */
export function serviceKind(slug?: ServiceTypeSlug | string): HeroKind {
  switch (slug) {
    case "battery-replacement":
      return "battery";
    case "jump-start":
    case "semi-truck-jump-start":
      return "jump";
    case "lockout":
      return "lockout";
    case "rim-lock-removal":
    case "stripped-lug-nut-removal":
      return "wheel";
    case undefined:
      return "general";
    default:
      return "tire";
  }
}

function hash(s: string): number {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) h = Math.imul(h ^ s.charCodeAt(i), 16777619);
  return h >>> 0;
}

/** The backdrop photo for a page: `key` is its path or slug. */
export function heroPhoto(key: string, kind: HeroKind = "general"): string {
  const pool = POOLS[kind];
  return pool[hash(key) % pool.length];
}
