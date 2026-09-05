import { Star, ExternalLink, PenLine } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { BUSINESS } from "@/lib/content/business";
import { env } from "@/lib/env";

/**
 * Real Google reviews, or nothing at all.
 *
 * Every string a visitor reads in this section comes from the Places API
 * response. There is no sample review, no placeholder author, no fallback
 * rating and no "coming soon" empty state anywhere in this file — a
 * fabricated testimonial on a live business site is a legal problem, not a
 * copy problem. If the data cannot be fetched, or comes back empty, the
 * component returns null and the page closes over the gap.
 *
 * Server component: the Places lookup uses GOOGLE_MAPS_SERVER_API_KEY, which
 * must never reach the browser. The NEXT_PUBLIC maps key is referrer-restricted
 * for the map widget and is not used here.
 *
 * No aggregateRating is emitted into JSON-LD from this data. Google's
 * structured data policy forbids marking up review data collected from Google
 * itself, so this is display-only.
 */

interface PlacesReview {
  author_name?: string;
  author_url?: string;
  profile_photo_url?: string;
  rating?: number;
  relative_time_description?: string;
  text?: string;
}

interface PlacesDetailsResponse {
  status?: string;
  result?: {
    rating?: number;
    user_ratings_total?: number;
    reviews?: PlacesReview[];
  };
}

const MAX_REVIEWS = 3;
const MAX_TEXT_CHARS = 240;
const REVALIDATE_SECONDS = 86_400; // once a day; reviews do not move fast

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
    // Places signals failure in the body, not the HTTP status — a bad place ID
    // or an unauthorised key still returns 200.
    if (json.status !== "OK" || !json.result) return null;
    return json.result;
  } catch {
    return null;
  }
}

/** Trims at a word boundary so a truncated review never cuts mid-word. */
function truncate(text: string): { shown: string; truncated: boolean } {
  if (text.length <= MAX_TEXT_CHARS) return { shown: text, truncated: false };
  const cut = text.slice(0, MAX_TEXT_CHARS);
  const lastSpace = cut.lastIndexOf(" ");
  return { shown: (lastSpace > 0 ? cut.slice(0, lastSpace) : cut).trimEnd(), truncated: true };
}

/** Stars derived from a real rating value — never a hardcoded count. */
function Stars({ rating, label }: { rating: number; label: string }) {
  const filled = Math.round(rating);
  return (
    <span className="flex items-center gap-0.5" role="img" aria-label={label}>
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          className={i <= filled ? "h-4 w-4 fill-amber-400 text-amber-400" : "h-4 w-4 text-ink-950/20 dark:text-white/20"}
          aria-hidden="true"
        />
      ))}
    </span>
  );
}

export async function GoogleReviewsSection() {
  const result = await fetchPlaceDetails();
  if (!result) return null;

  const { rating, user_ratings_total: total, reviews } = result;

  // Every one of these must be real for the section to appear. A rating with
  // no reviews, or reviews with no rating, is not something to paper over.
  if (typeof rating !== "number" || typeof total !== "number" || total <= 0) return null;
  if (!Array.isArray(reviews)) return null;

  const usable = reviews
    .filter((r) => r.text?.trim() && r.author_name?.trim() && typeof r.rating === "number")
    .slice(0, MAX_REVIEWS);
  if (usable.length === 0) return null;

  return (
    <section className="border-t border-ink-950/8 bg-paper-50 py-16 sm:py-20 dark:border-white/10 dark:bg-white/5">
      <Container>
        <div className="flex flex-col items-center gap-3 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-red-600">Reviews</p>
          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1">
            <span className="font-display text-4xl font-bold text-ink-950 dark:text-white">{rating}</span>
            <Stars rating={rating} label={`${rating} out of 5 stars`} />
          </div>
          <p className="text-sm text-ink-600 dark:text-ink-200">
            Based on {total} Google {total === 1 ? "review" : "reviews"}
          </p>
        </div>

        <ul className="mt-10 grid gap-4 md:grid-cols-3">
          {usable.map((review, i) => {
            const { shown, truncated } = truncate(review.text!.trim());
            return (
              <li
                key={`${review.author_name}-${i}`}
                className="flex flex-col rounded-2xl border border-ink-950/8 bg-white p-5 dark:border-white/10 dark:bg-ink-900"
              >
                <div className="flex items-center gap-3">
                  {review.profile_photo_url && (
                    /* Google's own hosted avatar, referenced directly. next/image
                       is deliberately NOT used: it would fetch and re-encode the
                       file through /_next/image, which is re-hosting Google's
                       asset — exactly what the Places terms do not permit. */
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={review.profile_photo_url}
                      alt=""
                      width={36}
                      height={36}
                      loading="lazy"
                      referrerPolicy="no-referrer"
                      className="h-9 w-9 shrink-0 rounded-full object-cover"
                    />
                  )}
                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold text-ink-950 dark:text-white">{review.author_name}</p>
                    {review.relative_time_description && (
                      <p className="text-xs text-ink-500 dark:text-ink-300">{review.relative_time_description}</p>
                    )}
                  </div>
                </div>

                <div className="mt-3">
                  <Stars rating={review.rating!} label={`${review.rating} out of 5 stars`} />
                </div>

                <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-600 dark:text-ink-200">
                  {shown}
                  {truncated && "…"}
                </p>

                {truncated && (
                  <a
                    href={review.author_url ?? BUSINESS.googleListingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-red-600 hover:text-red-700"
                  >
                    Read on Google <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                  </a>
                )}
              </li>
            );
          })}
        </ul>

        <div className="mt-10 flex flex-col items-center gap-4">
          <Button
            href={BUSINESS.googleReviewUrl}
            size="lg"
            icon={<PenLine className="h-4 w-4" aria-hidden="true" />}
          >
            Review us on Google
          </Button>
          {/* Attribution required by the Places API terms of service. */}
          <p className="text-xs text-ink-500 dark:text-ink-300">
            Reviews from Google.{" "}
            <a
              href={BUSINESS.googleListingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-ink-700 dark:hover:text-white"
            >
              See all reviews on Google
            </a>
          </p>
        </div>
      </Container>
    </section>
  );
}
