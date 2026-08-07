"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AlertTriangle, RotateCw, Phone } from "lucide-react";
import { LogoLockup } from "@/components/brand/logo-mark";
import { Button } from "@/components/ui/button";
import { BUSINESS } from "@/lib/content/business";

export default function ErrorBoundary({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4 text-center">
      <Link href="/" className="mb-10">
        <LogoLockup />
      </Link>
      <AlertTriangle className="h-10 w-10 text-red-600" aria-hidden="true" />
      <h1 className="mt-4 font-display text-2xl font-semibold text-ink-950">Something went wrong</h1>
      <p className="mt-2 max-w-sm text-ink-600">
        An unexpected error occurred. If you need roadside help right now, please call us directly
        instead of waiting on the site.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Button onClick={reset} size="lg" icon={<RotateCw className="h-4 w-4" aria-hidden="true" />}>
          Try Again
        </Button>
        <Button href={BUSINESS.phoneHref} variant="outline" size="lg" icon={<Phone className="h-4 w-4" aria-hidden="true" />}>
          Call {BUSINESS.phoneDisplay}
        </Button>
      </div>
    </div>
  );
}
