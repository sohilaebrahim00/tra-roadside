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
        return { author: shortName(r.author_name!), rating: r.rating!, text: shown, moreUrl: truncated || shown.length > 220 ? r.author_url ?? BUSINESS.googleListingUrl : undefined };
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
      // Long reviews are clamped in the card, so they get the link too.
      moreUrl: r.excerpt || r.text.length > 220 ? BUSINESS.googleListingUrl : undefined,
    })),
  };
}

/** Muted, distinct initials-badge colors, picked by name so a reviewer keeps theirs. */
const BADGE_COLORS = ["#b91c1c", "#0a0a0b", "#b45309", "#166534", "#1e3a8a", "#6b21a8"];
function badgeColor(name: string): string {
  let h = 0;
  for (const ch of name) h = (h * 31 + ch.charCodeAt(0)) >>> 0;
  return BADGE_COLORS[h % BADGE_COLORS.length];
}

export async function GoogleReviewsSection() {
  const { rating, total, asOf, reviews } = await loadReviews();

  return (
    <section aria-labelledby="google-reviews-heading" className="border-y border-ink-950/8 bg-white py-12 sm:py-20">
      <Container>
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-red-600">Google reviews</p>
            <h2 id="google-reviews-heading" className="mt-2 font-display text-[1.6rem] font-semibold uppercase leading-tight tracking-tight text-ink-950 sm:text-4xl">
              What drivers say about us
            </h2>
          </div>

          {/* Rating summary: one compact, framed line. */}
          <div className="flex items-center gap-4 rounded-2xl border border-ink-950/10 bg-paper-50 px-4 py-3 sm:px-5">
            <span className="font-display text-4xl font-bold leading-none text-ink-950">{rating.toFixed(1)}</span>
            <span className="min-w-0">
              <Stars rating={rating} size="h-[1.1rem] w-[1.1rem]" />
              <span className="mt-1 block text-xs text-ink-600">
                {total} {total === 1 ? "review" : "reviews"} on Google{asOf ? ` · ${asOf}` : ""}
              </span>
            </span>
          </div>
        </div>

        {/*
          Phones: one swipeable row, each card 85% wide so the next one peeks
          in and says "swipe". From sm up, a plain grid. Cards share a height
          and the quote is clamped, so a long review cannot make the row ragged;
          the full text is one tap away on Google.
        */}
        <ul className="-mx-4 mt-6 flex snap-x snap-mandatory gap-3 overflow-x-auto px-4 pb-3 [scrollbar-width:none] sm:mx-0 sm:mt-8 sm:grid sm:grid-cols-2 sm:gap-4 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-3">
          {reviews.map((review, i) => (
            <li key={`${review.author}-${i}`} className="w-[85%] shrink-0 snap-start sm:w-auto">
              <figure className="flex h-full flex-col rounded-2xl border border-ink-950/10 bg-white p-5 shadow-[0_1px_3px_rgba(10,10,11,0.06)]">
                <div className="flex items-center justify-between gap-3">
                  <Stars rating={review.rating} />
                  <Quote className="h-5 w-5 text-ink-950/15" aria-hidden="true" />
                </div>
                <blockquote className="mt-3 line-clamp-6 flex-1 text-[0.95rem] leading-relaxed text-ink-700">{review.text}</blockquote>
                <ReviewCaption review={review} />
              </figure>
            </li>
          ))}
          {/* The last tile asks for a review. With five reviews it fills the
              sixth slot of both grids, and on phones it ends the swipe row. */}
          <li className="w-[85%] shrink-0 snap-start sm:w-auto">
            <div className="flex h-full flex-col items-start justify-center rounded-2xl border border-dashed border-ink-950/20 bg-paper-50 p-5">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-red-600/10 text-red-600">
                <PenLine className="h-5 w-5" aria-hidden="true" />
              </span>
              <p className="mt-4 font-display text-lg font-semibold uppercase leading-tight text-ink-950">
                Had help from TRA?
              </p>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-600">
                Tell other Dallas–Fort Worth drivers how it went. Your review goes straight to our
                Google listing.
              </p>
              <Button href={BUSINESS.googleReviewUrl} size="sm" className="mt-4" icon={<PenLine className="h-4 w-4" aria-hidden="true" />}>
                Write a review
              </Button>
            </div>
          </li>
        </ul>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          {/* Attribution: the source is named and linked in both modes. */}
          <p className="text-xs text-ink-500">
            Real reviews from our Google listing, shown with first name and last initial.
          </p>
          <div className="flex flex-wrap gap-2.5">
            {/* Phones keep this button in view; from sm up the review tile
                in the grid carries it. */}
            <Button href={BUSINESS.googleReviewUrl} size="sm" className="sm:hidden" icon={<PenLine className="h-4 w-4" aria-hidden="true" />}>
              Write a review
            </Button>
            <Button href={BUSINESS.googleListingUrl} size="sm" variant="outline" icon={<ExternalLink className="h-4 w-4" aria-hidden="true" />}>
              See all on Google
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

function ReviewCaption({ review }: { review: FrameReview }) {
  return (
    <figcaption className="mt-4 flex items-center gap-3 border-t border-ink-950/8 pt-4">
      <span
        aria-hidden="true"
        className="grid h-9 w-9 shrink-0 place-items-center rounded-full text-xs font-bold text-white"
        style={{ backgroundColor: badgeColor(review.author) }}
      >
        {initials(review.author)}
      </span>
      <span className="min-w-0">
        <span className="block text-sm font-semibold text-ink-950">{review.author}</span>
        <span className="flex items-center gap-2 text-xs text-ink-500">
          Google review
          {review.moreUrl && (
            <a href={review.moreUrl} target="_blank" rel="noopener noreferrer" className="font-medium text-red-600 underline-offset-2 hover:underline">
              Read in full
            </a>
          )}
        </span>
      </span>
    </figcaption>
  );
}
