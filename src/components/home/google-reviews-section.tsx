import { Star, ExternalLink, PenLine, Quote } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { BUSINESS } from "@/lib/content/business";
import { GOOGLE_REVIEWS, REVIEW_SNAPSHOT } from "@/lib/content/google-reviews";
import { env } from "@/lib/env";

/**
 * Real Google reviews in one framed section, from one of two sources:
 *
 *   1. Live, from the Places API, when GOOGLE_MAPS_SERVER_API_KEY and
 *      GOOGLE_PLACE_ID are set. Revalidated daily.
 *   2. Otherwise the verbatim snapshot in src/lib/content/google-reviews.ts,
 *      read from the public listing, with its date printed beside the rating.
 *
 * There is no sample review, placeholder author or invented rating anywhere.
 * Reviewers appear as first name and last initial in both modes, with an
 * initials badge rather than Google's hosted avatar, which the Places terms do
 * not let us re-host.
 *
 * No aggregateRating or Review JSON-LD is emitted from either source: Google's
 * structured data policy forbids marking up reviews collected from Google
 * itself, so this section is display-only.
 */

interface PlacesReview {
  author_name?: string;
  author_url?: string;
  rating?: number;
  text?: string;
}

interface PlacesDetailsResponse {
  status?: string;
  result?: { rating?: number; user_ratings_total?: number; reviews?: PlacesReview[] };
}

interface FrameReview {
  author: string;
  rating: number;
  text: string;
  /** Link to read the rest, when the text shown is shortened. */
  moreUrl?: string;
}

const MAX_REVIEWS = 5;
const MAX_TEXT_CHARS = 320;
const REVALIDATE_SECONDS = 86_400;

async function fetchPlaceDetails(): Promise<PlacesDetailsResponse["result"] | null> {
  const key = env.googleMapsServerApiKey;
  const placeId = env.googlePlaceId;
  if (!key || !placeId) return null;

  const url = new URL("https://maps.googleapis.com/maps/api/place/details/json");
  url.searchParams.set("place_id", placeId);
  url.searchParams.set("fields", "rating,user_ratings_total,reviews");
  url.searchParams.set("key", key);

  try {
    const res = await fetch(url, { next: { revalidate: REVALIDATE_SECONDS } });
    if (!res.ok) return null;
    const json = (await res.json()) as PlacesDetailsResponse;
    // Places signals failure in the body, not the HTTP status.
    if (json.status !== "OK" || !json.result) return null;
    return json.result;
  } catch {
    return null;
  }
}

/** "Monica Ector" -> "Monica E." — the same privacy rule as the static list. */
function shortName(full: string): string {
  const parts = full.trim().split(/\s+/);
  return parts.length > 1 ? `${parts[0]} ${parts[parts.length - 1][0]}.` : parts[0];
}

function initials(name: string): string {
  return name
    .split(/\s+/)
    .map((p) => p[0])
    .join("")
    .replace(/[^A-Za-z]/g, "")
    .slice(0, 2)
    .toUpperCase();
}

/** Trims at a word boundary so a shortened review never cuts mid-word. */
function truncate(text: string): { shown: string; truncated: boolean } {
  if (text.length <= MAX_TEXT_CHARS) return { shown: text, truncated: false };
  const cut = text.slice(0, MAX_TEXT_CHARS);
  const lastSpace = cut.lastIndexOf(" ");
  return { shown: `${(lastSpace > 0 ? cut.slice(0, lastSpace) : cut).trimEnd()} …`, truncated: true };
}

