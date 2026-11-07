import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { BreadcrumbJsonLd } from "@/components/seo/json-ld";
import { HeroBackdrop } from "@/components/brand/hero-backdrop";
import { GLOSSARY } from "@/lib/content/glossary";
import { getService } from "@/lib/content/services";
import { fillPrices } from "@/lib/content/price-tokens";
import { env } from "@/lib/env";
import { pageUrls } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Roadside and Car Battery Glossary",
  description: "Plain-English meanings of the words you hear on a roadside call: CCA, AGM, group size, TPMS, wheel lock, run-flat, dispatch fee and more.",
  ...pageUrls("/glossary"),
};

/** Every term, A to Z, as a definition list with an anchor for each. */
export default function GlossaryPage() {
  const terms = [...GLOSSARY].sort((a, b) => a.term.localeCompare(b.term));
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "DefinedTermSet",
    name: "Roadside and car battery glossary",
    url: `${env.siteUrl}/glossary`,
    hasDefinedTerm: terms.map((t) => ({ "@type": "DefinedTerm", name: t.term, description: fillPrices(t.definition), url: `${env.siteUrl}/glossary#${t.id}` })),
  };

  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", url: env.siteUrl }, { name: "Glossary", url: `${env.siteUrl}/glossary` }]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <section className="relative isolate overflow-hidden border-b border-ink-950/8 bg-ink-950 py-16 text-white sm:py-20">
        <HeroBackdrop />
        <Container>
          <SectionHeading as="h1" eyebrow="Glossary" title="Roadside words, in plain English" description="What the terms on a battery, a tire or a roadside bill mean." tone="light" />
        </Container>
      </section>
      <section className="py-14 sm:py-20">
        <Container size="narrow" className="max-w-3xl">
          <dl className="divide-y divide-ink-950/8">
            {terms.map((t) => {
              const svc = t.service && getService(t.service);
              return (
                <div key={t.id} id={t.id} className="scroll-mt-28 py-5">
                  <dt className="font-display text-xl font-semibold text-ink-950">{t.term}</dt>
                  <dd className="mt-2 text-base leading-relaxed text-ink-700">
                    {fillPrices(t.definition)}
                    {svc && (
                      <>
                        {" "}
                        <Link href={`/services/${svc.slug}`} className="font-semibold text-red-600 hover:text-red-700">
                          {svc.name}
                        </Link>
                      </>
                    )}
                  </dd>
                </div>
              );
            })}
          </dl>
        </Container>
      </section>
    </>
  );
}
