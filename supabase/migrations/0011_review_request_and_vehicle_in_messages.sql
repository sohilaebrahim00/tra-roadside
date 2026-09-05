-- Two additions to the notification templates.
--
-- 1. A review request, on service_completed ONLY. Asking a customer whose car
--    is still broken down earns a bad review, so it appears at no earlier
--    status and not on the confirmation.
--
-- 2. The vehicle and the booked service on the customer's request_received and
--    on the dispatch SMS, so a wrong selection can be caught before a truck
--    rolls.
--
-- SMS ENCODING — the constraint that shapes the wording below.
--
-- A single character outside the GSM-7 alphabet (an emoji, a curly quote, an
-- em dash) switches a message to UCS-2, which cuts the per-segment limit from
-- 160 characters to 70. So:
--
--   * the SMS bodies here are plain 7-bit text with NO emoji. The star and the
--     warmer wording live in the email, where they cost nothing.
--   * the SMS uses {{serviceShort}} (the service shortName), never
--     {{serviceName}}. The display name "Tire Repair — Plug & Patch" carries an
--     em dash, and interpolating it would take request_received from 2 segments
--     to 5 for every tire repair booking.
--   * the SMS uses {{vehicleClause}}, never {{vehicleDetails}} — the latter
--     appends " — VIN: ..." with an em dash, and is email-only.
--
-- scripts/check-sms-gsm7.mjs enforces all three rules at build time.
--
-- EMPTY VEHICLE — {{vehicleClause}} is composed in the API route as either
-- " for 2019 Toyota Camry" or the empty string, carrying its own leading space
-- and preposition. The templates therefore need no punctuation around it:
-- a request with blank vehicle fields renders "TRA: Battery Replacement at
-- 1200 Main St" rather than "Battery Replacement for  at ..." with a double
-- space and a dangling preposition.

update notification_templates
set body = 'TRA: {{serviceShort}}{{vehicleClause}} at {{pickupAddress}}. Ref {{requestNumber}}. Track: {{trackingUrl}} Help: {{supportPhone}}. Reply STOP to opt out.'
where event = 'request_received' and channel = 'sms';

update notification_templates
set body = 'Hi {{customerName}}, your {{serviceName}} request ({{requestNumber}}) has been received and is {{statusLabel}}. Vehicle: {{vehicleText}}. Pickup location: {{pickupAddress}}. Track live status: {{trackingUrl}}. Questions? Call {{supportPhone}}.'
where event = 'request_received' and channel = 'email';

update notification_templates
set body = 'TRA: Your service is complete. Thanks for choosing TRA! Review us: https://g.page/r/CejARc-2hFzlEAI/review Reply STOP to opt out.'
where event = 'service_completed' and channel = 'sms';

update notification_templates
set body = E'Hi {{customerName}}, your {{serviceName}} service is complete. Thanks for choosing TRA.\n\n⭐ How did we do?\nIf we got you moving today, a quick review genuinely helps other drivers find us when they''re stuck on the side of the road:\nhttps://g.page/r/CejARc-2hFzlEAI/review\n\nIt takes about a minute. Questions about your service? Call {{supportPhone}}.'
where event = 'service_completed' and channel = 'email';

update notification_templates
set body = 'TRA NEW REQUEST {{requestNumber}}: {{customerName}} ({{customerPhone}}) needs {{serviceShort}}{{vehicleClause}} at {{pickupAddress}}. {{dispatchUrl}}'
where event = 'dispatch_new_request_sms' and channel = 'sms';
