import type { Metadata } from "next";
import { ExternalLink, PenLine, Quote } from "lucide-react";
import { pageUrls } from "@/lib/seo";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { BreadcrumbJsonLd } from "@/components/seo/json-ld";
import { HeroBackdrop } from "@/components/brand/hero-backdrop";
import { Stars, ReviewCaption } from "@/components/home/google-reviews-section";
import { heroPhoto } from "@/lib/content/hero-photos";
import { GOOGLE_REVIEWS, REVIEW_SNAPSHOT } from "@/lib/content/google-reviews";
import { getService } from "@/lib/content/services";
import { BUSINESS } from "@/lib/content/business";
import { env } from "@/lib/env";

export const metadata: Metadata = {
  title: `TRA Reviews: ${REVIEW_SNAPSHOT.rating.toFixed(1)} Stars from DFW Drivers`,
  description: `What Dallas–Fort Worth drivers say about TRA roadside assistance: ${REVIEW_SNAPSHOT.rating.toFixed(1)} stars from ${REVIEW_SNAPSHOT.total} Google reviews, word for word.`,
  ...pageUrls("/reviews"),
};

/**
 * Every review with text from the Google listing, verbatim (see
 * lib/content/google-reviews.ts for the rules). Display only: no Review or
 * AggregateRating JSON-LD, because Google does not allow marking up reviews
 * collected from Google on the business's own site.
 */
export default function ReviewsPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", url: env.siteUrl }, { name: "Reviews", url: `${env.siteUrl}/reviews` }]} />
      <section className="relative isolate overflow-hidden border-b border-ink-950/8 bg-ink-950 py-16 text-white sm:py-20">
        <HeroBackdrop photo={heroPhoto("/reviews")} />
        <Container>
          <SectionHeading
            as="h1"
            eyebrow="Google reviews"
            title="What drivers say after we leave"
            description="Every written review from our Google listing, word for word. Long ones are shortened where you see an ellipsis; the full text is on Google."
            tone="light"
          />
          <div className="mt-8 inline-flex items-center gap-4 rounded-2xl border border-white/15 bg-white/5 px-5 py-3">
            <span className="font-display text-4xl font-bold leading-none">{REVIEW_SNAPSHOT.rating.toFixed(1)}</span>
            <span>
              <Stars rating={REVIEW_SNAPSHOT.rating} size="h-[1.1rem] w-[1.1rem]" />
              <span className="mt-1 block text-xs text-white/70">
                {REVIEW_SNAPSHOT.total} reviews on Google · {REVIEW_SNAPSHOT.asOf}
              </span>
            </span>
          </div>
        </Container>
      </section>

      <section className="bg-paper-50 py-12 sm:py-16">
        <Container>
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {GOOGLE_REVIEWS.map((r, i) => {
              const svc = r.service ? getService(r.service) : undefined;
              return (
                <li key={`${r.author}-${i}`}>
                  <figure className="flex h-full flex-col rounded-2xl border border-ink-950/10 bg-white p-5 shadow-[0_1px_3px_rgba(10,10,11,0.06)]">
                    <div className="flex items-center justify-between gap-3">
                      <Stars rating={r.rating} />
                      {svc ? (
                        <a href={`/services/${svc.slug}`} className="rounded-full bg-red-600/10 px-2.5 py-0.5 text-xs font-semibold text-red-700 hover:bg-red-600/15">
                          {svc.shortName ?? svc.name}
                        </a>
                      ) : (
                        <Quote className="h-5 w-5 text-ink-950/15" aria-hidden="true" />
                      )}
                    </div>
                    <blockquote className="mt-3 flex-1 text-[0.95rem] leading-relaxed text-ink-700">{r.text}</blockquote>
                    <ReviewCaption review={{ author: r.author, rating: r.rating, text: r.text, moreUrl: r.excerpt ? BUSINESS.googleListingUrl : undefined }} />
                  </figure>
                </li>
              );
            })}
          </ul>

          <div className="mt-10 flex flex-col items-start gap-4 rounded-2xl border border-ink-950/10 bg-white p-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-display text-xl font-semibold uppercase text-ink-950">Had help from TRA?</p>
              <p className="mt-1 text-sm text-ink-600">A short review helps the next driver who is stuck find us.</p>
            </div>
            <div className="flex flex-wrap gap-2.5">
              <Button href={BUSINESS.googleReviewUrl} size="sm" icon={<PenLine className="h-4 w-4" aria-hidden="true" />}>
                Write a review
              </Button>
              <Button href={BUSINESS.googleListingUrl} size="sm" variant="outline" icon={<ExternalLink className="h-4 w-4" aria-hidden="true" />}>
                See them on Google
              </Button>
            </div>
          </div>
          <p className="mt-4 text-xs text-ink-500">
            Reviewers are shown with first name and last initial. Three of the {REVIEW_SNAPSHOT.total} reviews have stars only, and one repeats another almost word for word, so they are not listed here.
          </p>
        </Container>
      </section>
    </>
  );
}
