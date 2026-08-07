let loadPromise: Promise<typeof google | null> | null = null;

/**
 * Minimal script-tag loader for the Google Maps JavaScript API (places
 * library included). Returns null when no public API key is configured so
 * callers can fall back to the manual-entry UI instead of throwing.
 */
export function loadGoogleMaps(apiKey: string): Promise<typeof google | null> {
  if (!apiKey) return Promise.resolve(null);
  if (typeof window === "undefined") return Promise.resolve(null);
  if (window.google?.maps) return Promise.resolve(window.google);

  if (loadPromise) return loadPromise;

  loadPromise = new Promise((resolve) => {
    const existing = document.getElementById("google-maps-script");
    if (existing) {
      existing.addEventListener("load", () => resolve(window.google ?? null));
      return;
    }

    const script = document.createElement("script");
    script.id = "google-maps-script";
    script.src = `https://maps.googleapis.com/maps/api/js?key=${encodeURIComponent(apiKey)}&libraries=places,marker&loading=async`;
    script.async = true;
    script.onload = () => resolve(window.google ?? null);
    script.onerror = () => resolve(null);
    document.head.appendChild(script);
  });

  return loadPromise;
}

declare global {
  interface Window {
    google?: typeof google;
  }
}
