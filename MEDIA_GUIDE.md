# TRA Media Guide

How to add real video/photo to the site without touching any page code.

## 1. Where to drop new videos

Put raw video files here:

```
public/media/incoming/
```

That's the only folder you need to know about for new footage. Everything
else is organized automatically.

## 2. Naming convention

Name each file with one of these prefixes so it's categorized correctly:

| Prefix | Category | Goes to | Used for |
|---|---|---|---|
| `hero-` | hero | `public/media/videos/hero/` | Homepage hero background |
| `service-` | service | `public/media/videos/services/` | Service cards / service detail pages |
| `background-` | background | `public/media/videos/backgrounds/` | Section background loops |
| `scroll-` | scroll | `public/media/videos/scroll-reveals/` | Circular scroll-reveal section |
| `letter-` | letter | `public/media/videos/letter-masks/` | Signature video-mask typography |
| `gallery-` | gallery | `public/media/videos/gallery/` | Gallery / Videos pages |
| `tracking-` | tracking | `public/media/videos/tracking/` | Tracking page informational clip |
| `about-` | about | `public/media/videos/about/` | About page |
| `mobile-` | mobile | `public/media/videos/mobile/` | Dedicated mobile-cropped source |

Examples:

```
hero-night-road.mp4
service-flat-tire.mp4
service-jump-start.mp4
background-highway.mp4
scroll-service-truck.mp4
letter-tire-repair.mp4
gallery-night-assistance.mp4
tracking-driver-road.mp4
about-tra-team.mp4
mobile-emergency-response.mp4
```

No recognized prefix? The file still gets organized — into
`public/media/videos/unassigned/`, registered with `category: "unassigned"`
and `placement: "unplaced"` — and it's called out clearly in the console
output and in `docs/MEDIA_PLACEMENT_REPORT.md` so it's never silently
dropped. Assign it a real placement by editing its entry in
`src/data/generated-media.json` (see §5).

## 3. Running the organizer

```bash
npm run media:scan       # dry run — see what WOULD happen, no files touched
npm run media:organize   # actually move files + (re)write the manifest
```

`media:organize`:
1. Reads every file in `public/media/incoming/`.
2. Validates the extension (`.mp4`, `.webm` supported directly; `.mov` is
   accepted but flagged — convert it to MP4/H.264 or WebM for broad browser
   support).
3. Detects the category from the filename prefix.
4. Generates a clean, URL-safe filename and moves the file into the correct
   `public/media/videos/<category>/` folder.
5. Extracts what metadata it can (file size always; duration + resolution
   for MP4 via a lightweight built-in parser — not available for
   WebM/MOV, verify those manually).
6. Registers the file in `src/data/generated-media.json`.
7. Regenerates `docs/MEDIA_PLACEMENT_REPORT.md`.
8. Prints a summary with any warnings.

Re-running the organizer is always safe — it never deletes your original
files, never overwrites an existing destination file with different content
(it renames the incoming copy instead and warns you), and it recognizes
files it already registered (by content fingerprint) so nothing gets
registered twice.

## 4. Seeing what's in use

After running the organizer, open:

```
docs/MEDIA_PLACEMENT_REPORT.md
```

It lists every defined placement (page + section + expected playback
behavior), which video (if any) currently fills it, and which registered
videos aren't assigned anywhere yet.

## 5. Replacing, disabling, or re-assigning a video

Everything is controlled from `src/data/generated-media.json` — you can
hand-edit it directly (re-running the organizer preserves your edits for any
file it recognizes as already-registered):

- **Replace**: drop a new file in `incoming/` with the same prefix, run
  `npm run media:organize`, then update the relevant entry's `placement` to
  point at it (or set the old one's `"enabled": false`).
- **Disable a video**: set `"enabled": false` on its entry. It stops
  rendering anywhere immediately; the branded fallback takes its place.
- **Assign to a specific page/section**: set `"placement"` to one of the
  values in `src/data/media-types.ts` (`VIDEO_PLACEMENTS`), e.g.
  `"home-hero-background"`, `"service-card-preview"`.
- **Assign a service video to one specific service**: set `"serviceSlug"`
  (e.g. `"towing"`) on a `category: "service"` entry.
- **Give something a mobile-specific source**: set `"mobileSource"` to the
  path of a portrait/cropped version (usually one you named with the
  `mobile-` prefix and organized separately, then referenced here).
- **Add a poster**: the organizer cannot generate poster frames
  automatically (no ffmpeg dependency by design). Export a frame yourself,
  drop it in `public/media/videos/posters/`, and set `"poster"` to its path.
  Until you do, a branded fallback graphic is used instead of a blank frame.

## 6. Recommended specs

**Hero loop**
- 6–12 seconds, muted, H.264 MP4
- Target ≤ ~5–8MB
- 1920×1080 desktop; optional 720×1280 portrait `mobile-` source

**Section clips** (service, background, scroll, letter, tracking, about)
- 4–10 seconds
- Target ≤ ~3–5MB

**Gallery / Videos page clips**
- No hard duration limit (these are click-to-play, not autoplay) — keep the
  file reasonably sized for a fast download regardless.

Don't over-compress to hit these numbers — visibly damaged footage is worse
than a slightly larger file. Use them as a target, not a hard wall.

## 7. Warnings you'll see, and what they mean

The organizer (and this guide) call out:

- **Large file** — over ~15MB. Compress before shipping to production;
  large autoplay video on mobile data is exactly what the performance rules
  in this project forbid.
- **Long duration** — hero/section clips over ~20s. Trim it — long loops
  cost more to download and don't read as "cinematic," they read as slow.
- **No poster set** — until you add one, visitors see the branded fallback
  instead of a black rectangle. Not broken, just not final.
- **MOV source** — convert before production; MOV/HEVC support is
  inconsistent across browsers.
- **Unknown duration/resolution** — the built-in parser only reads MP4.
  Verify WebM/MOV specs yourself.
- **No recognized prefix** — the file still gets organized (into
  "unassigned"), but nothing on the site will show it until you set a
  `placement` by hand.

## 8. What ships today with zero video files

Every placement gracefully falls back to a branded static state (dark
gradient + subtle road texture) — never a broken `<video>` tag, never a
blank black rectangle. The "no video registered" label is dev-only
(`NODE_ENV=development`); production visitors only ever see the polished
fallback.
