"use client";

import { useSyncExternalStore } from "react";

interface NetworkInformationLike {
  saveData?: boolean;
  addEventListener?: (type: "change", callback: () => void) => void;
  removeEventListener?: (type: "change", callback: () => void) => void;
}

function getConnection(): NetworkInformationLike | undefined {
  if (typeof navigator === "undefined") return undefined;
  return (navigator as unknown as { connection?: NetworkInformationLike }).connection;
}

function subscribe(callback: () => void) {
  const connection = getConnection();
  connection?.addEventListener?.("change", callback);
  return () => connection?.removeEventListener?.("change", callback);
}

function getSnapshot() {
  return Boolean(getConnection()?.saveData);
}

function getServerSnapshot() {
  return false;
}

/** SSR-safe, hydration-safe read of navigator.connection.saveData via useSyncExternalStore (no effect+setState). */
export function useSaveData() {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
