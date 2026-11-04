import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils/cn";
import type { QuickAnswerContent } from "@/lib/content/quick-answers";

/**
 * A question, its direct answer and the facts behind it, in a plain table.
 * `framed` wraps it in its own page band; without it the block sits inside a
 * section that already has one.
 */
export function QuickAnswer({ content, framed = false, className }: { content: QuickAnswerContent; framed?: boolean; className?: string }) {
  const body = (
    <div className={className}>
      <h2 className="font-display text-2xl font-semibold text-ink-950 sm:text-[1.75rem]">{content.question}</h2>
      <p className="mt-3 text-base leading-relaxed text-ink-700">{content.answer}</p>
      <dl className="mt-5 divide-y divide-ink-950/8 rounded-2xl border border-ink-950/10 bg-white">
        {content.facts.map((fact) => (
          <div key={fact.label} className="grid gap-0.5 px-4 py-3 sm:grid-cols-[9.5rem_1fr] sm:gap-4 sm:px-5">
            <dt className="text-xs font-semibold uppercase tracking-[0.1em] text-ink-500 sm:pt-0.5">{fact.label}</dt>
            <dd className={cn("text-sm font-medium text-ink-900")}>
              {fact.href ? (
                <a href={fact.href} className="font-semibold text-red-600 hover:text-red-700">
                  {fact.value}
                </a>
              ) : (
                fact.value
              )}
            </dd>
          </div>
        ))}
      </dl>
      <p className="mt-3 text-xs leading-relaxed text-ink-500">{content.note}</p>
    </div>
  );

  if (!framed) return body;
  return (
    <section className="border-b border-ink-950/8 bg-paper-50 py-12 sm:py-16">
      <Container size="narrow" className="max-w-4xl">
        {body}
      </Container>
    </section>
  );
}
