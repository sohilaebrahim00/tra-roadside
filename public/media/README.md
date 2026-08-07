# Media folders

See **`MEDIA_GUIDE.md`** in the project root for the full workflow (naming
convention, how to run the organizer, how to reassign/disable a video).

Quick version: drop new video files into `incoming/`, then run
`npm run media:organize` from the project root. Images (below) are still
placed by hand — there's no organizer for stills yet.

- `images/hero/` — homepage hero background stills (fallback if no hero video)
- `images/services/` — per-service illustrative photos (jump start, tire change, etc.)
- `images/gallery/` — completed real jobs, shown on the public Gallery page
- `images/team/` — real employee headshots only — never an AI-generated face
- `images/vehicles/` — tow trucks / service vehicles
- `images/backgrounds/` — still-image section backgrounds
- `images/placeholders/` — neutral, clearly-labeled placeholders ONLY (no fake
  jobs or people); used sparingly and never presented as real completed work
- `videos/` — organized automatically by category (hero, services,
  backgrounds, scroll-reveals, letter-masks, gallery, tracking, about,
  mobile, unassigned)
- `videos/posters/` — poster frames (added by hand — see MEDIA_GUIDE.md §5)
- `incoming/` — drop raw video files here, then run `npm run media:organize`
- `brand/` — official logo source files (SVG/PNG), if supplied
