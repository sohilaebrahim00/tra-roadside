import Link from "next/link";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { FaqAccordion } from "@/components/faq/faq-accordion";
import { getFaqs } from "@/lib/data/faqs";

export async function FaqPreviewSection() {
  const faqs = await getFaqs();

  return (
    <section className="py-12 sm:py-28">
      <Container size="narrow">
        <SectionHeading eyebrow="Questions" title="Frequently asked questions" align="center" />
        <div className="mt-10 rounded-2xl border border-ink-950/8 px-6 dark:border-white/10">
          <FaqAccordion items={faqs.slice(0, 6)} />
        </div>
        <div className="mt-8 text-center">
          <Link href="/faq" className="text-sm font-semibold text-red-600 hover:text-red-700">
            View all FAQs →
          </Link>
        </div>
      </Container>
    </section>
  );
}
