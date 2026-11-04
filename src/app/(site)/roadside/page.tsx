import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { BreadcrumbJsonLd } from "@/components/seo/json-ld";
import { HeroBackdrop } from "@/components/brand/hero-backdrop";
import { TOPIC_PAGES, type TopicKind } from "@/lib/content/topic-pages";
import { pricedTitle, startingPrice } from "@/lib/content/pricing";
import { env } from "@/lib/env";
import { pageUrls } from "@/lib/seo";

export const metadata: Metadata = {
  title: { absolute: pricedTitle("Roadside Help by Problem", startingPrice()) },
  description: "Flat tire, dead battery, locked out, stuck on the highway: find your situation and what to do next. 24/7 roadside help across Dallas–Fort Worth, no membership.",
  ...pageUrls("/roadside"),
};

const GROUPS: { kind: TopicKind; title: string }[] = [
  { kind: "problem", title: "What happened?" },
  { kind: "driver", title: "Your kind of vehicle or work" },
  { kind: "place", title: "Where are you?" },
];

/** Every topic page, grouped: the hub that links them all. */
export default function RoadsideIndexPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", url: env.siteUrl }, { name: "Roadside Help", url: `${env.siteUrl}/roadside` }]} />
      <section className="relative isolate overflow-hidden border-b border-ink-950/8 bg-ink-950 py-16 text-white sm:py-20">
        <HeroBackdrop />
        <Container>
          <SectionHeading as="h1" eyebrow="Roadside help" title="Find your situation" description="What to do right now, what it costs, and how to get a driver to you." tone="light" />
        </Container>
      </section>

      <section className="py-14 sm:py-20">
        <Container className="space-y-12">
          {GROUPS.map(({ kind, title }) => {
            const topics = TOPIC_PAGES.filter((t) => t.kind === kind);
            if (topics.length === 0) return null;
            return (
              <div key={kind}>
                <h2 className="font-display text-2xl font-semibold text-ink-950 sm:text-3xl">{title}</h2>
                <ul className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {topics.map((t) => (
                    <li key={t.slug}>
                      <Link href={`/roadside/${t.slug}`} className="flex h-full items-center justify-between gap-3 rounded-xl border border-ink-950/10 bg-white px-4 py-3.5 text-sm font-semibold text-ink-900 hover:border-red-600/40">
                        {t.h1}
                        <ArrowUpRight className="h-4 w-4 shrink-0 text-red-600" aria-hidden="true" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </Container>
      </section>
    </>
  );
}
