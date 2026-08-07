import "server-only";
import twilio from "twilio";
import { env } from "@/lib/env";
import { toE164 } from "@/lib/utils/phone";

export interface SendSmsResult {
  ok: boolean;
  providerMessageId?: string;
  error?: string;
  demo?: boolean;
  /** false = permanent (bad number, unsubscribed, etc.) — retrying won't help. Defaults to true (safe to retry) when absent. */
  retryable?: boolean;
}

interface TwilioLikeError {
  status?: number;
  code?: number;
  message?: string;
}

/** Twilio's own 4xx codes for a request that will never succeed no matter how many times it's retried. */
const TWILIO_PERMANENT_ERROR_CODES = new Set([21211, 21214, 21608, 21610, 21612, 21614, 21617]);

function classifyTwilioError(err: unknown): { message: string; retryable: boolean } {
  const e = err as TwilioLikeError;
  const message = e?.message ?? (err instanceof Error ? err.message : "Unknown SMS error");
  if (e?.code && TWILIO_PERMANENT_ERROR_CODES.has(e.code)) return { message, retryable: false };
  if (typeof e?.status === "number") {
    // 429 is a rate limit — worth retrying after backoff. Other 4xx are validation-shaped and permanent.
    const retryable = e.status === 429 || e.status >= 500;
    return { message, retryable };
  }
  // No HTTP status at all usually means a network-level failure (timeout, DNS, etc.) — safe to retry.
  return { message, retryable: true };
}

export async function sendSms(to: string, body: string): Promise<SendSmsResult> {
  const normalized = toE164(to);
  if (!normalized) {
    return { ok: false, error: `Invalid phone number format: "${to}"`, retryable: false };
  }

  if (!env.twilioAccountSid || !env.twilioAuthToken || !env.twilioFromNumber) {
    console.info(`[demo sms] to=${normalized}\n${body}`);
    return { ok: true, demo: true };
  }

  try {
    const client = twilio(env.twilioAccountSid, env.twilioAuthToken);
    const message = await client.messages.create({ to: normalized, from: env.twilioFromNumber, body });
    return { ok: true, providerMessageId: message.sid };
  } catch (err) {
    const { message, retryable } = classifyTwilioError(err);
    return { ok: false, error: message, retryable };
  }
}
