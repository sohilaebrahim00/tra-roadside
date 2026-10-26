import { NextRequest, NextResponse } from "next/server";
import { decodeDemoToken } from "@/lib/demo/demo-token";
import { simulatedStatusAt, simulatedDriverPosition, simulatedEtaMinutes } from "@/lib/demo/tracking-simulation";
import { STATUS_META, TRACKING_LIVE_STATUSES, type RequestStatus } from "@/lib/types/domain";
import { createAdminSupabaseClient } from "@/lib/supabase/admin";
import { isDemoMode } from "@/lib/env";
import type { TrackingData, TrackingResponse } from "@/lib/tracking/types";

interface RequestTrackingRow {
  request_number: string;
  status: RequestStatus;
  pickup_address: string;
  pickup_lat: number;
  pickup_lng: number;
  destination_address: string | null;
  updated_at: string;
  assigned_driver_id: string | null;
  service_types: { name: string } | null;
}

interface DriverTrackingRow {
  id: string;
  photo_url: string | null;
  vehicle_description: string | null;
  profiles: { full_name: string; phone: string | null } | null;
}

export async function GET(_req: NextRequest, { params }: { params: Promise<{ token: string }> }) {
  const { token } = await params;

  if (token.startsWith("demo.") || isDemoMode()) {
    const payload = decodeDemoToken(token);
    if (!payload) {
      return NextResponse.json<TrackingResponse>({ found: false, reason: "invalid" }, { status: 404 });
    }

    const createdAt = new Date(payload.createdAt);
    const now = new Date();
    const status = simulatedStatusAt(createdAt, now);
    const driverPosition = simulatedDriverPosition({ lat: payload.pickupLat, lng: payload.pickupLng }, createdAt, now);
    const etaMinutes = simulatedEtaMinutes(createdAt, now);
    const meta = STATUS_META[status];

    const order: RequestStatus[] = ["new", "reviewing", "accepted", "driver_assigned", "driver_en_route", "driver_nearby", "arrived", "in_progress", "completed"];
    const reachedIndex = order.indexOf(status);
    const timeline = order.slice(0, reachedIndex + 1).map((s) => ({ status: s, label: STATUS_META[s].customerLabel, at: now.toISOString() }));

    const response: TrackingResponse = {
      found: true,
      requestNumber: payload.requestNumber,
      status,
      statusLabel: meta.customerLabel,
      statusDescription: meta.description,
      serviceName: payload.serviceName,
      pickupAddress: payload.pickupAddress,
      pickupLat: payload.pickupLat,
      pickupLng: payload.pickupLng,
      destinationAddress: payload.destinationAddress ?? null,
      driver: TRACKING_LIVE_STATUSES.includes(status)
        ? { firstName: "Marcus", photoUrl: null, vehicleDescription: "Service Van #04", phone: null }
        : null,
      driverPosition,
      etaMinutes: TRACKING_LIVE_STATUSES.includes(status) ? etaMinutes : null,
      lastUpdated: now.toISOString(),
      timeline,
      isLive: TRACKING_LIVE_STATUSES.includes(status),
      demo: true,
    };

    return NextResponse.json(response);
  }

  try {
    const supabase = createAdminSupabaseClient();
    const { data: tokenRow } = await supabase
      .from("customer_tracking_tokens")
      .select("request_id, expires_at, revoked")
      .eq("token", token)
      .maybeSingle();

    if (!tokenRow) return NextResponse.json<TrackingResponse>({ found: false, reason: "invalid" }, { status: 404 });
    if (tokenRow.revoked) return NextResponse.json<TrackingResponse>({ found: false, reason: "revoked" }, { status: 410 });
    if (new Date(tokenRow.expires_at) < new Date())
      return NextResponse.json<TrackingResponse>({ found: false, reason: "expired" }, { status: 410 });

    const { data: request } = await supabase
      .from("service_requests")
      .select(
        "request_number, status, pickup_address, pickup_lat, pickup_lng, destination_address, updated_at, assigned_driver_id, service_types(name)"
      )
      .eq("id", tokenRow.request_id)
      .maybeSingle()
      .returns<RequestTrackingRow>();

    if (!request) return NextResponse.json<TrackingResponse>({ found: false, reason: "invalid" }, { status: 404 });

    const { data: history } = await supabase
      .from("request_status_history")
      .select("new_status, created_at")
      .eq("request_id", tokenRow.request_id)
      .order("created_at", { ascending: true });

    let driver: TrackingData["driver"] = null;
    let driverPosition: TrackingData["driverPosition"] = null;
    const etaMinutes: number | null = null;

    if (request.assigned_driver_id) {
      const { data: driverRow } = await supabase
        .from("drivers")
        .select("id, photo_url, vehicle_description, profiles(full_name, phone)")
        .eq("id", request.assigned_driver_id)
        .maybeSingle()
        .returns<DriverTrackingRow>();

      if (driverRow) {
        driver = {
          firstName: driverRow.profiles?.full_name?.split(" ")[0] ?? "Driver",
          photoUrl: driverRow.photo_url,
          vehicleDescription: driverRow.vehicle_description,
          phone: driverRow.profiles?.phone ?? null,
        };
      }

      const { data: locationRow } = await supabase
        .from("driver_locations")
        .select("lat, lng, recorded_at")
        .eq("request_id", tokenRow.request_id)
        .order("recorded_at", { ascending: false })
        .limit(1)
        .maybeSingle();

      if (locationRow) driverPosition = { lat: locationRow.lat, lng: locationRow.lng };
    }

    const status = request.status;
    const meta = STATUS_META[status];
    const serviceName = request.service_types?.name ?? "Roadside Assistance";

    const response: TrackingResponse = {
      found: true,
      requestNumber: request.request_number,
      status,
      statusLabel: meta.customerLabel,
      statusDescription: meta.description,
      serviceName,
      pickupAddress: request.pickup_address,
      pickupLat: request.pickup_lat,
      pickupLng: request.pickup_lng,
      destinationAddress: request.destination_address,
      driver,
      driverPosition,
      etaMinutes,
      lastUpdated: request.updated_at,
      timeline: (history ?? []).map((h) => ({
        status: h.new_status,
        label: STATUS_META[h.new_status].customerLabel,
        at: h.created_at,
      })),
      isLive: TRACKING_LIVE_STATUSES.includes(status),
      demo: false,
    };

    return NextResponse.json(response);
  } catch (err) {
    console.error("tracking lookup failed", err);
    return NextResponse.json<TrackingResponse>({ found: false, reason: "invalid" }, { status: 500 });
  }
}
