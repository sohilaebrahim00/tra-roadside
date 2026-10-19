import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, LifeBuoy, Phone } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { FaqAccordion } from "@/components/faq/faq-accordion";
import { PricePanel } from "@/components/city-service/price-panel";
import { BlogPostingJsonLd, BreadcrumbJsonLd, FaqJsonLd } from "@/components/seo/json-ld";
import { GUIDES, getGuide } from "@/lib/content/guides";
import { fillPrices } from "@/lib/content/price-tokens";
import { getService } from "@/lib/content/services";
import { BUSINESS } from "@/lib/content/business";
import { env } from "@/lib/env";
import { pageUrls, shareImageFor } from "@/lib/seo";
import { HeroBackdrop } from "@/components/brand/hero-backdrop";

/**
 * One guide, rendered from src/lib/content/guides.ts. Every price in the copy
 * comes through fillPrices() from SERVICES, and the price box is the same
 * PricePanel the service pages use, so a guide can never quote a stale figure.
 */

export function generateStaticParams() {
  return GUIDES.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) return {};
  return {
    title: guide.title,
    description: fillPrices(guide.metaDescription),
    ...pageUrls(`/guides/${guide.slug}`, shareImageFor(guide.services[0])),
  };
}

function formatDate(iso: string): string {
  return new Date(`${iso}T12:00:00Z`).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric", timeZone: "UTC" });
}

export default async function GuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) notFound();

  const main = getService(guide.services[0]);
  const path = `/guides/${guide.slug}`;
  const others = GUIDES.filter((g) => g.slug !== guide.slug);
  const faqs = guide.faqs.map((f) => ({ q: fillPrices(f.q), a: fillPrices(f.a) }));

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: env.siteUrl },
          { name: "Guides", url: `${env.siteUrl}/guides` },
          { name: guide.title, url: `${env.siteUrl}${path}` },
        ]}
      />
      <BlogPostingJsonLd
        title={guide.h1}
        description={fillPrices(guide.metaDescription)}
        datePublished={guide.updated}
        dateModified={guide.updated}
        authorName={BUSINESS.legalName}
        image={guide.image ? `${env.siteUrl}${guide.image.src}` : undefined}
        url={`${env.siteUrl}${path}`}
      />
      <FaqJsonLd items={faqs} />

      <section className="relative isolate overflow-hidden border-b border-ink-950/8 bg-ink-950 py-14 text-white sm:py-18">
        <HeroBackdrop />
        <Container size="narrow" className="max-w-3xl">
          <nav aria-label="Breadcrumb" className="text-sm text-white/60">
            <Link href="/guides" className="hover:text-white">Guides</Link>
            <span aria-hidden="true"> / </span>
            <span className="text-white/80">{guide.topic}</span>
          </nav>
          <h1 className="mt-4 font-display text-3xl font-bold leading-tight sm:text-[2.6rem]">{guide.h1}</h1>
          <p className="mt-5 text-lg leading-relaxed text-white/75">{fillPrices(guide.dek)}</p>
          <p className="mt-5 text-sm text-white/50">
            Updated <time dateTime={guide.updated}>{formatDate(guide.updated)}</time> · Texas Roadside Assistance
          </p>
        </Container>
      </section>

      <article className="bg-white py-12 sm:py-16">
        <Container size="narrow" className="max-w-3xl">
          {guide.image && (
            <figure className="mb-10">
              <Image
                src={guide.image.src}
                alt={guide.image.alt}
                width={guide.image.width}
                height={guide.image.height}
                sizes="(min-width: 832px) 768px, calc(100vw - 2rem)"
                priority
                className="h-auto w-full rounded-2xl border border-ink-950/10"
              />
              {guide.image.caption && <figcaption className="mt-3 text-sm text-ink-500">{guide.image.caption}</figcaption>}
            </figure>
          )}

          <div className="space-y-10">
            {guide.sections.map((section) => (
              <section key={section.heading}>
                <h2 className="font-display text-2xl font-semibold text-ink-950">{section.heading}</h2>
                {section.paragraphs.map((p) => (
                  <p key={p.slice(0, 40)} className="mt-4 text-[1.05rem] leading-relaxed text-ink-700">
                    {fillPrices(p)}
                  </p>
                ))}
                {section.list && (
                  <ul className="mt-4 space-y-2.5 pl-5 text-[1.05rem] leading-relaxed text-ink-700 marker:text-red-600 [list-style:disc]">
                    {section.list.map((item) => (
                      <li key={item.slice(0, 40)}>{fillPrices(item)}</li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>

          {main && (
            <aside className="mt-12 rounded-2xl border border-ink-950/10 bg-paper-50 p-6 sm:p-8" aria-label={`${main.name} price`}>
              <p className="text-xs font-semibold uppercase tracking-widest text-red-600">{main.name}</p>
              <p className="mt-2 font-display text-2xl font-semibold text-ink-950">{main.heroLine}</p>
              <PricePanel svc={main} tone="dark" className="mt-5" />
              <div className="mt-6 flex flex-wrap gap-3">
                <Button href={`/request?service=${main.slug}`} size="lg" icon={<LifeBuoy className="h-4 w-4" aria-hidden="true" />}>
                  Request {main.shortName}
                </Button>
                <Button href={BUSINESS.phoneHref} size="lg" variant="outline" icon={<Phone className="h-4 w-4" aria-hidden="true" />}>
                  Call {BUSINESS.phoneDisplay}
                </Button>
              </div>
              <Link href={`/services/${main.slug}`} className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-red-600 hover:text-red-700">
                How {main.name.toLowerCase()} works <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </aside>
          )}

          <section className="mt-14">
            <h2 className="font-display text-2xl font-semibold text-ink-950">Common questions</h2>
            <div className="mt-5 rounded-2xl border border-ink-950/8 bg-white px-5 sm:px-6">
              <FaqAccordion
                items={faqs.map((f, i) => ({ id: `${guide.slug}-${i}`, category: guide.topic, question: f.q, answer: f.a }))}
              />
            </div>
          </section>

          {others.length > 0 && (
            <nav className="mt-14 border-t border-ink-950/10 pt-8" aria-label="More guides">
              <h2 className="font-display text-xl font-semibold text-ink-950">More guides</h2>
              <ul className="mt-4 space-y-3">
                {others.map((g) => (
                  <li key={g.slug}>
                    <Link href={`/guides/${g.slug}`} className="group inline-flex items-start gap-2 font-semibold text-ink-800 hover:text-red-600">
                      <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-red-600" aria-hidden="true" />
                      {g.h1}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          )}
        </Container>
      </article>
    </>
  );
}
