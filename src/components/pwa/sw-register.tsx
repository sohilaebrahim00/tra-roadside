"use client";

import { useEffect } from "react";

/** Registers the offline-fallback service worker (public/sw.js) after load. */
export function ServiceWorkerRegister() {
  useEffect(() => {
    if (!("serviceWorker" in navigator)) return;
    window.addEventListener("load", () => {
      navigator.serviceWorker.register("/sw.js").catch(() => {
        // Non-critical — the site works fully without the offline fallback.
      });
    });
  }, []);

  return null;
}
