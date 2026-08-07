import type { MetadataRoute } from "next";
import { env } from "@/lib/env";
import { SERVICES } from "@/lib/content/services";
import { SERVICE_AREAS } from "@/lib/content/business";
import { getBlogPosts } from "@/lib/data/blog";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = env.siteUrl;
  const now = new Date();

  const staticRoutes = [
    "",
    "/services",
    "/service-areas",
    "/how-it-works",
    "/about",
    "/gallery",
    "/videos",
    "/blog",
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

  const posts = await getBlogPosts();
  const postRoutes = posts.map((p) => ({
    url: `${base}/blog/${p.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }));

  return [...staticRoutes, ...serviceRoutes, ...areaRoutes, ...postRoutes];
}
