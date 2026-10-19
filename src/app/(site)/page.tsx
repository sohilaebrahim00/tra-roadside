import type { Metadata } from "next";
import { pageUrls } from "@/lib/seo";
import dynamic from "next/dynamic";
import { Hero } from "@/components/home/hero";
import { BatteryPromoSection } from "@/components/home/battery-promo-section";
import { TrustStrip } from "@/components/home/trust-strip";
import { SignatureWordSection } from "@/components/home/signature-word-section";
import { RoadsideRevealSection } from "@/components/home/roadside-reveal-section";
import { TrackingPreviewSection } from "@/components/home/tracking-preview-section";
import { WhyChooseSection } from "@/components/home/why-choose-section";
import { ServiceAreasSection } from "@/components/home/service-areas-section";
import { GallerySection } from "@/components/home/gallery-section";
import { VideoSection } from "@/components/home/video-section";
import { GoogleReviewsSection } from "@/components/home/google-reviews-section";
import { FaqPreviewSection } from "@/components/home/faq-preview-section";
import { FinalCtaSection } from "@/components/home/final-cta-section";
import { ServicesSection } from "@/components/home/services-section";

// Code-split the GSAP ScrollTrigger section below the fold so its JS loads as
// a separate chunk instead of bloating the bundle the hero/CTAs need to
// hydrate. The skeleton reserves roughly the real section height to avoid
// layout shift while the chunk loads. ServicesSection is imported normally:
// it sits directly under the hero, so it must not wait behind a placeholder.
const HowItWorksSection = dynamic(() => import("@/components/home/how-it-works-section").then((m) => m.HowItWorksSection), {
  loading: () => <div className="h-[900px] bg-ink-950 sm:h-[600px]" aria-hidden="true" />,
});

/**
 * The home page previously exported no metadata at all, so it inherited the
 * root layout's and was the ONE indexable page on the site with no canonical
 * tag. Only the canonical and og:url are set here: title and description still
 * come from the layout, and both URLs resolve against `metadataBase`
 * (env.siteUrl), so they follow the canonical host rather than hard-coding it.
 */
export const metadata: Metadata = {
  ...pageUrls("/"),
};

export default function HomePage() {
  return (
    <>
      <Hero />
      {/* Services first, so a customer sees what we do and can order it
          without scrolling past anything else; the battery offer follows. */}
      <ServicesSection />
      <BatteryPromoSection />
      <TrustStrip />
      {/* Social proof directly under the trust strip: live Places data when
          configured, otherwise the verbatim snapshot from the listing. */}
      <GoogleReviewsSection />
      <SignatureWordSection />
      <RoadsideRevealSection />
      <HowItWorksSection />
      <TrackingPreviewSection />
      <WhyChooseSection />
      <ServiceAreasSection />
      <GallerySection />
      <VideoSection />
      <FaqPreviewSection />
      <FinalCtaSection />
    </>
  );
}
