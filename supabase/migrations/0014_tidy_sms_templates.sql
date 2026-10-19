-- Every text message rewritten as a tidy, line-by-line message with the
-- service on top (owner's request, 2026-10-19), e.g.
--
--   TRA Roadside: Driver on the way
--   Service: Battery Replacement
--   Driver: Marcus
--   Live location and ETA: https://...
--
-- New variables, passed by the code that ships with this migration:
-- {{vehicleLine}}, {{driverLine}} and {{destinationLine}} each render as a
-- labeled line, or as nothing when the value is missing, so no empty
-- "Vehicle:" line is ever sent. {{serviceShort}} is now passed for every
-- status change too. The old en-route text printed "ETA ." because no ETA
-- was ever passed; the ETA now lives behind the tracking link.
--
-- Apply AFTER the code is deployed: before it, status texts would render an
-- empty "Service:" line. All bodies are GSM-7 (no em dash, no curly quotes).

update notification_templates
set body = E'TRA Roadside: Request received\nService: {{serviceShort}}{{vehicleLine}}\nLocation: {{pickupAddress}}\nRef: {{requestNumber}}\nTrack live: {{trackingUrl}}\nQuestions: {{supportPhone}}\nReply STOP to opt out.'
where event = 'request_received' and channel = 'sms';

update notification_templates
set body = E'TRA Roadside: Request accepted\nService: {{serviceShort}}\nRef: {{requestNumber}}\nWe\'re assigning a driver now.\nTrack live: {{trackingUrl}}\nReply STOP to opt out.'
where event = 'request_accepted' and channel = 'sms';

update notification_templates
set body = E'TRA Roadside: Driver assigned\nService: {{serviceShort}}{{driverLine}}\nTrack live: {{trackingUrl}}\nReply STOP to opt out.'
where event = 'driver_assigned' and channel = 'sms';

update notification_templates
set body = E'TRA Roadside: Driver on the way\nService: {{serviceShort}}{{driverLine}}\nLive location and ETA: {{trackingUrl}}\nReply STOP to opt out.'
where event = 'driver_en_route' and channel = 'sms';

update notification_templates
set body = E'TRA Roadside: Driver nearby\nService: {{serviceShort}}{{driverLine}}\nYour driver is almost there. Please wait in a safe, visible spot.\nReply STOP to opt out.'
where event = 'driver_nearby' and channel = 'sms';

update notification_templates
set body = E'TRA Roadside: Driver arrived\nService: {{serviceShort}}{{driverLine}}\nYour driver is at your location.\nReply STOP to opt out.'
where event = 'driver_arrived' and channel = 'sms';

update notification_templates
set body = E'TRA Roadside: Service complete\nService: {{serviceShort}}\nThanks for choosing TRA. A quick review helps other drivers find us:\nhttps://g.page/r/CejARc-2hFzlEAI/review\nReply STOP to opt out.'
where event = 'service_completed' and channel = 'sms';

update notification_templates
set body = E'TRA Roadside: Request canceled\nService: {{serviceShort}}\nRef: {{requestNumber}}\nQuestions: {{supportPhone}}\nReply STOP to opt out.'
where event = 'request_canceled' and channel = 'sms';

update notification_templates
set body = E'TRA Roadside: Status update\nRef: {{requestNumber}}\nStatus: {{statusLabel}}\nReply STOP to opt out.'
where event = 'request_updated' and channel = 'sms';

update notification_templates
set body = E'TRA NEW REQUEST {{requestNumber}}\nService: {{serviceShort}}{{vehicleLine}}\nCustomer: {{customerName}} {{customerPhone}}\nLocation: {{pickupAddress}}{{destinationLine}}\nMap: {{mapsUrl}}\nOpen: {{dispatchUrl}}'
where event = 'dispatch_new_request_sms' and channel = 'sms';
