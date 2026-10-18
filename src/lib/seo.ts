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
export function pageUrls(path: string, image?: ShareImage): Pick<Metadata, "alternates" | "openGraph"> {
  return {
    alternates: { canonical: path },
    openGraph: { ...OPEN_GRAPH_DEFAULTS, url: path, ...(image ? { images: [image] } : {}) },
  };
}
