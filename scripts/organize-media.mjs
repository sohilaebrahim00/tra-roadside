#!/usr/bin/env node
/**
 * Reads raw video files from /media-source/ (project root — gitignored,
 * never deployed), compresses each into a web-optimized MP4 (+ mobile
 * variant where useful) under public/media/videos/<category>/, extracts a
 * WebP poster, and (re)generates src/data/generated-media.json — the
 * manifest src/data/media-registry.ts reads at build/runtime.
 *
 * Usage:
 *   node scripts/organize-media.mjs           compress + organize + write manifest
 *   node scripts/organize-media.mjs --scan    dry run: report only, no encoding, no writes
 *   node scripts/organize-media.mjs --report  print the report from the existing manifest only
 *
 * package.json:
 *   "media:organize": "node scripts/organize-media.mjs"
 *   "media:scan":     "node scripts/organize-media.mjs --scan"
 *   "media:report":   "node scripts/organize-media.mjs --report"
 */

import { readdir, stat, rename, readFile, writeFile, mkdir } from "node:fs/promises";
import path from "node:path";
import crypto from "node:crypto";
import { fileURLToPath } from "node:url";
import { probeVideo, encodeVideo, extractPosterWebp } from "./media-lib/ffmpeg.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const SOURCE_DIR = path.join(ROOT, "media-source");
const VIDEOS_DIR = path.join(ROOT, "public/media/videos");
const POSTERS_DIR = path.join(VIDEOS_DIR, "posters");
const MANIFEST_JSON = path.join(ROOT, "src/data/generated-media.json");
const MANIFEST_TS = path.join(ROOT, "src/data/generated-media.ts");
const PLACEMENT_REPORT = path.join(ROOT, "docs/MEDIA_PLACEMENT_REPORT.md");

const SCAN_ONLY = process.argv.includes("--scan");
const REPORT_ONLY = process.argv.includes("--report");

const CATEGORY_PREFIXES = {
  hero: "hero-",
  service: "service-",
  background: "background-",
  scroll: "scroll-",
  letter: "letter-",
  gallery: "gallery-",
  tracking: "tracking-",
  about: "about-",
  mobile: "mobile-",
};
const CATEGORY_FOLDERS = {
  hero: "hero",
  service: "services",
  background: "backgrounds",
  scroll: "scroll-reveals",
  letter: "letter-masks",
  gallery: "gallery",
  tracking: "tracking",
  about: "about",
  mobile: "mobile",
  unassigned: "unassigned",
};
const SUPPORTED_EXTENSIONS = [".mp4", ".webm", ".mov"];
const HARD_MAX_BYTES = 8 * 1024 * 1024; // 8MB — never publish above this
const TARGET_MAX_BYTES = 6 * 1024 * 1024; // ~2-6MB target band

// Per-category encode profile. Desktop crops to a 16:9-ish box (center
// crop — see MEDIA_GUIDE.md for why portrait source cropped to a landscape
// placement is a best-effort automated composition, not a substitute for a
// human edit on final production footage). Mobile keeps the source's
// natural portrait aspect (usually just a downscale, not a crop).
const ENCODE_PROFILES = {
  hero: { maxSeconds: 10, desktop: { w: 1280, h: 720 }, mobile: { w: 720, h: 1280 }, crf: 26, maxrateKbps: 2200 },
  background: { maxSeconds: 8, desktop: { w: 1280, h: 720 }, mobile: { w: 720, h: 1280 }, crf: 27, maxrateKbps: 1800 },
  scroll: { maxSeconds: 8, desktop: { w: 1280, h: 720 }, mobile: { w: 720, h: 1280 }, crf: 27, maxrateKbps: 1800 },
  letter: { maxSeconds: 8, desktop: { w: 1200, h: 340 }, mobile: null, crf: 28, maxrateKbps: 1500 },
  service: { maxSeconds: 8, desktop: { w: 960, h: 720 }, mobile: { w: 720, h: 960 }, crf: 27, maxrateKbps: 1600 },
  gallery: { maxSeconds: 15, desktop: { w: 1280, h: 720 }, mobile: null, crf: 26, maxrateKbps: 2500 },
  tracking: { maxSeconds: 15, desktop: { w: 1280, h: 720 }, mobile: null, crf: 26, maxrateKbps: 2500 },
  about: { maxSeconds: 18, desktop: { w: 1280, h: 720 }, mobile: null, crf: 26, maxrateKbps: 2500 },
  mobile: { maxSeconds: 8, desktop: null, mobile: { w: 720, h: 1280 }, crf: 27, maxrateKbps: 1600 },
  unassigned: { maxSeconds: 10, desktop: { w: 1280, h: 720 }, mobile: { w: 720, h: 1280 }, crf: 27, maxrateKbps: 1800 },
};

