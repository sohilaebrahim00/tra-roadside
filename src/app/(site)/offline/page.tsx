import type { Metadata } from "next";
import { WifiOff, Phone } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { BUSINESS } from "@/lib/content/business";

export const metadata: Metadata = {
  title: "You're Offline",
  robots: { index: false, follow: false },
};

export default function OfflinePage() {
  return (
    <Container size="narrow" className="flex min-h-[70vh] flex-col items-center justify-center text-center">
      <WifiOff className="h-10 w-10 text-ink-400" aria-hidden="true" />
      <h1 className="mt-4 font-display text-2xl font-semibold text-ink-950 dark:text-white">You&apos;re offline</h1>
      <p className="mt-2 max-w-sm text-ink-600 dark:text-ink-200">
        This page couldn&apos;t load because your connection dropped. If you need help right now, call
        dispatch directly — phone calls work without a data connection.
      </p>
      <Button href={BUSINESS.phoneHref} size="lg" className="mt-6" icon={<Phone className="h-4 w-4" aria-hidden="true" />}>
        Call {BUSINESS.phoneDisplay}
      </Button>
      <p className="mt-4 text-xs text-ink-400">This page will retry automatically once you&apos;re back online.</p>
    </Container>
  );
}
