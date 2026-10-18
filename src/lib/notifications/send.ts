import "server-only";
import { isDemoMode } from "@/lib/env";
import { createAdminSupabaseClient } from "@/lib/supabase/admin";
import { getFallbackTemplate } from "@/lib/content/notification-templates";
import { renderTemplate } from "./render";
import { sendEmail, type SendEmailResult } from "./email";
import { sendSms, type SendSmsResult } from "./sms";
import { renderRichEmailHtml, renderRichEmailText, type RichEmail } from "./email-layout";
import type { NotificationChannel, NotificationEvent } from "@/lib/types/domain";

const RETRY_DELAYS_MS = [500, 1500]; // one immediate-ish retry, then one more before giving up

/**
 * Retries a transient provider failure up to twice with backoff before
 * recording it as failed. Permanent failures (`retryable: false` — bad
 * email/phone format, a provider validation error, an unsubscribed
 * recipient) are never retried, since repeating the exact same request
 * will only ever fail the exact same way.
 */
async function sendWithRetry<T extends SendEmailResult | SendSmsResult>(send: () => Promise<T>): Promise<T> {
  let last: T = await send();
  for (const delay of RETRY_DELAYS_MS) {
    if (last.ok || last.demo || last.retryable === false) return last;
    await new Promise((resolve) => setTimeout(resolve, delay));
    last = await send();
  }
  return last;
}

export interface NotifyParams {
  event: NotificationEvent;
  requestId?: string;
  channels: Partial<Record<NotificationChannel, string>>; // channel -> recipient
  vars: Record<string, string | number | undefined>;
  /**
   * Optional branded layout for the email channel. Receives the rendered
   * template body (still editable in the admin CMS) and returns the full
   * message, which is sent as HTML plus a matching plain-text part. SMS is
   * unaffected.
   */
  richEmail?: (renderedBody: string) => RichEmail;
}

/**
 * Sends a notification across one or more channels for a given event,
 * de-duplicating against notification_logs (never re-send the same
 * event+channel+recipient for the same request) and logging the outcome.
 * In demo mode, "sending" just logs to the server console.
 */
export async function notify({ event, requestId, channels, vars, richEmail }: NotifyParams) {
  const results: { channel: NotificationChannel; status: "sent" | "failed" | "skipped" }[] = [];

  const supabase = isDemoMode() ? null : createAdminSupabaseClient();

  for (const [channel, recipient] of Object.entries(channels) as [NotificationChannel, string | undefined][]) {
    if (!recipient) continue;

    if (supabase && requestId) {
      const { data: existing } = await supabase
        .from("notification_logs")
        .select("id")
        .eq("request_id", requestId)
        .eq("event", event)
        .eq("channel", channel)
        .eq("status", "sent")
        .limit(1)
        .maybeSingle();
      if (existing) {
        results.push({ channel, status: "skipped" });
        continue;
      }
    }

    let template = getFallbackTemplate(event, channel);
    if (supabase) {
      const { data } = await supabase
        .from("notification_templates")
        .select("subject, body, is_active")
        .eq("event", event)
        .eq("channel", channel)
        .maybeSingle();
      if (data?.is_active === false) {
        results.push({ channel, status: "skipped" });
        continue;
      }
      if (data) template = { event, channel, subject: data.subject, body: data.body };
    }

    if (!template) {
      results.push({ channel, status: "skipped" });
      continue;
    }

    const body = renderTemplate(template.body, vars);
    const subject = template.subject ? renderTemplate(template.subject, vars) : "";
    const rich = channel === "email" && richEmail ? richEmail(body) : null;

    const sendResult = await sendWithRetry(() =>
      channel === "email"
        ? rich
          ? sendEmail(recipient, subject, renderRichEmailText(rich), renderRichEmailHtml(rich))
          : sendEmail(recipient, subject, body)
        : sendSms(recipient, body)
    );

    if (supabase) {
      const { error: insertError } = await supabase.from("notification_logs").insert({
        request_id: requestId ?? null,
        event,
        channel,
        recipient,
        status: sendResult.ok ? "sent" : "failed",
        provider_message_id: sendResult.providerMessageId ?? null,
        error: sendResult.error ?? null,
      });
      // 23505 = unique_violation on notification_logs_idempotency_key
      // (request_id, event, channel) where status='sent' — a concurrent call
      // won the race between our pre-check and this insert. The message
      // still went out via this call, so it's correctly logged as sent
      // elsewhere; nothing further to do here.
      if (insertError && insertError.code !== "23505") {
        console.error("failed to write notification_logs row", insertError);
      }
    }

    results.push({ channel, status: sendResult.ok ? "sent" : "failed" });
  }

  return results;
}
