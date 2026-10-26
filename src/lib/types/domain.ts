/**
 * Core domain enums and types shared across the app, API routes, and Supabase
 * queries. These mirror the Postgres enums defined in
 * supabase/migrations/0001_init.sql — keep both in sync.
 */

export const SERVICE_TYPE_SLUGS = [
  "battery-replacement",
  "jump-start",
  "lockout",
  "tire-repair-plug-patch",
  "flat-tire-change",
  "tire-replacement",
  "stuck-screw-in-tire",
  "rim-lock-removal",
  "fuel-delivery",
  // "towing" was retired on 2026-10-26 at the owner's request. Its
  // service_types row is deactivated (migration 0016), never deleted, so past
  // towing requests stay readable in the admin dashboard.
] as const;

export type ServiceTypeSlug = (typeof SERVICE_TYPE_SLUGS)[number];

export const REQUEST_STATUSES = [
  "new",
  "reviewing",
  "accepted",
  "driver_assigned",
  "driver_en_route",
  "driver_nearby",
  "arrived",
  "in_progress",
  "completed",
  "canceled",
  "unable_to_complete",
] as const;

export type RequestStatus = (typeof REQUEST_STATUSES)[number];

/** Allowed forward transitions. Anything not listed here is rejected by the API layer. */
export const REQUEST_STATUS_TRANSITIONS: Record<RequestStatus, RequestStatus[]> = {
  new: ["reviewing", "canceled"],
  reviewing: ["accepted", "canceled"],
  accepted: ["driver_assigned", "canceled"],
  driver_assigned: ["driver_en_route", "canceled", "unable_to_complete"],
  driver_en_route: ["driver_nearby", "canceled", "unable_to_complete"],
  driver_nearby: ["arrived", "canceled", "unable_to_complete"],
  arrived: ["in_progress", "unable_to_complete"],
  in_progress: ["completed", "unable_to_complete"],
  completed: [],
  canceled: [],
  unable_to_complete: [],
};

export const ACTIVE_STATUSES: RequestStatus[] = [
  "new",
  "reviewing",
  "accepted",
  "driver_assigned",
  "driver_en_route",
  "driver_nearby",
  "arrived",
  "in_progress",
];

export const TRACKING_LIVE_STATUSES: RequestStatus[] = [
  "driver_assigned",
  "driver_en_route",
  "driver_nearby",
  "arrived",
  "in_progress",
];

export const VEHICLE_TYPES = [
  "sedan",
  "suv",
  "pickup_truck",
  "van",
  "motorcycle",
  "box_truck",
  "semi_truck",
  "other",
] as const;
export type VehicleType = (typeof VEHICLE_TYPES)[number];

export const CONTACT_METHODS = ["call", "sms", "email"] as const;
export type ContactMethod = (typeof CONTACT_METHODS)[number];

/**
 * How the pickup coordinates were obtained. Dispatch uses this to judge how
 * far to trust the pin before rolling a truck: a GPS fix is metres-accurate,
 * a typed address that fell back to a geocode guess may not be.
 *
 * `pin_adjusted` is not in the original three. It exists because the map
 * marker is draggable, and that path genuinely produces a fourth kind of
 * coordinate — a position the customer placed deliberately by hand. Folding it
 * into `typed` would tell dispatch the opposite of the truth about how
 * reliable the pin is.
 */
export const LOCATION_SOURCES = ["gps", "address_selected", "pin_adjusted", "typed"] as const;
export type LocationSource = (typeof LOCATION_SOURCES)[number];

/** Dispatch-facing labels. Kept ASCII: these are interpolated into the dispatch SMS. */
export const LOCATION_SOURCE_LABELS: Record<LocationSource, string> = {
  gps: "GPS",
  address_selected: "Address selected",
  pin_adjusted: "Pin adjusted",
  typed: "Typed manually",
};

export const APP_ROLES = ["super_admin", "dispatcher", "driver", "content_editor"] as const;
export type AppRole = (typeof APP_ROLES)[number];

export const NOTIFICATION_EVENTS = [
  "request_received",
  "request_accepted",
  "driver_assigned",
  "driver_en_route",
  "driver_nearby",
  "driver_arrived",
  "service_completed",
  "request_canceled",
  "request_updated",
  "dispatch_new_request_email",
  "dispatch_new_request_sms",
  "dispatch_unaccepted_timeout",
  "dispatch_driver_issue",
  "dispatch_request_canceled",
  "dispatch_service_completed",
] as const;
export type NotificationEvent = (typeof NOTIFICATION_EVENTS)[number];

export const NOTIFICATION_CHANNELS = ["email", "sms"] as const;
export type NotificationChannel = (typeof NOTIFICATION_CHANNELS)[number];

export const NOTIFICATION_STATUSES = ["queued", "sent", "failed", "skipped"] as const;
export type NotificationStatus = (typeof NOTIFICATION_STATUSES)[number];

export interface StatusMeta {
  label: string;
  customerLabel: string;
  description: string;
}

export const STATUS_META: Record<RequestStatus, StatusMeta> = {
  new: {
    label: "New",
    customerLabel: "Request received",
    description: "We received your request and it's in the queue for review.",
  },
  reviewing: {
    label: "Reviewing",
    customerLabel: "Dispatch is reviewing your request",
    description: "Dispatch is confirming details before accepting your request.",
  },
  accepted: {
    label: "Accepted",
    customerLabel: "Request accepted",
    description: "Your request has been accepted. We're assigning a driver now.",
  },
  driver_assigned: {
    label: "Driver Assigned",
    customerLabel: "Driver assigned",
    description: "A driver has been assigned to your request.",
  },
  driver_en_route: {
    label: "Driver En Route",
    customerLabel: "Driver is on the way",
    description: "Your driver is on the way. Live location is available below.",
  },
  driver_nearby: {
    label: "Driver Nearby",
    customerLabel: "Driver is nearby",
    description: "Your driver is close. Please stay in a safe, visible location.",
  },
  arrived: {
    label: "Arrived",
    customerLabel: "Driver has arrived",
    description: "Your driver has arrived at your location.",
  },
  in_progress: {
    label: "Service In Progress",
    customerLabel: "Service in progress",
    description: "Your driver is working on your vehicle now.",
  },
  completed: {
    label: "Completed",
    customerLabel: "Service completed",
    description: "Your service has been completed. Thanks for choosing TRA.",
  },
  canceled: {
    label: "Canceled",
    customerLabel: "Request canceled",
    description: "This request was canceled.",
  },
  unable_to_complete: {
    label: "Unable To Complete",
    customerLabel: "Unable to complete",
    description: "We were unable to complete this request. Support will follow up.",
  },
};
