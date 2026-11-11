import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { sendSms } from "@/lib/notifications/sms";
import { isRateLimited } from "@/lib/utils/rate-limit";
import { dispatchPhoneE164 } from "@/lib/env";

const contactSchema = z.object({
  name: z.string().trim().min(2).max(120),
  phone: z
    .string()
    .trim()
    .min(10)
    .max(20)
    .regex(/^[0-9()+\-.\s]+$/),
  email: z.string().trim().email().max(200).optional().or(z.literal("")),
  message: z.string().trim().min(5).max(2000),
  companyWebsite: z.string().max(0).optional().or(z.literal("")),
});

/**
 * Plain ASCII for a text message: one curly quote, accent or emoji would
 * switch the whole SMS to UCS-2 and roughly halve the characters per part.
 */
function plain(value: string, max: number): string {
  const s = value
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[‘’]/g, "'")
    .replace(/[“”]/g, '"')
    .replace(/[–—]/g, "-")
    .replace(/[^\x20-\x7E]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  return s.length > max ? `${s.slice(0, max - 3)}...` : s;
}

// Contact-page messages are texted to dispatch, like every request: the
// owner wants text messages only, no email (2026-11-11).
export async function POST(req: NextRequest) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (isRateLimited(`contact:${ip}`, 5, 10 * 60 * 1000)) {
    return NextResponse.json({ error: "Too many messages. Please try again shortly." }, { status: 429 });
  }

  const body = await req.json().catch(() => null);
  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) return NextResponse.json({ error: "Please check the form and try again." }, { status: 400 });
  if (parsed.data.companyWebsite) return NextResponse.json({ ok: true });
  if (!dispatchPhoneE164) return NextResponse.json({ error: "Failed to send message." }, { status: 500 });

  const { name, phone, email, message } = parsed.data;
  const text = [
    "TRA CONTACT FORM",
    `From: ${plain(name, 60)} ${plain(phone, 20)}`,
    email ? `Email: ${plain(email, 80)}` : "",
    `Message: ${plain(message, 400)}`,
  ]
    .filter(Boolean)
    .join("\n");

  const result = await sendSms(dispatchPhoneE164, text);
  if (!result.ok) return NextResponse.json({ error: "Failed to send message." }, { status: 500 });
  return NextResponse.json({ ok: true });
}