/** Stars derived from a real rating value, never a hardcoded count. */
function Stars({ rating, size = "h-4 w-4" }: { rating: number; size?: string }) {
  const filled = Math.round(rating);
  return (
    <span className="flex items-center gap-0.5" role="img" aria-label={`${rating} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          className={i <= filled ? `${size} fill-amber-400 text-amber-400` : `${size} text-ink-950/20`}
          aria-hidden="true"
        />
      ))}
    </span>
  );
}

async function loadReviews(): Promise<{ rating: number; total: number; asOf?: string; reviews: FrameReview[] }> {
  const live = await fetchPlaceDetails();
  if (live && typeof live.rating === "number" && typeof live.user_ratings_total === "number" && Array.isArray(live.reviews)) {
    const reviews = live.reviews
      .filter((r) => r.text?.trim() && r.author_name?.trim() && typeof r.rating === "number")
      .slice(0, MAX_REVIEWS)
      .map((r) => {
        const { shown, truncated } = truncate(r.text!.trim());
        return { author: shortName(r.author_name!), rating: r.rating!, text: shown, moreUrl: truncated ? r.author_url ?? BUSINESS.googleListingUrl : undefined };
      });
    if (reviews.length > 0) return { rating: live.rating, total: live.user_ratings_total, reviews };
  }
  return {
    rating: REVIEW_SNAPSHOT.rating,
    total: REVIEW_SNAPSHOT.total,
    asOf: REVIEW_SNAPSHOT.asOf,
    reviews: GOOGLE_REVIEWS.slice(0, MAX_REVIEWS).map((r) => ({
      author: r.author,
      rating: r.rating,
      text: r.text,
      moreUrl: r.excerpt ? BUSINESS.googleListingUrl : undefined,
    })),
  };
}

export async function GoogleReviewsSection() {
  const { rating, total, asOf, reviews } = await loadReviews();
  const [lead, ...rest] = reviews;

  return (
    <section aria-labelledby="google-reviews-heading" className="bg-paper-50 py-16 sm:py-20">
      <Container>
        {/* The frame: a hairline outer border with an inset inner panel, so the
            reviews read as one held object rather than loose cards. */}
        <div className="rounded-[2rem] border border-ink-950/15 p-2 sm:p-3">
          <div className="rounded-[1.6rem] border border-ink-950/10 bg-white px-5 py-8 sm:px-10 sm:py-12">
            <div className="flex flex-col gap-6 border-b border-ink-950/10 pb-8 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-red-600">Google reviews</p>
                <h2 id="google-reviews-heading" className="mt-2 font-display text-3xl font-bold text-ink-950 sm:text-4xl">
                  What drivers say after we leave
                </h2>
                <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1">
                  <span className="font-display text-4xl font-bold leading-none text-ink-950">{rating.toFixed(1)}</span>
                  <Stars rating={rating} size="h-5 w-5" />
                  <span className="text-sm text-ink-600">
                    {total} Google {total === 1 ? "review" : "reviews"}
                    {asOf ? ` · as of ${asOf}` : ""}
                  </span>
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button href={BUSINESS.googleReviewUrl} size="md" icon={<PenLine className="h-4 w-4" aria-hidden="true" />}>
                  Review us on Google
                </Button>
                <Button href={BUSINESS.googleListingUrl} size="md" variant="outline" icon={<ExternalLink className="h-4 w-4" aria-hidden="true" />}>
                  Read all reviews
                </Button>
              </div>
            </div>

            <div className="mt-8 grid gap-4 lg:grid-cols-[1.25fr_1fr]">
              {lead && (
                <figure className="relative flex flex-col rounded-2xl bg-ink-950 p-6 text-white sm:p-8">
                  <Quote className="h-8 w-8 text-red-500" aria-hidden="true" />
                  <blockquote className="mt-4 flex-1 text-lg leading-relaxed text-white/90">{lead.text}</blockquote>
                  <ReviewCaption review={lead} tone="dark" />
                </figure>
              )}
              <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                {rest.map((review, i) => (
                  <li key={`${review.author}-${i}`}>
                    <figure className="flex h-full flex-col rounded-2xl border border-ink-950/10 bg-paper-50 p-5">
                      <Stars rating={review.rating} />
                      <blockquote className="mt-3 flex-1 text-[0.95rem] leading-relaxed text-ink-700">{review.text}</blockquote>
                      <ReviewCaption review={review} tone="light" />
                    </figure>
                  </li>
                ))}
              </ul>
            </div>

            {/* Attribution: the source is named and linked in both modes. */}
            <p className="mt-6 text-xs text-ink-500">
              Reviews from Google, shown with reviewers&apos; first name and last initial.{" "}
              <a href={BUSINESS.googleListingUrl} target="_blank" rel="noopener noreferrer" className="underline hover:text-ink-700">
                See every review on Google
              </a>
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

function ReviewCaption({ review, tone }: { review: FrameReview; tone: "dark" | "light" }) {
  const dark = tone === "dark";
  return (
    <figcaption className="mt-5 flex items-center gap-3">
      <span
        aria-hidden="true"
        className={`grid h-9 w-9 shrink-0 place-items-center rounded-full text-xs font-bold ${dark ? "bg-white/10 text-white" : "bg-ink-950 text-white"}`}
      >
        {initials(review.author)}
      </span>
      <span className="min-w-0">
        <span className={`block text-sm font-semibold ${dark ? "text-white" : "text-ink-950"}`}>{review.author}</span>
        <span className={`flex items-center gap-2 text-xs ${dark ? "text-white/60" : "text-ink-500"}`}>
          {dark && <Stars rating={review.rating} size="h-3.5 w-3.5" />}
          Google review
          {review.moreUrl && (
            <a href={review.moreUrl} target="_blank" rel="noopener noreferrer" className={`underline ${dark ? "hover:text-white" : "hover:text-ink-700"}`}>
              Read in full
            </a>
          )}
        </span>
      </span>
    </figcaption>
  );
}
