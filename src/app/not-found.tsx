import Link from "next/link";
import { LifeBuoy, Phone } from "lucide-react";
import { LogoLockup } from "@/components/brand/logo-mark";
import { Button } from "@/components/ui/button";
import { BUSINESS } from "@/lib/content/business";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4 text-center">
      <Link href="/" className="mb-10">
        <LogoLockup />
      </Link>
      <p className="font-display text-7xl font-bold text-ink-950">404</p>
      <h1 className="mt-3 font-display text-2xl font-semibold text-ink-950">This page took a wrong turn</h1>
      <p className="mt-2 max-w-sm text-ink-600">
        The page you&apos;re looking for doesn&apos;t exist. If you&apos;re stranded right now, don&apos;t wait on a broken link.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Button href="/request" size="lg" icon={<LifeBuoy className="h-4 w-4" aria-hidden="true" />}>
          Request Help
        </Button>
        <Button href={BUSINESS.phoneHref} variant="outline" size="lg" icon={<Phone className="h-4 w-4" aria-hidden="true" />}>
          Call {BUSINESS.phoneDisplay}
        </Button>
      </div>
      <Link href="/" className="mt-6 text-sm font-semibold text-red-600 hover:underline">
        Back to homepage
      </Link>
    </div>
  );
}
