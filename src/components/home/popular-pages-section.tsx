import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { getTopicPage } from "@/lib/content/topic-pages";

const SLUGS = [
  "flat-tire-help",
  "car-wont-start",
  "locked-keys-in-car",
  "mobile-battery-replacement",
  "24-hour-tire-service",
  "jump-start-near-me",
  "no-spare-tire",
  "roadside-assistance-near-me",
];

/** Direct links to the situations drivers look for most. */
export function PopularPagesSection() {
  const topics = SLUGS.flatMap((slug) => getTopicPage(slug) ?? []);
  if (topics.length === 0) return null;
  return (
    <section className="border-t border-ink-950/8 bg-paper-50 py-12 sm:py-16">
      <Container>
        <h2 className="font-display text-2xl font-semibold text-ink-950 sm:text-3xl">What drivers look for most</h2>
        <ul className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {topics.map((t) => (
            <li key={t.slug}>
              <Link href={`/roadside/${t.slug}`} className="flex h-full items-center justify-between gap-3 rounded-xl border border-ink-950/10 bg-white px-4 py-3 text-sm font-semibold text-ink-900 hover:border-red-600/40">
                {t.h1}
                <ArrowUpRight className="h-4 w-4 shrink-0 text-red-600" aria-hidden="true" />
              </Link>
            </li>
          ))}
        </ul>
        <Link href="/roadside" className="mt-4 inline-flex text-sm font-semibold text-red-600 hover:text-red-700">
          See every situation
        </Link>
      </Container>
    </section>
  );
}
