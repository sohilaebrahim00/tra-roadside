"use client";

import { useEffect, useRef } from "react";

/**
 * Key prefix for the "this request has already been counted" marker. Keyed by
 * request number, so the guard survives a refresh, a back-navigation, and
 * reopening the confirmation page from history — all of which would otherwise
 * send a second conversion for the same job.
 */
const STORAGE_PREFIX = "tra:ads-conversion:";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

/** Sends the conversion, queueing it if gtag.js has not finished loading yet. */
function sendConversion(sendTo: string) {
  if (typeof window.gtag === "function") {
    window.gtag("event", "conversion", { send_to: sendTo });
    return;
  }
  // The tag is `afterInteractive`, so this effect can run first. Pushing onto
  // dataLayer is exactly what the gtag stub does; gtag.js processes the buffer
  // when it executes, so the conversion is not lost in that race.
  window.dataLayer = window.dataLayer ?? [];
  window.dataLayer.push(["event", "conversion", { send_to: sendTo }]);
}

/**
 * Fires the Google Ads conversion once per completed request.
 *
 * Renders nothing. The parent only mounts this on the confirmation page, and
 * only when both halves of the send_to are configured, so no other route can
 * report a conversion.
 *
 * The marker is written BEFORE the conversion is sent, not after. If the two
 * ever disagree the bias is towards under-counting, which is the correct way
 * round: an inflated count teaches Google to spend the budget against an
 * audience that never converted.
 */
export function GoogleAdsConversion({
  sendTo,
  requestNumber,
}: {
  sendTo: string;
  requestNumber: string;
}) {
  // Guards against React's development double-invoke of effects, and against
  // any remount within the same page load, without touching storage twice.
  const firedRef = useRef(false);

  useEffect(() => {
    if (!requestNumber || firedRef.current) return;
    const key = `${STORAGE_PREFIX}${requestNumber}`;

    // Storage can throw outright, not just return null: private windows and
    // "block site data" settings make even reading it a SecurityError.
    let storageUsable = true;
    try {
      if (window.localStorage.getItem(key) !== null) return; // already counted
    } catch {
      storageUsable = false;
    }

    firedRef.current = true;

    if (storageUsable) {
      try {
        window.localStorage.setItem(key, new Date().toISOString());
      } catch {
        // Quota or policy refused the write. The conversion is still sent —
        // suppressing it here would silently lose every conversion from
        // private browsing rather than just risk a duplicate on refresh.
      }
    }

    sendConversion(sendTo);
  }, [sendTo, requestNumber]);

  return null;
}
