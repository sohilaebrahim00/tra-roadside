import { spawn } from "node:child_process";
import ffmpegPath from "ffmpeg-static";
import ffprobeStatic from "ffprobe-static";

const FFMPEG = ffmpegPath;
const FFPROBE = ffprobeStatic.path;

function run(bin, args) {
  return new Promise((resolve, reject) => {
    const proc = spawn(bin, args, { windowsHide: true });
    let stdout = "";
    let stderr = "";
    proc.stdout.on("data", (d) => (stdout += d));
    proc.stderr.on("data", (d) => (stderr += d));
    proc.on("error", reject);
    proc.on("close", (code) => {
      if (code === 0) resolve({ stdout, stderr });
      else reject(new Error(`${bin} exited with code ${code}\n${stderr.slice(-2000)}`));
    });
  });
}

/** Probes duration + resolution via ffprobe. Works for MP4/WebM/MOV, unlike a hand-rolled parser. */
export async function probeVideo(filePath) {
  const args = [
    "-v", "error",
    "-select_streams", "v:0",
    "-show_entries", "stream=width,height",
    "-show_entries", "format=duration",
    "-of", "json",
    filePath,
  ];
  const { stdout } = await run(FFPROBE, args);
  const data = JSON.parse(stdout);
  const stream = data.streams?.[0] ?? {};
  const duration = data.format?.duration ? parseFloat(data.format.duration) : null;
  return {
    durationSeconds: duration && !Number.isNaN(duration) ? duration : null,
    width: stream.width ?? null,
    height: stream.height ?? null,
  };
}

/**
 * Encodes a web-optimized, muted H.264 MP4: yuv420p, faststart, capped
 * bitrate, trimmed duration, scaled/cropped to the target box.
 */
export async function encodeVideo({
  input,
  output,
  maxWidth,
  maxHeight,
  maxSeconds,
  crf = 27,
  maxrateKbps = 2000,
  crop = true,
}) {
  const scaleFilter = crop
    ? `scale=${maxWidth}:${maxHeight}:force_original_aspect_ratio=increase,crop=${maxWidth}:${maxHeight}`
    : `scale='min(${maxWidth},iw)':-2`;

  const args = [
    "-y",
    "-i", input,
    "-t", String(maxSeconds),
    "-an",
    "-vf", scaleFilter,
    "-c:v", "libx264",
    "-profile:v", "main",
    "-pix_fmt", "yuv420p",
    "-preset", "medium",
    "-crf", String(crf),
    "-maxrate", `${maxrateKbps}k`,
    "-bufsize", `${maxrateKbps * 2}k`,
    "-movflags", "+faststart",
    output,
  ];
  await run(FFMPEG, args);
}

/** Extracts a frame partway into the clip and saves it as a compressed WebP poster. */
export async function extractPosterWebp({ input, output, atSeconds = 1, width = 1280 }) {
  const args = [
    "-y",
    "-ss", String(atSeconds),
    "-i", input,
    "-frames:v", "1",
    "-vf", `scale='min(${width},iw)':-2`,
    "-c:v", "libwebp",
    "-quality", "78",
    output,
  ];
  await run(FFMPEG, args);
}

export { FFMPEG, FFPROBE };
