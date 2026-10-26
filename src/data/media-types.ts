/**
 * Shared types for the media registry. `scripts/organize-media.mjs` writes
 * `generated-media.json` in this shape; `media-registry.ts` reads it back
 * typed and merges in developer overrides. Nothing in the app should import
 * from `generated-media.json` directly — always go through
 * `media-registry.ts` so fallback/empty-state handling stays centralized.
 */

export const VIDEO_CATEGORIES = [
  "hero",
  "service",
  "background",
  "scroll",
  "letter",
  "gallery",
  "tracking",
  "about",
  "mobile",
  "unassigned",
] as const;
export type VideoCategory = (typeof VIDEO_CATEGORIES)[number];

/** Filename prefix -> category, and category -> destination folder under public/media/videos/. */
export const CATEGORY_PREFIXES: Record<Exclude<VideoCategory, "unassigned">, string> = {
  hero: "hero-",
  service: "service-",
  background: "background-",
  scroll: "scroll-",
  letter: "letter-",
  gallery: "gallery-",
  tracking: "tracking-",
  about: "about-",
  mobile: "mobile-",
};

export const CATEGORY_FOLDERS: Record<VideoCategory, string> = {
  hero: "hero",
  service: "services",
  background: "backgrounds",
  scroll: "scroll-reveals",
  letter: "letter-masks",
  gallery: "gallery",
  tracking: "tracking",
  about: "about",
  mobile: "mobile",
  unassigned: "unassigned",
};

export const VIDEO_PLACEMENTS = [
  "home-hero-background",
  "home-letter-mask",
  "home-circular-reveal",
  "home-service-highlight",
  "home-tracking-preview",
  "home-gallery-preview",
  "services-header",
  "service-card-preview",
  "service-detail-hero",
  "service-detail-clip",
  "how-it-works-reveal",
  "about-story",
  "tracking-info",
  "gallery-item",
  "unplaced",
] as const;
export type VideoPlacement = (typeof VIDEO_PLACEMENTS)[number];

export interface GeneratedVideoItem {
  id: string;
  /** Original filename as dropped into media-source/, kept so re-running the organizer recognizes the same source across renames. */
  sourceFilename: string;
  /** Content fingerprint (hash of first 64KB + size) used to detect duplicate drops and to carry forward manual overrides across re-runs. */
  fingerprint?: string;
  /** Public path, e.g. "/media/videos/hero/hero-night-road.mp4" */
  source: string;
  mobileSource?: string;
  poster?: string;
  title: string;
  altText: string;
  category: VideoCategory;
  placement: VideoPlacement;
  /** For category "service" — ties a clip to a specific service slug (e.g. "jump-start") without touching component code. */
  serviceSlug?: string;
  priority: number;
  durationSeconds?: number;
  aspectRatio?: string;
  width?: number;
  height?: number;
  autoplay: boolean;
  muted: boolean;
  loop: boolean;
  playsInline: boolean;
  objectPosition: string;
  enabled: boolean;
  fallbackImage?: string;
  /** Optimized desktop file size in bytes (published output, not the raw source). */
  sizeBytes: number;
  /** Optimized mobile file size in bytes, when a mobileSource exists. */
  mobileSizeBytes?: number;
  /** Size of the raw file in media-source/ before compression — for the before/after report only, never used at runtime. */
  originalSizeBytes?: number;
  format: "mp4" | "webm" | "mov";
  warnings: string[];
  registeredAt: string;
}

export interface GeneratedMediaManifest {
  generatedAt: string;
  videos: GeneratedVideoItem[];
}
