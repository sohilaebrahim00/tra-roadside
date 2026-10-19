-- The price on its own line in the two texts that start a request: the
-- customer's confirmation and the dispatch alert (owner's request,
-- 2026-10-19), e.g. "Price: $55-65" or "Price: From $189 (battery only,
-- installation quoted)". {{priceLine}} comes from SERVICES through
-- smsPrice(), ASCII only, so the texts stay on GSM-7.
--
-- Apply AFTER the code that passes {{priceLine}} is deployed; before it the
-- line would simply be missing, so the order is safe either way.

update notification_templates
set body = E'TRA Roadside: Request received\nService: {{serviceShort}}{{priceLine}}{{vehicleLine}}\nLocation: {{pickupAddress}}\nRef: {{requestNumber}}\nTrack live: {{trackingUrl}}\nQuestions: {{supportPhone}}\nReply STOP to opt out.'
where event = 'request_received' and channel = 'sms';

update notification_templates
set body = E'TRA NEW REQUEST {{requestNumber}}\nService: {{serviceShort}}{{priceLine}}{{vehicleLine}}\nCustomer: {{customerName}} {{customerPhone}}\nLocation: {{pickupAddress}}{{destinationLine}}\nMap: {{mapsUrl}}\nOpen: {{dispatchUrl}}'
where event = 'dispatch_new_request_sms' and channel = 'sms';
