-- Owner, 2026-11-07: no arrival figure anywhere. The nearest available driver is
-- sent as soon as possible.
update faqs
set answer = 'We send the nearest available driver as soon as possible.'
where question = 'How long until a driver arrives?';
