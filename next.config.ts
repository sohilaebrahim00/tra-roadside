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
  async redirects() {
    return REMOVED_SERVICE_SLUGS.map((slug) => ({
      source: `/services/${slug}`,
      destination: "/services",
      statusCode: 301 as const,
    }));
  },
};

export default nextConfig;
