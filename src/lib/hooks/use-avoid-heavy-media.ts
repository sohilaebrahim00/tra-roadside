"use client";

import { useSyncExternalStore } from "react";
import { shouldAvoidHeavyMedia } from "@/lib/media/network";

function getConnection() {
  if (typeof navigator === "undefined") return null;
  return (navigator as Navigator & { connection?: EventTarget }).connection ?? null;
}

function subscribe(callback: () => void) {
  const connection = getConnection();
  if (!connection) return () => {};
  connection.addEventListener("change", callback);
  return () => connection.removeEventListener("change", callback);
}

function getServerSnapshot() {
  return false;
}

/** SSR-safe, hydration-safe read of Save-Data / slow-connection state via useSyncExternalStore (no effect+setState). */
export function useAvoidHeavyMedia() {
  return useSyncExternalStore(subscribe, shouldAvoidHeavyMedia, getServerSnapshot);
}
