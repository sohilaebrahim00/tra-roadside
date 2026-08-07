# Media Placement Report

Generated 2026-08-03T03:06:28.648Z by `scripts/organize-media.mjs`. Do not hand-edit — re-run `npm run media:organize` after adding/removing files in `media-source/`.

## Defined placements

| Placement | Page | Section | Playback behavior | Filled by | Mobile fallback | Status |
|---|---|---|---|---|---|---|
| home-hero-background | Home | Hero | Autoplay, muted, loop, playsInline — fades in behind headline | hero-test-clip-1.mp4 | Dedicated mobile source | Active |
| home-letter-mask | Home | Signature video-mask typography | Autoplay within letter mask only, paused off-screen | — | Branded static fallback (MediaFallback) | Empty — showing fallback |
| home-circular-reveal | Home | Circular scroll-reveal (Services → How It Works) | Plays once visible, expands with scroll via clip-path | background-test-clip-1.mp4 | Dedicated mobile source | Active |
| home-service-highlight | Home | Services | Poster by default, hover/in-view preview | — | Branded static fallback (MediaFallback) | Empty — showing fallback |
| home-tracking-preview | Home | Live tracking preview | Optional supporting clip only — real map/data is never replaced by video | — | Branded static fallback (MediaFallback) | Empty — showing fallback |
| home-gallery-preview | Home | Gallery preview | Poster card, opens lightbox on click | — | Branded static fallback (MediaFallback) | Empty — showing fallback |
| services-header | Services | Page header | Autoplay, muted, loop background | — | Branded static fallback (MediaFallback) | Empty — showing fallback |
| service-card-preview | Services | Service cards | Poster by default; hover (desktop) or in-view (mobile) preview, one at a time | service-test-clip.mp4 | Dedicated mobile source | Active |
| service-detail-hero | Service detail | Hero | Autoplay, muted, loop background | — | Branded static fallback (MediaFallback) | Empty — showing fallback |
| service-detail-clip | Service detail | Supporting clip | Click-to-play in lightbox | — | Branded static fallback (MediaFallback) | Empty — showing fallback |
| how-it-works-reveal | How It Works | Circular reveal step | Plays once step is active, does not block readability | — | Branded static fallback (MediaFallback) | Empty — showing fallback |
| about-story | About | Team / vehicles / operations | Click-to-play in lightbox | — | Branded static fallback (MediaFallback) | Empty — showing fallback |
| tracking-info | Track | Informational panel (never replaces the live map) | Click-to-play, muted | — | Branded static fallback (MediaFallback) | Empty — showing fallback |
| gallery-item | Gallery / Videos | Grid | Poster card, lightbox on click | — | Branded static fallback (MediaFallback) | Empty — showing fallback |

## Unused / unplaced media

| File | Category | Published source | Notes |
|---|---|---|---|
| oha-2.mp4 | unassigned | /media/videos/unassigned/oha-2.mp4 | No recognized filename prefix (hero-, service-, background-, scroll-, letter-, gallery-, tracking-, about-, mobile-) — categorized as "unassigned" and placement left unset. Rename the file in media-source/ or edit its entry in src/data/generated-media.json directly to assign a category/placement. |
| oha-3.mp4 | unassigned | /media/videos/unassigned/oha-3.mp4 | No recognized filename prefix (hero-, service-, background-, scroll-, letter-, gallery-, tracking-, about-, mobile-) — categorized as "unassigned" and placement left unset. Rename the file in media-source/ or edit its entry in src/data/generated-media.json directly to assign a category/placement. |
| oha-4.mp4 | unassigned | /media/videos/unassigned/oha-4.mp4 | No recognized filename prefix (hero-, service-, background-, scroll-, letter-, gallery-, tracking-, about-, mobile-) — categorized as "unassigned" and placement left unset. Rename the file in media-source/ or edit its entry in src/data/generated-media.json directly to assign a category/placement. |

## All registered videos (original → optimized)

| ID | Original file | Original size | Optimized file | Optimized size | Mobile size | Duration | Resolution | Placement | Enabled | Warnings |
|---|---|---|---|---|---|---|---|---|---|---|
| background-background-test-clip-1 | background-test-clip-1.mp4 | 55.4MB | background-test-clip-1.mp4 | 1.8MB | 1.3MB | 8.0s | 1280x720 | home-circular-reveal | yes | — |
| hero-hero-test-clip-1 | hero-test-clip-1.mp4 | 37.0MB | hero-test-clip-1.mp4 | 2.7MB | 1.9MB | 10.0s | 1280x720 | home-hero-background | yes | — |
| unassigned-oha-2 | oha-2.mp4 | 29.8MB | oha-2.mp4 | 1.2MB | 1.1MB | 10.0s | 1280x720 | unplaced | yes | No recognized filename prefix (hero-, service-, background-, scroll-, letter-, gallery-, tracking-, about-, mobile-) — categorized as "unassigned" and placement left unset. Rename the file in media-source/ or edit its entry in src/data/generated-media.json directly to assign a category/placement. |
| unassigned-oha-3 | oha-3.mp4 | 18.6MB | oha-3.mp4 | 868KB | 963KB | 10.0s | 1280x720 | unplaced | yes | No recognized filename prefix (hero-, service-, background-, scroll-, letter-, gallery-, tracking-, about-, mobile-) — categorized as "unassigned" and placement left unset. Rename the file in media-source/ or edit its entry in src/data/generated-media.json directly to assign a category/placement. |
| unassigned-oha-4 | oha-4.mp4 | 43.7MB | oha-4.mp4 | 1.5MB | 1.5MB | 10.0s | 1280x720 | unplaced | yes | No recognized filename prefix (hero-, service-, background-, scroll-, letter-, gallery-, tracking-, about-, mobile-) — categorized as "unassigned" and placement left unset. Rename the file in media-source/ or edit its entry in src/data/generated-media.json directly to assign a category/placement. |
| service-service-test-clip | service-test-clip.mp4 | 58.3MB | service-test-clip.mp4 | 696KB | 662KB | 8.0s | 960x720 | service-card-preview | yes | — |
