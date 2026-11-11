import { BadgeCheck, Languages, ShieldCheck, Timer, Clock, Receipt } from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/ui/container";

const ITEMS: { icon: typeof Timer; label: string; href?: string; lang?: string }[] = [
  { icon: Timer, label: "Nearest Driver Sent ASAP" },
  { icon: Languages, label: "Se Habla Español", href: "/es", lang: "es" },
  { icon: ShieldCheck, label: "100% Licensed & Insured" },
  { icon: Clock, label: "Available 24/7, 365 Days" },
  { icon: Receipt, label: "Upfront Pricing, No Surprise Fees" },
  { icon: BadgeCheck, label: "No Membership, Pay Per Job" },
];

export function TrustStrip() {
  return (
    <div className="border-b border-ink-950/8 bg-paper-50">
      <Container>
        {/* Scrolls sideways on phones, so it is a focusable, labeled region:
            otherwise keyboard users cannot reach the items past the edge. */}
        <div
          role="region"
          aria-label="Why drivers choose TRA"
          tabIndex={0}
          className="flex gap-x-8 gap-y-3 overflow-x-auto py-5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:flex-wrap sm:justify-center"
        >
          {ITEMS.map(({ icon: Icon, label, href, lang }) =>
            href ? (
              <Link key={label} href={href} lang={lang} hrefLang={lang} className="flex shrink-0 items-center gap-2.5 text-sm font-medium text-ink-700 underline-offset-4 hover:text-red-600 hover:underline">
                <Icon className="h-4.5 w-4.5 text-red-600" aria-hidden="true" />
                {label}
              </Link>
            ) : (
              <div key={label} className="flex shrink-0 items-center gap-2.5 text-sm font-medium text-ink-700">
                <Icon className="h-4.5 w-4.5 text-red-600" aria-hidden="true" />
                {label}
              </div>
            )
          )}
        </div>
      </Container>
    </div>
  );
}
