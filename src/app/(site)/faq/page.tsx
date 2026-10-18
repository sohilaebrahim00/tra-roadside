import type { Metadata } from "next";
import { pageUrls } from "@/lib/seo";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { BreadcrumbJsonLd, FaqJsonLd } from "@/components/seo/json-ld";
import { FaqPageClient } from "@/components/faq/faq-page-client";
import { getFaqs } from "@/lib/data/faqs";
import { env } from "@/lib/env";

export const metadata: Metadata = {
  title: "FAQs",
  description: "Answers to common questions about TRA roadside assistance — service areas, arrival time, pricing, tracking, and more.",
  ...pageUrls("/faq"),
};

export default async function FaqPage() {
  const faqs = await getFaqs();

  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", url: env.siteUrl }, { name: "FAQs", url: `${env.siteUrl}/faq` }]} />
      <FaqJsonLd items={faqs.map((f) => ({ q: f.question, a: f.answer }))} />

      <section className="border-b border-ink-950/8 bg-ink-950 py-16 text-white sm:py-20">
        <Container>
          <SectionHeading as="h1" eyebrow="Questions" title="Frequently asked questions" tone="light" />
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container size="narrow">
          <FaqPageClient faqs={faqs} />
        </Container>
      </section>
    </>
  );
}
