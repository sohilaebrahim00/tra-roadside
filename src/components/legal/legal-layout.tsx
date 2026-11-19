import { Container } from "@/components/ui/container";
import { HeroBackdrop } from "@/components/brand/hero-backdrop";
import { heroPhoto } from "@/lib/content/hero-photos";

/**
 * Legal pages open with the same dark band and job photo as every other inner
 * page, so no page on the site is without a picture; the text follows on the
 * light background.
 */
export function LegalLayout({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <section className="relative isolate overflow-hidden border-b border-ink-950/8 bg-ink-950 py-14 text-white sm:py-20">
        <HeroBackdrop photo={heroPhoto(title)} />
        <Container size="narrow">
          <h1 className="font-display text-3xl font-semibold text-white">{title}</h1>
          <p className="mt-2 text-sm text-white/70">Last updated: {updated}</p>
        </Container>
      </section>
      <section className="py-12 sm:py-16">
        <Container size="narrow">
          <div className="prose prose-neutral max-w-none text-ink-700 dark:text-ink-200 [&_h2]:font-display [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-ink-950 [&_h2]:dark:text-white [&_h2]:mt-8 [&_h2]:mb-3 [&_p]:mb-4 [&_ul]:mb-4 [&_ul]:list-disc [&_ul]:pl-5 [&_li]:mb-1.5">
            {children}
          </div>
        </Container>
      </section>
    </>
  );
}

export function LegalPlaceholder({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded bg-amber-500/15 px-1.5 py-0.5 text-amber-800 dark:text-amber-400">
      {children}
    </span>
  );
}
