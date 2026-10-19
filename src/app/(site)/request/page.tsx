import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { RequestWizard } from "@/components/request/request-wizard";
import { SERVICE_TYPE_SLUGS } from "@/lib/types/domain";
import { HeroBackdrop } from "@/components/brand/hero-backdrop";

export const metadata: Metadata = {
  title: "Request Roadside Help",
  description: "Share your location and request 24/7 roadside assistance — takes under two minutes.",
  robots: { index: false, follow: false },
};

export default async function RequestPage({
  searchParams,
}: {
  searchParams: Promise<{ service?: string }>;
}) {
  const { service } = await searchParams;
  const initialService = SERVICE_TYPE_SLUGS.includes(service as (typeof SERVICE_TYPE_SLUGS)[number])
    ? service
    : undefined;

  return (
    <>
      {/* A slim branded band above the form. Plain text, not a heading: each
          wizard step carries the page's heading itself. */}
      <div className="relative isolate overflow-hidden bg-ink-950 pt-8 pb-16 text-white sm:pt-10 sm:pb-20">
        <HeroBackdrop />
        <Container size="narrow">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-red-400">24/7 roadside dispatch</p>
          <p className="mt-2 font-display text-3xl font-bold uppercase tracking-tight sm:text-4xl">Request roadside help</p>
          <p className="mt-2 text-sm text-white/70">
            Share your location and what happened. You&apos;ll get a live tracking link by text and email
            once a driver is on the way.
          </p>
        </Container>
      </div>
      <div className="bg-paper-50 pb-8 sm:pb-14">
        <Container size="narrow">
          <div className="-mt-10 rounded-3xl border border-ink-950/8 bg-white p-5 shadow-xl shadow-ink-950/5 sm:-mt-12 sm:p-8 dark:border-white/10 dark:bg-ink-900">
            <RequestWizard initialService={initialService} />
          </div>
        </Container>
      </div>
    </>
  );
}
