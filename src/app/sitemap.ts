import type { MetadataRoute } from "next";
import { env } from "@/lib/env";
import { SERVICES } from "@/lib/content/services";
import { SERVICE_AREAS } from "@/lib/content/business";
import { getBlogPosts } from "@/lib/data/blog";
import { cityServicePairs } from "@/lib/content/city-service-pages";
import { LOCATION_HUBS } from "@/lib/content/location-hubs";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = env.siteUrl;
  const now = new Date();
  const posts = await getBlogPosts();

  const staticRoutes = [
    "",
    "/services",
    "/service-areas",
    "/how-it-works",
    "/about",
    "/gallery",
    "/videos",
    // /blog is noindex while it has no articles, so it is listed only once
    // there is at least one published post to send a crawler to.
    ...(posts.length > 0 ? ["/blog"] : []),
    "/faq",
    "/contact",
    "/privacy-policy",
    "/terms",
    "/sms-terms",
    "/accessibility",
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.7,
  }));

  const serviceRoutes = SERVICES.map((s) => ({
    url: `${base}/services/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const areaRoutes = SERVICE_AREAS.map((c) => ({
    url: `${base}/service-areas/${c.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  // City x Service pages. Only pairs with authored content exist, so this
  // never emits a URL that would 404 or render a templated doorway page.
  const cityServiceRoutes = cityServicePairs().map((p) => ({
    url: `${base}/service-areas/${p.city}/${p.service}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  // Location hubs. These are not City x Service pages: each covers one place
  // and routes to several services, so they are listed explicitly rather than
  // generated. A hub is added to LOCATION_HUBS only once it passes the
  // indexability and duplicate-content checks, so the list stays short on
  // purpose — and the same list is what links each hub from its city page.
  const locationHubRoutes = LOCATION_HUBS.map((h) => ({
    url: `${base}${h.path}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const postRoutes = posts.map((p) => ({
    url: `${base}/blog/${p.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }));

  return [
    ...staticRoutes,
    ...serviceRoutes,
    ...areaRoutes,
    ...cityServiceRoutes,
    ...locationHubRoutes,
    ...postRoutes,
  ];
}
