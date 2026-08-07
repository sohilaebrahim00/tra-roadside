import { NextRequest, NextResponse } from "next/server";
import { randomUUID } from "node:crypto";
import { isDemoMode } from "@/lib/env";
import { createAdminSupabaseClient } from "@/lib/supabase/admin";

const MAX_BYTES = 8 * 1024 * 1024; // 8MB — client already compresses before upload
const ALLOWED_TYPES = ["image/jpeg", "image/png", "image/webp"];

/**
 * Accepts a single compressed image and stores it in the private
 * `request-photos` Supabase bucket under a temporary draft folder (moved to
 * the real request id once the request is created). In demo mode (no
 * Supabase configured) it validates the file and returns a local object
 * reference without persisting anything server-side.
 */
export async function POST(req: NextRequest) {
  const formData = await req.formData();
  const file = formData.get("file");
  const kind = String(formData.get("kind") ?? "vehicle");
  const draftId = String(formData.get("draftId") ?? randomUUID());

  if (!(file instanceof File)) {
    return NextResponse.json({ error: "No file provided" }, { status: 400 });
  }
  if (!ALLOWED_TYPES.includes(file.type)) {
    return NextResponse.json({ error: "Unsupported file type" }, { status: 415 });
  }
  if (file.size > MAX_BYTES) {
    return NextResponse.json({ error: "File too large" }, { status: 413 });
  }

  if (isDemoMode()) {
    return NextResponse.json({
      demo: true,
      storagePath: `demo/${draftId}/${randomUUID()}-${file.name}`,
      kind,
    });
  }

  try {
    const supabase = createAdminSupabaseClient();
    const path = `draft/${draftId}/${randomUUID()}-${file.name}`;
    const buffer = Buffer.from(await file.arrayBuffer());
    const { error } = await supabase.storage.from("request-photos").upload(path, buffer, {
      contentType: file.type,
      upsert: false,
    });
    if (error) throw error;

    return NextResponse.json({ demo: false, storagePath: path, kind });
  } catch (err) {
    console.error("upload failed", err);
    return NextResponse.json({ error: "Upload failed" }, { status: 500 });
  }
}
