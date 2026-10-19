import type { NotificationChannel, NotificationEvent } from "@/lib/types/domain";

export interface NotificationTemplate {
  event: NotificationEvent;
  channel: NotificationChannel;
  subject: string | null;
  body: string;
}

/** Mirrors supabase/seed.sql — used verbatim in demo mode and as the seed source of truth. */
export const NOTIFICATION_TEMPLATES_FALLBACK: NotificationTemplate[] = [
  { event: "request_received", channel: "email", subject: "We received your {{serviceName}} request — {{requestNumber}}", body: "Hi {{customerName}}, thanks for choosing TRA. Your request is with our local Dallas–Fort Worth dispatch team now. Everything you sent us is below, with your live tracking link." },
  { event: "request_received", channel: "sms", subject: null, body: "TRA Roadside: Request received\nService: {{serviceShort}}{{priceLine}}{{vehicleLine}}\nLocation: {{pickupAddress}}\nRef: {{requestNumber}}\nTrack live: {{trackingUrl}}\nQuestions: {{supportPhone}}\nReply STOP to opt out." },
  { event: "request_accepted", channel: "email", subject: "Your request has been accepted — {{requestNumber}}", body: "Hi {{customerName}}, dispatch has accepted your request and is assigning a driver. Track live status: {{trackingUrl}}. Questions? Call {{supportPhone}}." },
  { event: "request_accepted", channel: "sms", subject: null, body: "TRA Roadside: Request accepted\nService: {{serviceShort}}\nRef: {{requestNumber}}\nWe're assigning a driver now.\nTrack live: {{trackingUrl}}\nReply STOP to opt out." },
  { event: "driver_assigned", channel: "email", subject: "A driver has been assigned — {{requestNumber}}", body: "Hi {{customerName}}, {{driverName}} has been assigned to your request. Track live location: {{trackingUrl}}. Questions? Call {{supportPhone}}." },
  { event: "driver_assigned", channel: "sms", subject: null, body: "TRA Roadside: Driver assigned\nService: {{serviceShort}}{{driverLine}}\nTrack live: {{trackingUrl}}\nReply STOP to opt out." },
  { event: "driver_en_route", channel: "email", subject: "Your driver is on the way — {{requestNumber}}", body: "Hi {{customerName}}, {{driverName}} is on the way. ETA: {{eta}}. Track live: {{trackingUrl}}. Questions? Call {{supportPhone}}." },
  { event: "driver_en_route", channel: "sms", subject: null, body: "TRA Roadside: Driver on the way\nService: {{serviceShort}}{{driverLine}}\nLive location and ETA: {{trackingUrl}}\nReply STOP to opt out." },
  { event: "driver_nearby", channel: "email", subject: "Your driver is nearby — {{requestNumber}}", body: "Hi {{customerName}}, {{driverName}} is almost at your location. Please stay in a safe, visible spot. Questions? Call {{supportPhone}}." },
  { event: "driver_nearby", channel: "sms", subject: null, body: "TRA Roadside: Driver nearby\nService: {{serviceShort}}{{driverLine}}\nYour driver is almost there. Please wait in a safe, visible spot.\nReply STOP to opt out." },
  { event: "driver_arrived", channel: "email", subject: "Your driver has arrived — {{requestNumber}}", body: "Hi {{customerName}}, {{driverName}} has arrived at your location. Questions? Call {{supportPhone}}." },
  { event: "driver_arrived", channel: "sms", subject: null, body: "TRA Roadside: Driver arrived\nService: {{serviceShort}}{{driverLine}}\nYour driver is at your location.\nReply STOP to opt out." },
  { event: "service_completed", channel: "email", subject: "Service completed — {{requestNumber}}", body: "Hi {{customerName}}, your {{serviceName}} service is complete. Thanks for choosing TRA.\n\n⭐ How did we do?\nIf we got you moving today, a quick review genuinely helps other drivers find us when they're stuck on the side of the road:\nhttps://g.page/r/CejARc-2hFzlEAI/review\n\nIt takes about a minute. Questions about your service? Call {{supportPhone}}." },
  { event: "service_completed", channel: "sms", subject: null, body: "TRA Roadside: Service complete\nService: {{serviceShort}}\nThanks for choosing TRA. A quick review helps other drivers find us:\nhttps://g.page/r/CejARc-2hFzlEAI/review\nReply STOP to opt out." },
  { event: "request_canceled", channel: "email", subject: "Request canceled — {{requestNumber}}", body: "Hi {{customerName}}, your request {{requestNumber}} has been canceled. Call {{supportPhone}} if this was unexpected." },
  { event: "request_canceled", channel: "sms", subject: null, body: "TRA Roadside: Request canceled\nService: {{serviceShort}}\nRef: {{requestNumber}}\nQuestions: {{supportPhone}}\nReply STOP to opt out." },
  { event: "request_updated", channel: "sms", subject: null, body: "TRA Roadside: Status update\nRef: {{requestNumber}}\nStatus: {{statusLabel}}\nReply STOP to opt out." },
  { event: "dispatch_new_request_email", channel: "email", subject: "NEW {{serviceName}} — {{requestNumber}}{{vehicleClause}}", body: "New {{serviceName}} request from {{customerName}}. Call to confirm the checklist below, then assign a driver." },
  { event: "dispatch_new_request_sms", channel: "sms", subject: null, body: "TRA NEW REQUEST {{requestNumber}}\nService: {{serviceShort}}{{priceLine}}{{vehicleLine}}\nCustomer: {{customerName}} {{customerPhone}}\nLocation: {{pickupAddress}}{{destinationLine}}\nMap: {{mapsUrl}}\nOpen: {{dispatchUrl}}" },
  { event: "dispatch_unaccepted_timeout", channel: "email", subject: "Unaccepted request — {{requestNumber}}", body: "Request {{requestNumber}} has not been accepted yet. Review: {{dispatchUrl}}" },
  { event: "dispatch_driver_issue", channel: "email", subject: "Driver reported an issue — {{requestNumber}}", body: "Driver {{driverName}} reported an issue on request {{requestNumber}}: {{issueNote}}" },
  { event: "dispatch_request_canceled", channel: "email", subject: "Request canceled — {{requestNumber}}", body: "Request {{requestNumber}} was canceled." },
  { event: "dispatch_service_completed", channel: "email", subject: "Service completed — {{requestNumber}}", body: "Request {{requestNumber}} was marked completed by {{driverName}}." },
];

export function getFallbackTemplate(event: NotificationEvent, channel: NotificationChannel) {
  return NOTIFICATION_TEMPLATES_FALLBACK.find((t) => t.event === event && t.channel === channel) ?? null;
}
