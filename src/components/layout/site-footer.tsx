import Link from "next/link";
import { Phone, Mail, Clock, PenLine, MapPin } from "lucide-react";
import { FacebookIcon, InstagramIcon, YoutubeIcon } from "@/components/brand/social-icons";
import { FullLogo } from "@/components/brand/logo-mark";
import { BrandPattern } from "@/components/brand/brand-pattern";
import { BUSINESS, SERVICE_AREAS } from "@/lib/content/business";
import { SERVICES } from "@/lib/content/services";
import { Container } from "@/components/ui/container";

export function SiteFooter() {
  return (
    <footer className="relative isolate overflow-hidden border-t border-white/10 bg-ink-950 text-white">
      <BrandPattern strength={0.06} />
      <Container className="grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-5 lg:gap-8">
        <div className="lg:col-span-2">
          <FullLogo onDark className="w-40" />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/60">
            {BUSINESS.dispatchNote}. Fast, upfront-priced roadside assistance across the
            Dallas–Fort Worth Metroplex, available around the clock.
          </p>
          <div className="mt-5 space-y-2 text-sm text-white/75">
            <a href={BUSINESS.phoneHref} className="flex items-center gap-2 hover:text-white">
              <Phone className="h-4 w-4 text-red-500" aria-hidden="true" /> {BUSINESS.phoneDisplay}
            </a>
            <a href={`mailto:${BUSINESS.email}`} className="flex items-center gap-2 hover:text-white">
              <Mail className="h-4 w-4 text-red-500" aria-hidden="true" /> {BUSINESS.email}
            </a>
            <p className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-red-500" aria-hidden="true" /> {BUSINESS.hours}
            </p>
            {/*
              Asking for a review, not asserting one. No stars and no rating
              figure here on purpose: any rating shown on the site has to come
              from the live Places response, never from static markup.
            */}
            <a
              href={BUSINESS.googleReviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Leave TRA a review on Google (opens in a new tab)"
              className="flex items-center gap-2 hover:text-white"
            >
              <PenLine className="h-4 w-4 text-red-500" aria-hidden="true" /> Review us on Google
            </a>
            <a
              href={BUSINESS.googleListingUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View the TRA listing on Google (opens in a new tab)"
              className="flex items-center gap-2 hover:text-white"
            >
              <MapPin className="h-4 w-4 text-red-500" aria-hidden="true" /> Find us on Google
            </a>
          </div>
          <div className="mt-6 flex items-center gap-3">
            <a
              href={BUSINESS.socials.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TRA on Facebook"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 hover:border-white/40"
            >
              <FacebookIcon className="h-4 w-4" />
            </a>
            <a
              href={BUSINESS.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TRA on Instagram"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 hover:border-white/40"
            >
              <InstagramIcon className="h-4 w-4" />
            </a>
            <a
              href={BUSINESS.socials.youtube}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TRA on YouTube"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 hover:border-white/40"
            >
              <YoutubeIcon className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-white/50">Services</h2>
          <ul className="mt-4 space-y-2.5 text-sm text-white/70">
            {SERVICES.slice(0, 7).map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`} className="hover:text-white">
                  {s.shortName}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/services" className="font-medium text-red-400 hover:text-red-300">
                View all services →
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-white/50">Service Areas</h2>
          <ul className="mt-4 space-y-2.5 text-sm text-white/70">
            {SERVICE_AREAS.slice(0, 7).map((c) => (
              <li key={c.slug}>
                <Link href={`/service-areas/${c.slug}`} className="hover:text-white">
                  {c.name}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/service-areas" className="font-medium text-red-400 hover:text-red-300">
                View all {SERVICE_AREAS.length} cities →
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-white/50">Company</h2>
          <ul className="mt-4 space-y-2.5 text-sm text-white/70">
            <li><Link href="/about" className="hover:text-white">About TRA</Link></li>
            <li><Link href="/how-it-works" className="hover:text-white">How It Works</Link></li>
            <li><Link href="/pricing" className="hover:text-white">Pricing</Link></li>
            <li><Link href="/guides" className="hover:text-white">Battery &amp; Roadside Guides</Link></li>
            <li><Link href="/gallery" className="hover:text-white">Gallery</Link></li>
            <li><Link href="/videos" className="hover:text-white">Videos</Link></li>
            <li><Link href="/blog" className="hover:text-white">Blog</Link></li>
            <li><Link href="/faq" className="hover:text-white">FAQs</Link></li>
            <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col items-center justify-between gap-3 py-6 text-xs text-white/50 sm:flex-row">
          <p>© {new Date().getFullYear()} {BUSINESS.legalName}. All rights reserved.</p>
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            <Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white">Terms</Link>
            <Link href="/sms-terms" className="hover:text-white">SMS Terms</Link>
            <Link href="/accessibility" className="hover:text-white">Accessibility</Link>
          </div>
        </Container>
      </div>
    </footer>
  );
}
