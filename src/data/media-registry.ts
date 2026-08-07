import { GENERATED_MEDIA } from "./generated-media";
import type { GeneratedVideoItem, VideoCategory, VideoPlacement } from "./media-types";

/**
 * Consumption-facing API for registered media. Components never read
 * generated-media.json directly — everything goes through here so the
 * "no video registered yet" / "video disabled" fallback behavior lives in
 * one place.
 */

function allEnabled(): GeneratedVideoItem[] {
  return GENERATED_MEDIA.videos.filter((v) => v.enabled);
}

/** Highest-priority enabled video registered for a placement, or null if none exists yet. */
export function getVideoForPlacement(placement: VideoPlacement): GeneratedVideoItem | null {
  const matches = allEnabled()
    .filter((v) => v.placement === placement)
    .sort((a, b) => b.priority - a.priority);
  return matches[0] ?? null;
}

export function getVideosForPlacement(placement: VideoPlacement): GeneratedVideoItem[] {
  return allEnabled()
    .filter((v) => v.placement === placement)
    .sort((a, b) => b.priority - a.priority);
}

export function getVideosByCategory(category: VideoCategory): GeneratedVideoItem[] {
  return allEnabled()
    .filter((v) => v.category === category)
    .sort((a, b) => b.priority - a.priority);
}

export function getAllEnabledVideos(): GeneratedVideoItem[] {
  return allEnabled();
}

export function getUnplacedVideos(): GeneratedVideoItem[] {
  return GENERATED_MEDIA.videos.filter((v) => v.placement === "unplaced" || v.category === "unassigned");
}

/** A service-category video assigned to a specific service via `serviceSlug` in the registry. */
export function getServiceVideo(slug: string): GeneratedVideoItem | null {
  return (
    getVideosByCategory("service")
      .filter((v) => v.serviceSlug === slug)
      .sort((a, b) => b.priority - a.priority)[0] ?? null
  );
}
