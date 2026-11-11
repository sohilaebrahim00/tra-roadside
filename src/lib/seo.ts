import type { Metadata } from "next";

export interface ShareImage {
  url: string;
  width: number;
  height: number;
  alt: string;
}

/**
 * Link-preview images, cut at 1200x630 from the business's own job photos.
 * JPEG rather than webp because some link unfurlers still reject webp. Paths
 * are relative and resolve against `metadataBase`, so they follow the
 * canonical www host like canonicals do.
 */
export const DEFAULT_SHARE_IMAGE: ShareImage = {
  url: "/images/og/og-default.jpg",
  width: 1200,
  height: 630,
  alt: "A compact spare tire, floor jack and impact wrench laid out beside a sedan's rear wheel in a parking lot.",
};

const BATTERY_SHARE_IMAGE: ShareImage = {
  url: "/images/og/og-battery.jpg",
  width: 1200,
  height: 630,
  alt: "A car battery set into the floor under the rear seat of a vehicle, with the seat cushion lifted.",
};

/** The share image for a service's pages: the battery photo for battery replacement, the default otherwise. */
export function shareImageFor(serviceSlug?: string): ShareImage {
  return serviceSlug === "battery-replacement" ? BATTERY_SHARE_IMAGE : DEFAULT_SHARE_IMAGE;
}

/**
 * Open Graph fields every page shares.
 *
 * Next.js REPLACES a parent segment's `openGraph` object wholesale when a page
 * defines its own, and inherits it untouched when the page does not. The root
 * layout used to put `url: env.siteUrl` in here, so every page without its own
 * openGraph block — the service and city hubs, the legal pages, about, FAQ —
 * told social platforms it was the homepage. `url` therefore never lives at the
 * root; it is set per page through `pageUrls()`.
 */
export const OPEN_GRAPH_DEFAULTS = {
  type: "website" as const,
  siteName: "TRA — Texas Roadside Assistance",
  locale: "en_US",
  images: [DEFAULT_SHARE_IMAGE],
};

/**
 * Canonical and og:url for a page, from one path so the two cannot disagree.
 * Relative paths resolve against `metadataBase` (env.siteUrl), so both follow
 * the canonical www host without hard-coding it. `image` overrides the default
 * share image, e.g. the battery photo on the battery service page.
 */
/** Longest meta description Google reliably shows in full. */
const DESCRIPTION_MAX = 158;

/**
 * A meta description that fits: the part that must be there, then each optional
 * sentence in turn, kept only while the whole still fits. The crawl of
 * 2026-11-07 found 225 descriptions past 170 characters, cut off mid-sentence in
 * results.
 */
export function fitDescription(required: string, optional: string[] = []): string {
  let out = required.trim();
  for (const part of optional) {
    const next = `${out} ${part.trim()}`;
    if (next.length <= DESCRIPTION_MAX) out = next;
  }
  return out;
}

/** "One. Two." as ["One.", "Two."], for fitDescription's optional parts. */
export function sentences(text: string): string[] {
  return text.match(/[^.!?]+[.!?]+/g)?.map((s) => s.trim()) ?? [text];
}

export function pageUrls(path: string, image?: ShareImage): Pick<Metadata, "alternates" | "openGraph"> {
  return {
    alternates: { canonical: path },
    openGraph: { ...OPEN_GRAPH_DEFAULTS, url: path, ...(image ? { images: [image] } : {}) },
  };
}

/**
 * pageUrls for a page that exists in English and Spanish: the canonical is
 * the page itself, and hreflang links point each language at the other, so
 * Google shows Spanish searchers the /es page and English searchers the
 * English one instead of treating them as duplicates.
 */
export function bilingualUrls(
  paths: { en: string; es: string },
  lang: "en" | "es",
  image?: ShareImage
): Pick<Metadata, "alternates" | "openGraph"> {
  const self = lang === "es" ? paths.es : paths.en;
  return {
    alternates: { canonical: self, languages: { "en-US": paths.en, "es-US": paths.es, "x-default": paths.en } },
    openGraph: {
      ...OPEN_GRAPH_DEFAULTS,
      url: self,
      locale: lang === "es" ? "es_US" : "en_US",
      alternateLocale: lang === "es" ? "en_US" : "es_US",
      ...(image ? { images: [image] } : {}),
    },
  };
}