const DEFAULT_PLAYBACK = {
  hero: { autoplay: true, muted: true, loop: true, playsInline: true },
  background: { autoplay: true, muted: true, loop: true, playsInline: true },
  scroll: { autoplay: false, muted: true, loop: true, playsInline: true },
  letter: { autoplay: false, muted: true, loop: true, playsInline: true },
  service: { autoplay: false, muted: true, loop: true, playsInline: true },
  gallery: { autoplay: false, muted: true, loop: false, playsInline: true },
  tracking: { autoplay: false, muted: true, loop: false, playsInline: true },
  about: { autoplay: false, muted: true, loop: false, playsInline: true },
  mobile: { autoplay: true, muted: true, loop: true, playsInline: true },
  unassigned: { autoplay: false, muted: true, loop: false, playsInline: true },
};

function slugify(value) {
  return value
    .toLowerCase()
    .replace(/\.[^.]+$/, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function titleFromSlug(slug, category) {
  const prefix = CATEGORY_PREFIXES[category];
  const withoutPrefix = prefix && slug.startsWith(slugify(prefix)) ? slug.slice(slugify(prefix).length).replace(/^-/, "") : slug;
  const words = withoutPrefix.split("-").filter(Boolean);
  if (words.length === 0) return "Untitled clip";
  return words.map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
}

function detectCategory(filename) {
  const lower = filename.toLowerCase();
  for (const [category, prefix] of Object.entries(CATEGORY_PREFIXES)) {
    if (lower.startsWith(prefix)) return category;
  }
  return "unassigned";
}

async function fingerprint(filePath, sizeBytes) {
  const fh = await (await import("node:fs/promises")).open(filePath, "r");
  try {
    const len = Math.min(65536, sizeBytes);
    const buf = Buffer.alloc(len);
    await fh.read(buf, 0, len, 0);
    return crypto.createHash("sha1").update(buf).update(String(sizeBytes)).digest("hex").slice(0, 16);
  } finally {
    await fh.close();
  }
}

async function ensureDirs() {
  await mkdir(SOURCE_DIR, { recursive: true });
  await mkdir(POSTERS_DIR, { recursive: true });
  for (const folder of Object.values(CATEGORY_FOLDERS)) {
    await mkdir(path.join(VIDEOS_DIR, folder), { recursive: true });
  }
  await mkdir(path.dirname(MANIFEST_JSON), { recursive: true });
  await mkdir(path.dirname(PLACEMENT_REPORT), { recursive: true });
}

async function loadExistingManifest() {
  try {
    const raw = await readFile(MANIFEST_JSON, "utf-8");
    return JSON.parse(raw);
  } catch {
    return { generatedAt: new Date().toISOString(), videos: [] };
  }
}

function formatBytes(bytes) {
  if (bytes > 1024 * 1024) return `${(bytes / (1024 * 1024)).toFixed(1)}MB`;
  return `${Math.round(bytes / 1024)}KB`;
}

async function fileSize(p) {
  try {
    return (await stat(p)).size;
  } catch {
    return null;
  }
}

async function main() {
  await ensureDirs();
  const existingManifest = await loadExistingManifest();

  if (REPORT_ONLY) {
    printSummary([], existingManifest, false, true);
    await writePlacementReport(existingManifest);
    console.log(`Placement report refreshed: ${path.relative(ROOT, PLACEMENT_REPORT)}`);
    return;
  }

  const existingByFingerprint = new Map(existingManifest.videos.map((v) => [v.fingerprint ?? v.sourceFilename, v]));

  let entries = await readdir(SOURCE_DIR, { withFileTypes: true });
  entries = entries.filter((e) => e.isFile() && !e.name.startsWith("."));

  const report = [];
  const newManifestVideos = [];
  const seenIds = new Set();

  // Carry forward manifest entries whose source file is no longer present
  // (already processed on a previous run) as long as their published output
  // still exists on disk.
  for (const existing of existingManifest.videos) {
    const stillInSource = entries.some((e) => e.name === existing.sourceFilename);
    if (stillInSource) continue;
    const absolute = path.join(ROOT, "public", existing.source);
    if (await fileSize(absolute)) {
      newManifestVideos.push(existing);
      seenIds.add(existing.id);
    } else {
      report.push({ file: existing.sourceFilename, status: "removed", note: "Previously registered output no longer exists on disk — dropped from manifest." });
    }
  }

  for (const entry of entries) {
    const filename = entry.name;
    const ext = path.extname(filename).toLowerCase();
    const warnings = [];

    if (!SUPPORTED_EXTENSIONS.includes(ext)) {
      report.push({ file: filename, status: "skipped", note: `Unsupported extension "${ext}". Supported: ${SUPPORTED_EXTENSIONS.join(", ")}.` });
      continue;
    }

    const sourcePath = path.join(SOURCE_DIR, filename);
    const stats = await stat(sourcePath);
    const fp = await fingerprint(sourcePath, stats.size);

    const duplicate = existingByFingerprint.get(fp);
    if (duplicate && seenIds.has(duplicate.id)) {
      report.push({ file: filename, status: "duplicate", note: `Identical content already registered as "${duplicate.sourceFilename}" (id: ${duplicate.id}). Leaving this copy in media-source/ untouched — delete it manually if it's redundant.` });
      continue;
    }

    if (ext === ".mov") {
      warnings.push("MOV source — encoded to H.264 MP4 for delivery; if the original uses HEVC/ProRes, verify the transcode looks correct.");
    }

    const category = detectCategory(filename);
    if (category === "unassigned") {
      warnings.push('No recognized filename prefix (hero-, service-, background-, scroll-, letter-, gallery-, tracking-, about-, mobile-) — categorized as "unassigned" and placement left unset. Rename the file in media-source/ or edit its entry in src/data/generated-media.json directly to assign a category/placement.');
    }

    // Rename to a clean slug within media-source/ itself so the source of truth is also tidy.
    const cleanSourceName = slugify(filename) + ext;
    let canonicalSourcePath = sourcePath;
    if (cleanSourceName !== filename) {
      const target = path.join(SOURCE_DIR, cleanSourceName);
      if (!(await fileSize(target))) {
        await rename(sourcePath, target);
        canonicalSourcePath = target;
      }
    }

    const metadata = await probeVideo(canonicalSourcePath).catch(() => ({ durationSeconds: null, width: null, height: null }));
    const profile = ENCODE_PROFILES[category];
    const destFolder = path.join(VIDEOS_DIR, CATEGORY_FOLDERS[category]);
    const baseSlug = slugify(filename);

    const desktopFile = `${baseSlug}.mp4`;
    const desktopPath = path.join(destFolder, desktopFile);
    const mobileFile = profile.mobile ? `${baseSlug}-mobile.mp4` : null;
    const mobilePath = mobileFile ? path.join(destFolder, mobileFile) : null;
    const posterFile = `${baseSlug}.webp`;
    const posterPath = path.join(POSTERS_DIR, posterFile);

    let desktopSize = null;
    let mobileSize = null;

    if (!SCAN_ONLY) {
      if (profile.desktop) {
        await encodeVideo({
          input: canonicalSourcePath,
          output: desktopPath,
          maxWidth: profile.desktop.w,
          maxHeight: profile.desktop.h,
          maxSeconds: profile.maxSeconds,
          crf: profile.crf,
          maxrateKbps: profile.maxrateKbps,
        });
        desktopSize = await fileSize(desktopPath);
        if (desktopSize && desktopSize > HARD_MAX_BYTES) {
          warnings.push(`Encoded desktop output is ${formatBytes(desktopSize)}, above the 8MB hard limit — retrying at a lower bitrate.`);
          await encodeVideo({
            input: canonicalSourcePath,
            output: desktopPath,
            maxWidth: profile.desktop.w,
            maxHeight: profile.desktop.h,
            maxSeconds: Math.min(profile.maxSeconds, 6),
            crf: profile.crf + 4,
            maxrateKbps: Math.round(profile.maxrateKbps * 0.6),
          });
          desktopSize = await fileSize(desktopPath);
          if (desktopSize > HARD_MAX_BYTES) {
            warnings.push(`Still ${formatBytes(desktopSize)} after re-encoding at lower quality — treat as click-to-play only, do not autoplay this one until it's manually trimmed shorter.`);
          }
        }
      }
      if (profile.mobile) {
        await encodeVideo({
          input: canonicalSourcePath,
          output: mobilePath,
          maxWidth: profile.mobile.w,
          maxHeight: profile.mobile.h,
          maxSeconds: profile.maxSeconds,
          crf: profile.crf,
          maxrateKbps: Math.round(profile.maxrateKbps * 0.7),
        });
        mobileSize = await fileSize(mobilePath);
        if (mobileSize && mobileSize > HARD_MAX_BYTES) {
          warnings.push(`Encoded mobile output is ${formatBytes(mobileSize)}, above the 8MB hard limit — retrying at a lower bitrate.`);
          await encodeVideo({
            input: canonicalSourcePath,
            output: mobilePath,
            maxWidth: profile.mobile.w,
            maxHeight: profile.mobile.h,
            maxSeconds: Math.min(profile.maxSeconds, 6),
            crf: profile.crf + 4,
            maxrateKbps: Math.round(profile.maxrateKbps * 0.4),
          });
          mobileSize = await fileSize(mobilePath);
        }
      }
      await extractPosterWebp({ input: canonicalSourcePath, output: posterPath, atSeconds: Math.min(1, (metadata.durationSeconds ?? 2) / 2) });
    }

    if (desktopSize && desktopSize > TARGET_MAX_BYTES && desktopSize <= HARD_MAX_BYTES) {
      warnings.push(`Desktop output is ${formatBytes(desktopSize)} — above the ~2-6MB target band but under the 8MB hard limit.`);
    }

    const id = `${category}-${baseSlug}`;
    const carried = existingByFingerprint.get(fp) ?? {};
    const playback = DEFAULT_PLAYBACK[category];

    const videoItem = {
      id: carried.id ?? id,
      sourceFilename: filename,
      fingerprint: fp,
      source: profile.desktop ? `/media/videos/${CATEGORY_FOLDERS[category]}/${desktopFile}` : carried.source,
      mobileSource: profile.mobile ? `/media/videos/${CATEGORY_FOLDERS[category]}/${mobileFile}` : carried.mobileSource,
      poster: `/media/videos/posters/${posterFile}`,
      title: carried.title ?? titleFromSlug(baseSlug, category),
      altText: carried.altText ?? `${titleFromSlug(baseSlug, category)} — TRA roadside assistance`,
      category: carried.category ?? category,
      placement: carried.placement ?? "unplaced",
      serviceSlug: carried.serviceSlug,
      priority: carried.priority ?? 0,
      durationSeconds: profile.maxSeconds && metadata.durationSeconds ? Math.min(metadata.durationSeconds, profile.maxSeconds) : metadata.durationSeconds ?? undefined,
      aspectRatio: profile.desktop ? `${profile.desktop.w}:${profile.desktop.h}` : metadata.width && metadata.height ? `${metadata.width}:${metadata.height}` : undefined,
      width: profile.desktop?.w ?? metadata.width ?? undefined,
      height: profile.desktop?.h ?? metadata.height ?? undefined,
      autoplay: carried.autoplay ?? playback.autoplay,
      muted: carried.muted ?? playback.muted,
      loop: carried.loop ?? playback.loop,
      playsInline: carried.playsInline ?? playback.playsInline,
      objectPosition: carried.objectPosition ?? "center",
      enabled: carried.enabled ?? true,
      fallbackImage: carried.fallbackImage,
      // In --scan mode nothing was actually encoded, so there is no real
      // output size yet — report 0 rather than a stale/misleading carried
      // value (the old size would be the pre-compression figure, not a
      // prediction of the post-compression one).
      sizeBytes: SCAN_ONLY ? 0 : desktopSize ?? (await fileSize(desktopPath)) ?? 0,
      mobileSizeBytes: SCAN_ONLY ? undefined : mobileSize ?? (await fileSize(mobilePath ?? "")) ?? undefined,
      originalSizeBytes: stats.size,
      format: "mp4",
      warnings,
      registeredAt: carried.registeredAt ?? new Date().toISOString(),
    };

    newManifestVideos.push(videoItem);
    seenIds.add(videoItem.id);
    report.push({
      file: filename,
      status: SCAN_ONLY ? "would-encode" : "encoded",
      note: SCAN_ONLY
        ? `${category} → ${videoItem.source} (${formatBytes(stats.size)} original — size after encoding not yet known)${warnings.length ? ` — ${warnings.length} warning(s)` : ""}`
        : `${category} → ${videoItem.source} (${formatBytes(stats.size)} → ${videoItem.sizeBytes ? formatBytes(videoItem.sizeBytes) : "n/a"})${warnings.length ? ` — ${warnings.length} warning(s)` : ""}`,
      warnings,
    });
  }

  const manifest = { generatedAt: new Date().toISOString(), videos: newManifestVideos };

  if (!SCAN_ONLY) {
    await writeFile(MANIFEST_JSON, JSON.stringify(manifest, null, 2) + "\n", "utf-8");
    await ensureManifestTsWrapper();
    await writePlacementReport(manifest);
  }

  printSummary(report, manifest, SCAN_ONLY, false);
}

async function ensureManifestTsWrapper() {
  try {
    await stat(MANIFEST_TS);
    return;
  } catch {
    // create it
  }
  const contents = `// Auto-created once by scripts/organize-media.mjs — safe to edit further,
// this file will not be overwritten by future organizer runs.
import manifest from "./generated-media.json";
import type { GeneratedMediaManifest } from "./media-types";

export const GENERATED_MEDIA = manifest as GeneratedMediaManifest;
`;
  await writeFile(MANIFEST_TS, contents, "utf-8");
}

const PLACEMENT_DEFINITIONS = [
  { placement: "home-hero-background", page: "Home", section: "Hero", behavior: "Autoplay, muted, loop, playsInline — fades in behind headline" },
  { placement: "home-letter-mask", page: "Home", section: "Signature video-mask typography", behavior: "Autoplay within letter mask only, paused off-screen" },
  { placement: "home-circular-reveal", page: "Home", section: "Circular scroll-reveal (Services → How It Works)", behavior: "Plays once visible, expands with scroll via clip-path" },
  { placement: "home-service-highlight", page: "Home", section: "Services", behavior: "Poster by default, hover/in-view preview" },
  { placement: "home-tracking-preview", page: "Home", section: "Live tracking preview", behavior: "Optional supporting clip only — real map/data is never replaced by video" },
  { placement: "home-gallery-preview", page: "Home", section: "Gallery preview", behavior: "Poster card, opens lightbox on click" },
  { placement: "services-header", page: "Services", section: "Page header", behavior: "Autoplay, muted, loop background" },
  { placement: "service-card-preview", page: "Services", section: "Service cards", behavior: "Poster by default; hover (desktop) or in-view (mobile) preview, one at a time" },
  { placement: "service-detail-hero", page: "Service detail", section: "Hero", behavior: "Autoplay, muted, loop background" },
  { placement: "service-detail-clip", page: "Service detail", section: "Supporting clip", behavior: "Click-to-play in lightbox" },
  { placement: "how-it-works-reveal", page: "How It Works", section: "Circular reveal step", behavior: "Plays once step is active, does not block readability" },
  { placement: "about-story", page: "About", section: "Team / vehicles / operations", behavior: "Click-to-play in lightbox" },
  { placement: "tracking-info", page: "Track", section: "Informational panel (never replaces the live map)", behavior: "Click-to-play, muted" },
  { placement: "gallery-item", page: "Gallery / Videos", section: "Grid", behavior: "Poster card, lightbox on click" },
];

async function writePlacementReport(manifest) {
  const byPlacement = new Map();
  for (const v of manifest.videos) {
    if (!byPlacement.has(v.placement)) byPlacement.set(v.placement, []);
    byPlacement.get(v.placement).push(v);
  }

  const lines = [];
  lines.push("# Media Placement Report");
  lines.push("");
  lines.push(`Generated ${manifest.generatedAt} by \`scripts/organize-media.mjs\`. Do not hand-edit — re-run \`npm run media:organize\` after adding/removing files in \`media-source/\`.`);
  lines.push("");
  lines.push("## Defined placements");
  lines.push("");
  lines.push("| Placement | Page | Section | Playback behavior | Filled by | Mobile fallback | Status |");
  lines.push("|---|---|---|---|---|---|---|");
  for (const def of PLACEMENT_DEFINITIONS) {
    const videos = (byPlacement.get(def.placement) ?? []).filter((v) => v.enabled);
    const filledBy = videos.length ? videos.map((v) => v.sourceFilename).join(", ") : "—";
    const mobileFallback = videos.length
      ? videos.some((v) => v.mobileSource)
        ? "Dedicated mobile source"
        : "Poster / static fallback (no mobile-specific source set)"
      : "Branded static fallback (MediaFallback)";
    const status = videos.length ? "Active" : "Empty — showing fallback";
    lines.push(`| ${def.placement} | ${def.page} | ${def.section} | ${def.behavior} | ${filledBy} | ${mobileFallback} | ${status} |`);
  }

  const unplaced = manifest.videos.filter((v) => v.placement === "unplaced" || v.category === "unassigned");
  lines.push("");
  lines.push("## Unused / unplaced media");
  lines.push("");
  if (unplaced.length === 0) {
    lines.push("None.");
  } else {
    lines.push("| File | Category | Published source | Notes |");
    lines.push("|---|---|---|---|");
    for (const v of unplaced) {
      lines.push(`| ${v.sourceFilename} | ${v.category} | ${v.source} | ${v.warnings.join(" ") || "—"} |`);
    }
  }

  lines.push("");
  lines.push("## All registered videos (original → optimized)");
  lines.push("");
  lines.push("| ID | Original file | Original size | Optimized file | Optimized size | Mobile size | Duration | Resolution | Placement | Enabled | Warnings |");
  lines.push("|---|---|---|---|---|---|---|---|---|---|---|");
  for (const v of manifest.videos) {
    lines.push(
      `| ${v.id} | ${v.sourceFilename} | ${v.originalSizeBytes ? formatBytes(v.originalSizeBytes) : "unknown"} | ${v.source?.split("/").pop() ?? "—"} | ${v.sizeBytes ? formatBytes(v.sizeBytes) : "n/a"} | ${v.mobileSizeBytes ? formatBytes(v.mobileSizeBytes) : "—"} | ${v.durationSeconds ? v.durationSeconds.toFixed(1) + "s" : "unknown"} | ${v.width && v.height ? `${v.width}x${v.height}` : "unknown"} | ${v.placement} | ${v.enabled ? "yes" : "no"} | ${v.warnings.length ? v.warnings.join("<br/>") : "—"} |`
    );
  }
  lines.push("");

  await writeFile(PLACEMENT_REPORT, lines.join("\n"), "utf-8");
}

function printSummary(report, manifest, scanOnly, reportOnly) {
  console.log("");
  console.log(reportOnly ? "TRA media report (existing manifest only)" : scanOnly ? "TRA media scan (dry run — no encoding, no writes)" : "TRA media organize (compressing with ffmpeg)");
  console.log("=".repeat(60));
  if (!reportOnly) {
    if (report.length === 0) {
      console.log("No files found in media-source/ (besides dotfiles).");
    }
    for (const r of report) {
      console.log(`- [${r.status}] ${r.file}${r.note ? ` — ${r.note}` : ""}`);
    }
    console.log("");
  }
  console.log(`Registered videos in manifest: ${manifest.videos.length}`);
  const totalOriginal = manifest.videos.reduce((sum, v) => sum + (v.originalSizeBytes || 0), 0);
  const totalOptimized = manifest.videos.reduce((sum, v) => sum + (v.sizeBytes || 0) + (v.mobileSizeBytes || 0), 0);
  if (totalOriginal) {
    console.log(`Total original size: ${formatBytes(totalOriginal)} → total published size: ${formatBytes(totalOptimized)}`);
  }
  const oversized = manifest.videos.filter((v) => v.sizeBytes > HARD_MAX_BYTES || (v.mobileSizeBytes && v.mobileSizeBytes > HARD_MAX_BYTES));
  if (oversized.length > 0) {
    console.log(`\n⚠ ${oversized.length} video(s) still exceed the 8MB hard limit after encoding:`);
    for (const v of oversized) console.log(`  • ${v.sourceFilename} (desktop ${formatBytes(v.sizeBytes)}${v.mobileSizeBytes ? `, mobile ${formatBytes(v.mobileSizeBytes)}` : ""})`);
  }
  const warned = manifest.videos.filter((v) => v.warnings.length > 0);
  if (warned.length > 0) {
    console.log(`\nVideos with warnings: ${warned.length}`);
    for (const v of warned) console.log(`  • ${v.sourceFilename}: ${v.warnings.join(" | ")}`);
  }
  if (!scanOnly && !reportOnly) {
    console.log("");
    console.log(`Manifest written: ${path.relative(ROOT, MANIFEST_JSON)}`);
    console.log(`Placement report: ${path.relative(ROOT, PLACEMENT_REPORT)}`);
  }
  console.log("");
}

main().catch((err) => {
  console.error("media organize failed:", err);
  process.exit(1);
});
