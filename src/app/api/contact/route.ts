import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { sendEmail } from "@/lib/notifications/email";
import { isRateLimited } from "@/lib/utils/rate-limit";
import { createAdminSupabaseClient } from "@/lib/supabase/admin";
import { isDemoMode, env } from "@/lib/env";

const contactSchema = z.object({
  name: z.string().min(2).max(120),
  email: z.string().email(),
  message: z.string().min(5).max(2000),
  companyWebsite: z.string().max(0).optional().or(z.literal("")),
});

export async function POST(req: NextRequest) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (isRateLimited(`contact:${ip}`, 5, 10 * 60 * 1000)) {
    return NextResponse.json({ error: "Too many messages. Please try again shortly." }, { status: 429 });
  }

  const body = await req.json().catch(() => null);
  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) return NextResponse.json({ error: "Please check the form and try again." }, { status: 400 });
  if (parsed.data.companyWebsite) return NextResponse.json({ ok: true });

  let dispatchEmail = env.dispatchEmail;
  if (!isDemoMode()) {
    try {
      const admin = createAdminSupabaseClient();
      const { data } = await admin.from("site_settings").select("value").eq("key", "dispatch_notification_email").maybeSingle();
      if (data?.value) dispatchEmail = data.value as string;
    } catch {
      // fall back to default
    }
  }

  const result = await sendEmail(
    dispatchEmail,
    `Contact form message from ${parsed.data.name}`,
    `From: ${parsed.data.name} <${parsed.data.email}>\n\n${parsed.data.message}`
  );

  if (!result.ok) return NextResponse.json({ error: "Failed to send message." }, { status: 500 });
  return NextResponse.json({ ok: true });
}
