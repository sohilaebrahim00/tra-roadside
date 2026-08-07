import Link from "next/link";
import { Phone } from "lucide-react";
import { LogoLockup } from "@/components/brand/logo-mark";
import { Button } from "@/components/ui/button";
import { BUSINESS } from "@/lib/content/business";
import { NAV_LINKS } from "./nav-links";
import { MobileMenu } from "./mobile-menu";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 h-(--header-height) border-b border-ink-950/8 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/75 dark:border-white/10 dark:bg-ink-950/85">
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-ink-950 dark:text-white" aria-label="TRA — Texas Roadside Assistance home">
          <LogoLockup />
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-ink-700 transition-colors hover:text-red-600 dark:text-ink-200 dark:hover:text-red-400"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={BUSINESS.phoneHref}
            className="flex items-center gap-2 text-sm font-semibold text-ink-950 dark:text-white"
          >
            <Phone className="h-4 w-4 text-red-600" aria-hidden="true" />
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
