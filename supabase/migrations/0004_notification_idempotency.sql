-- Idempotency key for outbound notifications: request ID + event + channel.
-- A partial unique index (only over rows that actually succeeded) lets a
-- previously-failed attempt be retried without being blocked by its own
-- failure row, while making it impossible to ever have two "sent" rows for
-- the same request+event+channel — the atomic backstop behind the
-- check-then-insert dedup already done in application code (src/lib/notifications/send.ts).
create unique index if not exists notification_logs_idempotency_key
  on notification_logs (request_id, event, channel)
  where status = 'sent';
