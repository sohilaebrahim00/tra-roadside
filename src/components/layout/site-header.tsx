import Link from "next/link";
import { Phone } from "lucide-react";
import { LogoLockup } from "@/components/brand/logo-mark";
import { Button } from "@/components/ui/button";
import { BUSINESS } from "@/lib/content/business";
import { NAV_LINKS } from "./nav-links";
import { MobileMenu } from "./mobile-menu";

/**
 * Dark glass on every page: it reads as one bar with the battery strip above
 * it, and sits on the dark heroes below without a white band between them.
 */
export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 h-(--header-height) border-b border-white/10 bg-ink-950/90 text-white backdrop-blur supports-[backdrop-filter]:bg-ink-950/75">
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-white" aria-label="TRA — Texas Roadside Assistance home">
          <LogoLockup />
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-white/75 transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={BUSINESS.phoneHref}
            className="flex items-center gap-2 text-sm font-semibold text-white"
          >
            <Phone className="h-4 w-4 text-red-500" aria-hidden="true" />
            {BUSINESS.phoneDisplay}
          </a>
          <Button href="/request" size="md">
            Request Help
          </Button>
        </div>

        <MobileMenu />
      </div>
    </header>
  );
}
