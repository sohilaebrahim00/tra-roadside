// Minimal offline-fallback service worker. Only handles navigation
// requests — it does not cache or intercept API calls, images, or other
// assets, so it can't accidentally serve stale data for the request/tracking
// flows.
const OFFLINE_URL = "/offline";
const CACHE_NAME = "tra-shell-v1";

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.add(OFFLINE_URL)));
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener("fetch", (event) => {
  if (event.request.mode !== "navigate") return;

  event.respondWith(
    fetch(event.request).catch(() => caches.match(OFFLINE_URL))
  );
});
