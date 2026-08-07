import type { MetadataRoute } from "next";
import { env } from "@/lib/env";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin", "/driver", "/request", "/track", "/api"],
      },
    ],
    sitemap: `${env.siteUrl}/sitemap.xml`,
  };
}
