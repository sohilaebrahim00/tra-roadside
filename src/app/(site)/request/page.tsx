import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { RequestWizard } from "@/components/request/request-wizard";
import { SERVICE_TYPE_SLUGS } from "@/lib/types/domain";

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
    <div className="bg-paper-50 py-8 sm:py-14">
      <Container size="narrow">
        <div className="rounded-3xl border border-ink-950/8 bg-white p-5 shadow-sm sm:p-8 dark:border-white/10 dark:bg-ink-900">
          <RequestWizard initialService={initialService} />
        </div>
      </Container>
    </div>
  );
}
