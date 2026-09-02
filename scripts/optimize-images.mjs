/**
 * Generates .webp siblings for the photographs in public/images/.
 *
 *   node scripts/optimize-images.mjs          # convert anything missing a .webp
 *   node scripts/optimize-images.mjs --force  # re-convert everything
 *
 * Quality is fixed at 76, which is the point where these particular photos
 * stop shedding visible detail. Nothing is resized: these files are small
 * (612×408, and one 408×612 portrait) and upscaling them would look cheap.
 * The script reports each file's native dimensions so the render slots in the
 * markup can be checked against them — no image should ever be displayed
 * wider than the number printed here.
 */
import { readdir, stat } from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import sharp from "sharp";

const IMAGES_DIR = path.join(process.cwd(), "public", "images");
const QUALITY = 76;
const SOURCE_EXT = new Set([".jpg", ".jpeg", ".png"]);
const force = process.argv.includes("--force");

async function exists(p) {
  try {
    await stat(p);
    return true;
  } catch {
    return false;
  }
}

async function main() {
  if (!(await exists(IMAGES_DIR))) {
    console.error(`No such directory: ${IMAGES_DIR}`);
    console.error("Place the photographs in public/images/ and re-run.");
    process.exit(1);
  }

  const entries = (await readdir(IMAGES_DIR)).filter((f) =>
    SOURCE_EXT.has(path.extname(f).toLowerCase())
  );

  if (entries.length === 0) {
    console.error(`No .jpg/.jpeg/.png files found in ${IMAGES_DIR}.`);
    process.exit(1);
  }

  let converted = 0;
  let skipped = 0;

  for (const file of entries.sort()) {
    const src = path.join(IMAGES_DIR, file);
    const out = path.join(IMAGES_DIR, `${path.parse(file).name}.webp`);

    const meta = await sharp(src).metadata();
    const orientation = meta.width >= meta.height ? "landscape" : "portrait";

    if (!force && (await exists(out))) {
      console.log(
        `skip   ${file.padEnd(34)} ${String(meta.width).padStart(4)}x${String(meta.height).padEnd(4)} ${orientation}  (.webp exists)`
      );
      skipped += 1;
      continue;
    }

    await sharp(src).webp({ quality: QUALITY }).toFile(out);
    const { size } = await stat(out);
    console.log(
      `write  ${file.padEnd(34)} ${String(meta.width).padStart(4)}x${String(meta.height).padEnd(4)} ${orientation}  -> ${path.basename(out)} (${(size / 1024).toFixed(0)} KB)`
    );
    converted += 1;
  }

  console.log(`\n${converted} converted, ${skipped} skipped, quality ${QUALITY}.`);
  console.log("Never render one of these wider than the pixel width printed above.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
