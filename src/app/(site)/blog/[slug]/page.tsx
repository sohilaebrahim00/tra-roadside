import type { Metadata } from "next";
import { pageUrls } from "@/lib/seo";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { BreadcrumbJsonLd, BlogPostingJsonLd } from "@/components/seo/json-ld";
import { getBlogPost } from "@/lib/data/blog";
import { env } from "@/lib/env";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPost(slug);
  if (!post) return {};
  return {
    title: post.seo_title || post.title,
    description: post.seo_description || post.excerpt || undefined,
    ...pageUrls(`/blog/${post.slug}`),
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getBlogPost(slug);
  if (!post) notFound();

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: env.siteUrl },
          { name: "Blog", url: `${env.siteUrl}/blog` },
          { name: post.title, url: `${env.siteUrl}/blog/${post.slug}` },
        ]}
      />
      <BlogPostingJsonLd
        title={post.title}
        description={post.excerpt ?? post.title}
        datePublished={post.published_at ?? post.updated_at}
        dateModified={post.updated_at}
        authorName={post.author_name}
        image={post.cover_image_url ?? undefined}
        url={`${env.siteUrl}/blog/${post.slug}`}
      />
      <article className="py-16 sm:py-24">
        <Container size="narrow">
          {post.category && <p className="text-xs font-semibold uppercase tracking-wide text-red-600">{post.category}</p>}
          <h1 className="mt-2 font-display text-3xl font-semibold text-ink-950 dark:text-white sm:text-4xl">{post.title}</h1>
          <p className="mt-3 text-sm text-ink-500 dark:text-ink-300">
            By {post.author_name}
            {post.published_at && ` · ${new Date(post.published_at).toLocaleDateString()}`}
          </p>

          {post.cover_image_url && (
            <div className="relative mt-8 aspect-[16/9] overflow-hidden rounded-2xl">
              <Image src={post.cover_image_url} alt={post.title} fill className="object-cover" />
            </div>
          )}

          <div className="prose prose-neutral mt-8 max-w-none whitespace-pre-line text-ink-700 dark:text-ink-200">
            {post.content}
          </div>
        </Container>
      </article>
    </>
  );
}
