import type { RequestStatus } from "@/lib/types/domain";

export interface TrackingDriver {
  firstName: string;
  photoUrl: string | null;
  vehicleDescription: string | null;
  phone: string | null;
}

export interface TrackingTimelineEntry {
  status: RequestStatus;
  label: string;
  at: string;
}

export interface TrackingData {
  found: true;
  requestNumber: string;
  status: RequestStatus;
  statusLabel: string;
  statusDescription: string;
  serviceName: string;
  pickupAddress: string;
  pickupLat: number;
  pickupLng: number;
  destinationAddress: string | null;
  driver: TrackingDriver | null;
  driverPosition: { lat: number; lng: number } | null;
  etaMinutes: number | null;
  lastUpdated: string;
  timeline: TrackingTimelineEntry[];
  isLive: boolean;
  demo: boolean;
}

export interface TrackingNotFound {
  found: false;
  reason: "invalid" | "expired" | "revoked";
}

export type TrackingResponse = TrackingData | TrackingNotFound;
