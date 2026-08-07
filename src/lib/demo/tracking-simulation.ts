import type { RequestStatus } from "@/lib/types/domain";

/**
 * Deterministic, time-based simulation used ONLY on the demo tracking page
 * when Supabase/driver-app data isn't available. Clearly surfaced to the
 * user as a simulation — never presented as a real live screenshot.
 */
const STAGE_DURATIONS_SEC: [RequestStatus, number][] = [
  ["new", 20],
  ["reviewing", 25],
  ["accepted", 20],
  ["driver_assigned", 20],
  ["driver_en_route", 90],
  ["driver_nearby", 30],
  ["arrived", 20],
  ["in_progress", 40],
  ["completed", Infinity],
];

export function simulatedStatusAt(createdAt: Date, now: Date = new Date()): RequestStatus {
  let elapsed = (now.getTime() - createdAt.getTime()) / 1000;
  for (const [status, duration] of STAGE_DURATIONS_SEC) {
    if (elapsed < duration) return status;
    elapsed -= duration;
  }
  return "completed";
}

export function simulatedDriverPosition(
  pickup: { lat: number; lng: number },
  createdAt: Date,
  now: Date = new Date()
): { lat: number; lng: number } | null {
  const status = simulatedStatusAt(createdAt, now);
  if (!["driver_en_route", "driver_nearby"].includes(status)) return null;

  // Simulate a driver starting ~2.5mi away and converging on the pickup point.
  const start = { lat: pickup.lat + 0.03, lng: pickup.lng - 0.025 };
  const enRouteStart = 20 + 25 + 20 + 20; // seconds before driver_en_route begins
  const elapsedInTransit = Math.max(0, (now.getTime() - createdAt.getTime()) / 1000 - enRouteStart);
  const transitDuration = 90 + 30; // en_route + nearby
  const progress = Math.min(1, elapsedInTransit / transitDuration);

  return {
    lat: start.lat + (pickup.lat - start.lat) * progress,
    lng: start.lng + (pickup.lng - start.lng) * progress,
  };
}

export function simulatedEtaMinutes(createdAt: Date, now: Date = new Date()): number {
  const status = simulatedStatusAt(createdAt, now);
  if (status === "arrived" || status === "in_progress" || status === "completed") return 0;

  const enRouteStart = 20 + 25 + 20 + 20;
  const elapsedInTransit = Math.max(0, (now.getTime() - createdAt.getTime()) / 1000 - enRouteStart);
  const transitDuration = 90 + 30;
  const remaining = Math.max(0, transitDuration - elapsedInTransit);
  return Math.ceil(remaining / 60);
}
