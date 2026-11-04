-- Customers' messages carry no price and no tracking link, and customers no longer
-- follow their driver (owner, 2026-11-04): a driver may have another job on the way
-- to them. Dispatch's own text keeps the service price and the $19 dispatch fee.

update notification_templates
set body = E'TRA Roadside: Request received\nService: {{serviceShort}}{{vehicleLine}}\nLocation: {{pickupAddress}}\nRef: {{requestNumber}}\nQuestions: {{supportPhone}}\nReply STOP to opt out.'
where event = 'request_received' and channel = 'sms';

update notification_templates
set body = E'TRA Roadside: Request accepted\nService: {{serviceShort}}\nRef: {{requestNumber}}\nWe''re assigning a driver now.\nReply STOP to opt out.'
where event = 'request_accepted' and channel = 'sms';

update notification_templates
set body = E'TRA Roadside: Driver assigned\nService: {{serviceShort}}{{driverLine}}\nReply STOP to opt out.'
where event = 'driver_assigned' and channel = 'sms';

update notification_templates
set body = E'TRA Roadside: Driver on the way\nService: {{serviceShort}}{{driverLine}}\nReply STOP to opt out.'
where event = 'driver_en_route' and channel = 'sms';

update notification_templates
set body = 'Hi {{customerName}}, thanks for choosing TRA. Your request is with our local Dallas–Fort Worth dispatch team now. Everything you sent us is below.'
where event = 'request_received' and channel = 'email';

update notification_templates
set body = 'Hi {{customerName}}, dispatch has accepted your request and is assigning a driver. Questions? Call {{supportPhone}}.'
where event = 'request_accepted' and channel = 'email';

update notification_templates
set body = 'Hi {{customerName}}, {{driverName}} has been assigned to your request. Questions? Call {{supportPhone}}.'
where event = 'driver_assigned' and channel = 'email';

update notification_templates
set body = 'Hi {{customerName}}, {{driverName}} is on the way. Questions? Call {{supportPhone}}.'
where event = 'driver_en_route' and channel = 'email';

update faqs set is_published = false where category = 'Tracking';

update faqs
set answer = 'No. You can submit a request without one, and we reach you by text, phone or email.'
where question = 'Do I need to create an account?';

update faqs
set answer = 'Yes. Call dispatch as soon as possible if you no longer need assistance.'
where question = 'Can I cancel my request?';

update faqs
set answer = 'We serve the Dallas–Fort Worth Metroplex. See the Service Areas page for the complete list of cities.'
where question = 'What areas do you serve?';
