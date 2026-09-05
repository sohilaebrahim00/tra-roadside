import type { NextConfig } from "next";
import path from "node:path";

/**
 * Services removed from the definitive list in migration 0008. Their pages
 * were indexed, so they redirect to the services index rather than 404 —
 * a 404 discards whatever ranking the URL had and hands anyone with a
 * bookmark a dead end.
 *
 * Emitted as an explicit 301 rather than Next's `permanent: true`, which
 * produces a 308. Search engines treat the two the same for ranking, but 301
 * is the status every crawler, analytics tool and CDN has understood for
 * decades, and nothing here needs 308's request-method preservation.
 */
const REMOVED_SERVICE_SLUGS = [
  "tire-inflation",
  "spare-tire-install",
  "winching-recovery",
  "minor-repair",
  "truck-assistance",
  "other-roadside-service",
];

const nextConfig: NextConfig = {
  turbopack: {
    root: path.join(__dirname),
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "*.supabase.co" },
      { protocol: "https", hostname: "i.ytimg.com" },
    ],
  },
  /**
   * `/t/<token>` is the short tracking path that goes into SMS; `/track/<token>`
   * is the original and stays permanently valid, because links already sent to
   * customers use it and some of those live in message history for months.
   *
   * A rewrite rather than a redirect, in both directions of reasoning: the new
   * short path must not cost an extra round trip inside an SMS link, and the
   * old path must keep RESOLVING rather than bouncing. `/track/[token]` remains
   * the real page — this only lets the short path reach it.
   *
   * This alias must not be removed while any old link could still be opened.
   */
  async rewrites() {
    return [{ source: "/t/:token", destination: "/track/:token" }];
  },

  async redirects() {
    return REMOVED_SERVICE_SLUGS.map((slug) => ({
      source: `/services/${slug}`,
      destination: "/services",
      statusCode: 301 as const,
    }));
  },
};

export default nextConfig;
