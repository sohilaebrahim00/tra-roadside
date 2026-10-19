import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { BreadcrumbJsonLd } from "@/components/seo/json-ld";
import { GUIDES } from "@/lib/content/guides";
import { fillPrices } from "@/lib/content/price-tokens";
import { env } from "@/lib/env";
import { pageUrls, shareImageFor } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Car Battery and Roadside Guides",
  description:
    "Plain answers from a DFW roadside crew: car battery costs and warning signs, jump starting an electric car, and what to do about a lost wheel lock key.",
  ...pageUrls("/guides", shareImageFor("battery-replacement")),
};

export default function GuidesPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", url: env.siteUrl }, { name: "Guides", url: `${env.siteUrl}/guides` }]} />
      <section className="border-b border-ink-950/8 bg-ink-950 py-16 text-white sm:py-20">
        <Container>
          <SectionHeading
            as="h1"
            eyebrow="Guides"
            title="Straight answers before you call"
            description="Written by the people who do the work: what things cost, what the warning signs mean, and what to expect when a driver arrives."
            tone="light"
          />
        </Container>
      </section>

      <section className="py-14 sm:py-20">
        <Container>
          <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {GUIDES.map((g) => (
              <li key={g.slug}>
                <Link
                  href={`/guides/${g.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-ink-950/10 bg-white transition-colors hover:border-red-600/30"
                >
                  {(g.cardImage ?? g.image) && (
                    <Image
                      src={(g.cardImage ?? g.image)!.src}
                      alt=""
                      width={(g.cardImage ?? g.image)!.width}
                      height={(g.cardImage ?? g.image)!.height}
                      sizes="(min-width: 1024px) 380px, (min-width: 768px) 50vw, 100vw"
                      className="aspect-[3/2] h-auto w-full object-cover"
                    />
                  )}
                  <div className="flex flex-1 flex-col p-5">
                    <p className="text-xs font-semibold uppercase tracking-widest text-red-600">{g.topic}</p>
                    <h2 className="mt-2 font-display text-xl font-semibold text-ink-950 group-hover:text-red-600">{g.h1}</h2>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-600">{fillPrices(g.metaDescription)}</p>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-red-600">
                      Read the guide <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </>
  );
}
