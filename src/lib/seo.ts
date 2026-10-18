import type { Metadata } from "next";

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
  type: "website",
  siteName: "TRA — Texas Roadside Assistance",
  locale: "en_US",
} as const;

/**
 * Canonical and og:url for a page, from one path so the two cannot disagree.
 * Relative paths resolve against `metadataBase` (env.siteUrl), so both follow
 * the canonical www host without hard-coding it.
 */
export function pageUrls(path: string): Pick<Metadata, "alternates" | "openGraph"> {
  return {
    alternates: { canonical: path },
    openGraph: { ...OPEN_GRAPH_DEFAULTS, url: path },
  };
}
