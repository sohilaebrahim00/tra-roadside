/**
 * Tiny module-level coordinator so at most one in-view/hover preview video
 * plays at a time (touch devices especially — "only one card video may play
 * at a time" / pause others). Not React state on purpose: video play/pause
 * is imperative and doesn't need to trigger renders.
 */
let activeVideo: HTMLVideoElement | null = null;

export function requestPlayback(video: HTMLVideoElement) {
  if (activeVideo && activeVideo !== video) {
    activeVideo.pause();
  }
  activeVideo = video;
  video.play().catch(() => {
    // Autoplay can be rejected by the browser (e.g. no user gesture yet) — safe to ignore, poster stays visible.
  });
}

export function releasePlayback(video: HTMLVideoElement) {
  video.pause();
  if (activeVideo === video) activeVideo = null;
}
