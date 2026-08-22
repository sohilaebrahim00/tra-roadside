-- Demo seed data. Safe to re-run (idempotent upserts on natural keys).
-- Business facts (services, cities, phone) are real, audited from the live
-- site. Blog/FAQ/gallery copy is clearly-labeled demo content for a fresh
-- install — replace via the admin CMS before going live.

insert into service_types (slug, name, needs_destination, description, sort_order) values
  ('towing', 'Towing', true, 'Light and medium-duty towing to any destination.', 1),
  ('jump-start', 'Jump Start', false, 'Dead battery jump start.', 2),
  ('flat-tire-change', 'Flat Tire Change', false, 'Swap to your spare or a serviceable tire.', 3),
  ('tire-inflation', 'Tire Inflation', false, 'Top off low tire pressure.', 4),
  ('spare-tire-install', 'Spare Tire Installation', false, 'Professional spare tire mounting.', 5),
  ('fuel-delivery', 'Fuel Delivery', false, 'Gas or diesel delivered roadside.', 6),
  ('lockout', 'Vehicle Lockout', false, 'Non-destructive lockout entry.', 7),
  ('winching-recovery', 'Winching & Recovery', false, 'Recovery from ditches, mud, or embankments.', 8),
  ('minor-repair', 'Minor Roadside Repair', false, 'Small mechanical fixes on site.', 9),
  ('truck-assistance', '18 Wheeler Roadside Services', false, 'Roadside support for 18-wheelers, semi-trucks, tractor-trailers, and other commercial trucks.', 10),
  ('other-roadside-service', 'Other Roadside Service', false, 'Not listed above — tell us what you need.', 11),
  ('battery-replacement', 'Battery Replacement', false, 'Mobile battery replacement with a 2-year warranty, installed on site.', 12),
  ('tire-repair-plug-patch', 'Tire Repair — Plug & Patch', false, 'Puncture repaired roadside with a plug or patch, when the damage allows it.', 13)
on conflict (slug) do update set
  name = excluded.name,
  needs_destination = excluded.needs_destination,
  description = excluded.description,
  sort_order = excluded.sort_order;

insert into service_areas (slug, name, sort_order) values
  ('dallas', 'Dallas', 1),
  ('arlington', 'Arlington', 2),
  ('irving', 'Irving', 3),
  ('grand-prairie', 'Grand Prairie', 4),
  ('mesquite', 'Mesquite', 5),
  ('garland', 'Garland', 6),
  ('richardson', 'Richardson', 7),
  ('plano', 'Plano', 8),
  ('frisco', 'Frisco', 9),
  ('mckinney', 'McKinney', 10),
  ('allen', 'Allen', 11),
  ('carrollton', 'Carrollton', 12),
  ('lewisville', 'Lewisville', 13),
  ('denton', 'Denton', 14),
  ('the-colony', 'The Colony', 15),
  ('euless', 'Euless', 16),
  ('bedford', 'Bedford', 17),
  ('hurst', 'Hurst', 18),
  ('north-richland-hills', 'North Richland Hills', 19),
  ('grapevine', 'Grapevine', 20),
  ('coppell', 'Coppell', 21),
  ('farmers-branch', 'Farmers Branch', 22),
  ('addison', 'Addison', 23),
  ('rockwall', 'Rockwall', 24),
  ('rowlett', 'Rowlett', 25),
  ('sachse', 'Sachse', 26),
  ('wylie', 'Wylie', 27)
on conflict (slug) do update set name = excluded.name, sort_order = excluded.sort_order;

