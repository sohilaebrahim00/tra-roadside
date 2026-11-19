/**
 * Real reviews from TRA's Google Business listing, shown in the reviews frame
 * whenever the live Places API lookup is not configured, on /reviews, and
 * beside the service each one is about.
 *
 * PROVENANCE
 * Read from the public listing (maps.app.goo.gl/jArUadnLNCMviYTTA) on
 * 2026-11-19. That day the listing showed 5.0 stars from 26 reviews, all
 * five-star. Every review with text is below except one whose wording repeats
 * another review almost word for word; three reviews have stars only.
 *
 * EDITING RULES
 *  - Text is verbatim. Where a long review is shortened, the cut is marked
 *    with an ellipsis and nothing is reworded. A customer's own typo stays.
 *  - Reviewers are shown as first name and last initial, never in full.
 *  - Never add a review that is not on the listing, and never edit one to
 *    sound better. A fabricated or altered testimonial is an FTC problem,
 *    not a copy problem.
 *  - `service` is set only when the review itself names the job.
 *  - Refresh `REVIEW_SNAPSHOT` when updating the list. The page prints the
 *    date, so a stale number never reads as current.
 *  - Nothing here goes into JSON-LD. Google's rules forbid marking up reviews
 *    collected from Google itself on the business's own site.
 */
import type { ServiceTypeSlug } from "@/lib/types/domain";

export interface StaticReview {
  author: string;
  rating: number;
  text: string;
  /** True when the text above is an excerpt of a longer review. */
  excerpt?: boolean;
  /** The service the review is about, when it names one. */
  service?: ServiceTypeSlug;
}

export const REVIEW_SNAPSHOT = { rating: 5.0, total: 26, asOf: "November 2026" } as const;

export const GOOGLE_REVIEWS: StaticReview[] = [
  {
    author: "Clara R.",
    rating: 5,
    excerpt: true,
    service: "battery-replacement",
    text: "I needed a new battery and just could not justify 1,100.00 at the Land Rover dealership! I called Texas Roadside Assistance and was SO LUCKY to have OUN come to my home! He replaced the battery and he factory reset ALL of my computer BMS reset. … So knowledgeable and so professional!!",
  },
  {
    author: "Diego T.",
    rating: 5,
    text: "I was stranded at 3am and I had no problem receiving help that late and everything was done perfect highly recommend!",
  },
  {
    author: "Hannah A.",
    rating: 5,
    text: "I was in the heat for 2 hours and the driver went and got me water from the gas station. Thank you so much guys! Really good customer service",
  },
  {
    author: "TC S.",
    rating: 5,
    text: "Great experience and service. Came out to my location within 15 minutes. OUN was the technician who came out and he was very professional, polite, and knowledgeable. Will definitely use Texas Roadside Assistance in the future. Thank you",
  },
  {
    author: "Katie L.",
    rating: 5,
    service: "flat-tire-change",
    text: "Melissa was wonderful. It was very late at night and my friend had a flat. Gave an ETA, came quick and got it changed for her",
  },
  {
    author: "Monica E.",
    rating: 5,
    text: "Oun was awesome. Was given a arrival time of 4pm but called and arrived less than 20 minutes later. He was very friendly and completed the assignment in very little time. Was very helpful in reminding me to drive about 30 minutes, to assure my car didn't stop again.",
  },
  {
    author: "Briana A.",
    rating: 5,
    excerpt: true,
    service: "flat-tire-change",
    text: "I recently experienced a flat tire and needed roadside assistance. … the employee who arrived, Mario, completely turned my experience around! He was extremely kind, professional, well-spoken, and came prepared to help. … Mario demonstrated exceptional customer service from beginning to end.",
  },
  {
    author: "Marina G.",
    rating: 5,
    service: "lockout",
    text: "Super service! Friendly. Fast. Helpful. Great resource to SAVE! Thank you for helping me with my.locked car, in the crazy heat.",
  },
  {
    author: "Madison R.",
    rating: 5,
    service: "tire-repair-plug-patch",
    text: "Really nice guy. So helpful. Fix my tire without having to put on my spare",
  },
  {
    author: "Mohammad J.",
    rating: 5,
    excerpt: true,
    text: "Absolutely outstanding service! Texas Roadside Assistance LLC went above and beyond from start to finish. They were extremely professional, responsive, knowledgeable, and arrived exactly when I needed them. The entire process was smooth, fast, and stress-free. …",
  },
  {
    author: "Zainah A.",
    rating: 5,
    service: "flat-tire-change",
    text: "He was really nice and helpful. Got my tire changed quickly and made everything super easy. I really appreciate the help!",
  },
  {
    author: "Jae'",
    rating: 5,
    text: "Very good service reasonable price. And the young lady was A1 Customer Service.. Very kind people. Tech Was Fantastic 😊",
  },
  {
    author: "Yosselin A.",
    rating: 5,
    service: "battery-replacement",
    text: "Oun was very kind and professional regarding the battery replacement.",
  },
  {
    author: "Usif A.",
    rating: 5,
    service: "flat-tire-change",
    text: "Oun was Very respectful helped me with my tire and he was very professional and he got me out of there fast, I will use him again thank you!",
  },
  {
    author: "Rosanne A.",
    rating: 5,
    service: "flat-tire-change",
    text: "Very great guy he helped me with my tire and was very kind! I absolutely recommend him. Thank you for your good service",
  },
  {
    author: "Gaby P.",
    rating: 5,
    text: "great guy and fast work- really pulled me out of a bind and made it super easy! thanks so much",
  },
  {
    author: "LaTanya R.",
    rating: 5,
    text: "Melissa was friendly and gave great service. She went beyond and above her call of duty.",
  },
  {
    author: "Megan K.",
    rating: 5,
    text: "Oun was professional, fast, and so lovely! I would absolutely call him again!",
  },
  {
    author: "Megan W.",
    rating: 5,
    text: "Daniel was very helpful and efficient!",
  },
  {
    author: "Grei M.",
    rating: 5,
    text: "Fast and extremely affordable!",
  },
  {
    author: "Remoon E.",
    rating: 5,
    text: "The best of the best The service that I can really trust Go for it",
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

/** Reviews that name this service, in list order. */
export function reviewsFor(service: string): StaticReview[] {
  return GOOGLE_REVIEWS.filter((r) => r.service === service);
}
