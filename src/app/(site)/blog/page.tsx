import type { Metadata } from "next";
import { pageUrls } from "@/lib/seo";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { BreadcrumbJsonLd } from "@/components/seo/json-ld";
import { getBlogPosts } from "@/lib/data/blog";
import { env } from "@/lib/env";
import { HeroBackdrop } from "@/components/brand/hero-backdrop";

export async function generateMetadata(): Promise<Metadata> {
  const posts = await getBlogPosts();
  return {
    title: "Blog",
    description: "Roadside safety tips, vehicle maintenance advice, and updates from TRA.",
    ...pageUrls("/blog"),
    // An index with nothing in it is a thin page. It stays out of search, and
    // out of the sitemap, until there is an article to list; publishing one
    // calls revalidatePath("/blog"), which re-renders this metadata.
    ...(posts.length === 0 ? { robots: { index: false, follow: true } } : {}),
  };
}

export default async function BlogIndexPage() {
  const posts = await getBlogPosts();

  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", url: env.siteUrl }, { name: "Blog", url: `${env.siteUrl}/blog` }]} />
      <section className="relative isolate overflow-hidden border-b border-ink-950/8 bg-ink-950 py-16 text-white sm:py-20">
        <HeroBackdrop />
        <Container>
          <SectionHeading as="h1" eyebrow="From TRA" title="Roadside safety & driving tips" tone="light" />
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <Link key={post.id} href={`/blog/${post.slug}`} className="group rounded-2xl border border-ink-950/8 bg-white overflow-hidden dark:border-white/10 dark:bg-ink-900">
                <div className="relative aspect-[16/10] bg-paper-50 dark:bg-ink-800">
                  {post.cover_image_url && <Image src={post.cover_image_url} alt={post.title} fill className="object-cover" />}
                </div>
                <div className="p-5">
                  {post.category && <p className="text-xs font-semibold uppercase tracking-wide text-red-600">{post.category}</p>}
                  <h2 className="mt-2 font-display text-lg font-semibold text-ink-950 group-hover:text-red-600 dark:text-white">{post.title}</h2>
                  {post.excerpt && <p className="mt-2 text-sm text-ink-600 dark:text-ink-200">{post.excerpt}</p>}
                </div>
              </Link>
            ))}
            {posts.length === 0 && <p className="col-span-full text-center text-ink-400">No articles published yet.</p>}
          </div>
        </Container>
      </section>
    </>
  );
}