-- Notification templates — one row per (event, channel). {{placeholders}}
-- are substituted by src/lib/notifications/render.ts.
insert into notification_templates (event, channel, subject, body) values
  ('request_received', 'email', 'We received your request — {{requestNumber}}', 'Hi {{customerName}}, your {{serviceName}} request ({{requestNumber}}) has been received and is {{statusLabel}}. Pickup location: {{pickupAddress}}.{{serviceDetails}} Track live status: {{trackingUrl}}. Questions? Call {{supportPhone}}.'),
  ('request_received', 'sms', null, 'TRA: Request {{requestNumber}} received ({{statusLabel}}). Pickup: {{pickupAddress}}.{{serviceDetails}} Track: {{trackingUrl}}. Support: {{supportPhone}}. Reply STOP to opt out.'),
  ('request_accepted', 'email', 'Your request has been accepted — {{requestNumber}}', 'Hi {{customerName}}, dispatch has accepted your request and is assigning a driver. Track live status: {{trackingUrl}}. Questions? Call {{supportPhone}}.'),
  ('request_accepted', 'sms', null, 'TRA: Request {{requestNumber}} accepted. Assigning a driver now. {{trackingUrl}} Reply STOP to opt out.'),
  ('driver_assigned', 'email', 'A driver has been assigned — {{requestNumber}}', 'Hi {{customerName}}, {{driverName}} has been assigned to your request. Track live location: {{trackingUrl}}. Questions? Call {{supportPhone}}.'),
  ('driver_assigned', 'sms', null, 'TRA: {{driverName}} is assigned to your request. Track: {{trackingUrl}} Reply STOP to opt out.'),
  ('driver_en_route', 'email', 'Your driver is on the way — {{requestNumber}}', 'Hi {{customerName}}, {{driverName}} is on the way. ETA: {{eta}}. Track live: {{trackingUrl}}. Questions? Call {{supportPhone}}.'),
  ('driver_en_route', 'sms', null, 'TRA: {{driverName}} is on the way. ETA {{eta}}. {{trackingUrl}} Reply STOP to opt out.'),
  ('driver_nearby', 'email', 'Your driver is nearby — {{requestNumber}}', 'Hi {{customerName}}, {{driverName}} is almost at your location. Please stay in a safe, visible spot. Questions? Call {{supportPhone}}.'),
  ('driver_nearby', 'sms', null, 'TRA: {{driverName}} is nearby. Stay in a safe, visible location. Reply STOP to opt out.'),
  ('driver_arrived', 'email', 'Your driver has arrived — {{requestNumber}}', 'Hi {{customerName}}, {{driverName}} has arrived at your location. Questions? Call {{supportPhone}}.'),
  ('driver_arrived', 'sms', null, 'TRA: {{driverName}} has arrived at your location. Reply STOP to opt out.'),
  ('service_completed', 'email', 'Service completed — {{requestNumber}}', 'Hi {{customerName}}, your {{serviceName}} service is complete. Thanks for choosing TRA. Questions? Call {{supportPhone}}.'),
  ('service_completed', 'sms', null, 'TRA: Your service is complete. Thanks for choosing TRA! Reply STOP to opt out.'),
  ('request_canceled', 'email', 'Request canceled — {{requestNumber}}', 'Hi {{customerName}}, your request {{requestNumber}} has been canceled. Call {{supportPhone}} if this was unexpected.'),
  ('request_canceled', 'sms', null, 'TRA: Request {{requestNumber}} was canceled. Call {{supportPhone}} with questions. Reply STOP to opt out.'),
  ('request_updated', 'sms', null, 'TRA: Your request {{requestNumber}} status changed to {{statusLabel}}. Reply STOP to opt out.'),
  ('dispatch_new_request_email', 'email', 'New request — {{requestNumber}} ({{serviceName}})', E'New roadside request received.\n\nRequest #: {{requestNumber}}\nReceived: {{createdAt}}\nService: {{serviceName}}\n\nCustomer: {{customerName}}\nPhone: {{customerPhone}}\nEmail: {{customerEmail}}\n\nPickup: {{pickupAddress}}\nDestination: {{destinationAddress}}\n\nVehicle: {{vehicleDetails}}\nNotes: {{customerNotes}}\n\nCustomer tracking link: {{trackingUrl}}\nManage this request: {{dispatchUrl}}'),
  ('dispatch_new_request_sms', 'sms', null, 'TRA NEW REQUEST {{requestNumber}}: {{customerName}} ({{customerPhone}}) needs {{serviceName}} at {{pickupAddress}}. {{dispatchUrl}}'),
  ('dispatch_unaccepted_timeout', 'email', 'Unaccepted request — {{requestNumber}}', 'Request {{requestNumber}} has not been accepted yet. Review: {{dispatchUrl}}'),
  ('dispatch_driver_issue', 'email', 'Driver reported an issue — {{requestNumber}}', 'Driver {{driverName}} reported an issue on request {{requestNumber}}: {{issueNote}}'),
  ('dispatch_request_canceled', 'email', 'Request canceled — {{requestNumber}}', 'Request {{requestNumber}} was canceled.'),
  ('dispatch_service_completed', 'email', 'Service completed — {{requestNumber}}', 'Request {{requestNumber}} was marked completed by {{driverName}}.')
