/**
 * Real reviews from TRA's Google Business listing, shown in the reviews frame
 * whenever the live Places API lookup is not configured.
 *
 * PROVENANCE
 * Read from the public listing (maps.app.goo.gl/jArUadnLNCMviYTTA) on
 * 2026-10-18. That day the listing showed 5.0 stars from 20 reviews, all
 * five-star. Signed-out visitors can only see the five most relevant reviews,
 * and those five are the ones below.
 *
 * EDITING RULES
 *  - Text is verbatim. Where a long review is shortened, the cut is marked
 *    with an ellipsis and nothing is reworded. A customer's own typo stays.
 *  - Reviewers are shown as first name and last initial, never in full.
 *  - Never add a review that is not on the listing, and never edit one to
 *    sound better. A fabricated or altered testimonial is an FTC problem,
 *    not a copy problem.
 *  - Refresh `REVIEW_SNAPSHOT` when updating the list. The page prints the
 *    date, so a stale number never reads as current.
 *  - Nothing here goes into JSON-LD. Google's rules forbid marking up reviews
 *    collected from Google itself on the business's own site.
 */

export interface StaticReview {
  author: string;
  rating: number;
  text: string;
  /** True when the text above is an excerpt of a longer review. */
  excerpt?: boolean;
  /** The service the review is about, when it names one. */
  service?: "battery-replacement";
}

export const REVIEW_SNAPSHOT = { rating: 5.0, total: 20, asOf: "October 2026" } as const;

export const GOOGLE_REVIEWS: StaticReview[] = [
  {
    author: "Mohammad J.",
    rating: 5,
    excerpt: true,
    text: "Absolutely outstanding service! Texas Roadside Assistance LLC went above and beyond from start to finish. They were extremely professional, responsive, knowledgeable, and arrived exactly when I needed them. … They explained everything clearly, treated my vehicle with great care, and made sure everything was completely taken care of before leaving.",
  },
  {
    author: "Monica E.",
    rating: 5,
    text: "Oun was awesome. Was given a arrival time of 4pm but called and arrived less than 20 minutes later. He was very friendly and completed the assignment in very little time. Was very helpful in reminding me to drive about 30 minutes, to assure my car didn't stop again. Would absolutely use his service again, if needed.",
  },
  {
    author: "Yosselin A.",
    rating: 5,
    service: "battery-replacement",
    text: "Oun was very kind and professional regarding the battery replacement.",
  },
  {
    author: "Megan K.",
    rating: 5,
    text: "Oun was professional, fast, and so lovely! I would absolutely call him again!",
  },
  {
    author: "Noor A.",
    rating: 5,
    text: "Great service! Highly recommend.",
  },
];

/** The review that names battery replacement, for the battery sections. */
export function batteryReview(): StaticReview | undefined {
  return GOOGLE_REVIEWS.find((r) => r.service === "battery-replacement");
}
