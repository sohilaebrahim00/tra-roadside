import "server-only";
import { Resend } from "resend";
import { env } from "@/lib/env";

export interface SendEmailResult {
  ok: boolean;
  providerMessageId?: string;
  error?: string;
  demo?: boolean;
  /** false = permanent (bad address, validation error, etc.) — retrying won't help. Defaults to true (safe to retry) when absent. */
  retryable?: boolean;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** Resend's `error.name` values that mean "this will never succeed," as opposed to a transient provider issue. */
const RESEND_PERMANENT_ERROR_NAMES = new Set([
  "validation_error",
  "missing_required_field",
  "invalid_parameter",
  "invalid_region",
  "invalid_from_address",
  "invalid_to_address",
  "not_found",
  "restricted_api_key",
]);

export async function sendEmail(to: string, subject: string, body: string): Promise<SendEmailResult> {
  if (!EMAIL_RE.test(to)) {
    return { ok: false, error: `Invalid email address format: "${to}"`, retryable: false };
  }

  if (!env.resendApiKey) {
    console.info(`[demo email] to=${to} subject="${subject}"\n${body}`);
    return { ok: true, demo: true };
  }

  try {
    const resend = new Resend(env.resendApiKey);
    const { data, error } = await resend.emails.send({
      from: env.resendFromEmail,
      to,
      subject,
      text: body,
    });
    if (error) {
      const retryable = !RESEND_PERMANENT_ERROR_NAMES.has(error.name);
      return { ok: false, error: error.message, retryable };
    }
    return { ok: true, providerMessageId: data?.id };
  } catch (err) {
    // Thrown (as opposed to returned) errors are typically network-level — safe to retry.
    return { ok: false, error: err instanceof Error ? err.message : "Unknown email error", retryable: true };
  }
}