on conflict (event, channel) do update set body = excluded.body, subject = excluded.subject;

insert into faqs (category, question, answer, sort_order) values
  ('General', 'What areas do you serve?', 'We serve the Dallas–Fort Worth Metroplex, including Dallas, Arlington, Plano, Frisco, and 23 other nearby cities. See the full Service Areas page for the complete list.', 1),
  ('General', 'Are you available 24/7?', 'Yes — TRA dispatches roadside assistance 24 hours a day, 365 days a year.', 2),
  ('Service Requests', 'How do I request help?', 'Use the "Request Help" button to share your location, pick a service, and submit — most requests take under two minutes. You can also call us directly.', 3),
  ('Service Requests', 'Do I need to create an account?', 'No. You can submit a request and track it with a secure link sent to your phone or email — no account required.', 4),
  ('Arrival Time', 'How long until a driver arrives?', 'TRA''s stated average is a 30-minute arrival window; actual time depends on your location, traffic, and current demand.', 5),
  ('Pricing', 'How much does a service cost?', 'TRA advertises upfront pricing with no surprise fees. Exact pricing is confirmed by dispatch based on your service and location before a driver is sent — this page will be updated with a live rate card.', 6),
  ('Tracking', 'How do I track my driver?', 'Once a driver is assigned and starts the trip, a live tracking link is sent by SMS and email. No login is required.', 7),
  ('Tracking', 'Does the tracking link expire?', 'Yes, tracking links are scoped to a single request and stop working after the job is completed, canceled, or the link expires.', 8),
  ('Cancellations', 'Can I cancel my request?', 'Yes, contact dispatch by phone or through your tracking page as soon as possible if you no longer need assistance.', 9),
  ('Safety', 'What should I do while waiting?', 'Stay in a safe, visible location away from moving traffic whenever possible, and keep your hazard lights on.', 10)
on conflict do nothing;

insert into blog_categories (slug, name) values
  ('roadside-safety', 'Roadside Safety'),
  ('vehicle-maintenance', 'Vehicle Maintenance'),
  ('tire-tips', 'Tire Tips'),
  ('battery-tips', 'Battery Tips'),
  ('emergency-preparation', 'Emergency Preparation'),
  ('texas-driving-tips', 'Texas Driving Tips'),
  ('company-updates', 'Company Updates')
on conflict (slug) do nothing;

insert into blog_posts (slug, title, excerpt, content, category_id, status, published_at, seo_title, seo_description) values
  (
    'demo-what-to-do-when-stranded',
    '[DEMO] What To Do the Moment You''re Stranded',
    'Demo article — replace via the admin Blog editor. A short checklist for the first two minutes after a breakdown.',
    E'This is placeholder content generated for a fresh TRA install.\n\n1. Move somewhere safe if you can do so without crossing traffic.\n2. Turn on your hazard lights.\n3. Share your exact location when you request help.\n\nReplace this article from the admin dashboard before publishing the site.',
    (select id from blog_categories where slug = 'roadside-safety'),
    'draft',
    null,
    '[DEMO] What To Do When Stranded — TRA',
    'Demo blog post — replace before launch.'
  )
on conflict (slug) do nothing;

insert into site_settings (key, value) values
  ('demo_mode_banner', '{"enabled": true, "message": "This install is running on seed/demo data. Connect Supabase, Google Maps, Twilio, and Resend to go live."}'),
  ('dispatch_notification_email', '"info@texasroadside-assistance.com"'),
  ('unaccepted_request_timeout_minutes', '10')
on conflict (key) do update set value = excluded.value;

-- NOTE: gallery_items and videos are intentionally left empty in seed data —
-- the spec requires real photos/video, not stock or AI-generated placeholders.
-- Upload real assets via the admin Gallery/Video managers.
