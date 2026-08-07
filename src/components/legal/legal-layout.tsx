import { Container } from "@/components/ui/container";

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
    <section className="py-16 sm:py-24">
      <Container size="narrow">
        <h1 className="font-display text-3xl font-semibold text-ink-950 dark:text-white">{title}</h1>
        <p className="mt-2 text-sm text-ink-400">Last updated: {updated}</p>
        <div className="prose prose-neutral mt-8 max-w-none text-ink-700 dark:text-ink-200 [&_h2]:font-display [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-ink-950 [&_h2]:dark:text-white [&_h2]:mt-8 [&_h2]:mb-3 [&_p]:mb-4 [&_ul]:mb-4 [&_ul]:list-disc [&_ul]:pl-5 [&_li]:mb-1.5">
          {children}
        </div>
      </Container>
    </section>
  );
}

export function LegalPlaceholder({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded bg-amber-500/15 px-1.5 py-0.5 text-amber-700 dark:text-amber-400">
      {children}
    </span>
  );
}
