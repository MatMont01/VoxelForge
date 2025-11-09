import {
  readdir,
  stat,
  mkdir,
  copyFile,
  rename,
  unlink,
} from "node:fs/promises";
import { createReadStream } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORTFOLIO_DIR = path.resolve(
  __dirname,
  "..",
  "src",
  "assets",
  "Portafolio"
);
const BACKUP_DIR = path.resolve(PORTFOLIO_DIR, "__originals");

// Max display width; marquee cards never exceed ~420px width but we keep a larger source for clarity.
const TARGET_MAX_WIDTH = 1600; // px
const JPEG_QUALITY = 80; // 0-100
const WEBP_QUALITY = 80; // 0-100
const SKIP_THRESHOLD_BYTES = 400 * 1024; // If optimized image already below 400KB skip
const MARKER_FILE = path.resolve(PORTFOLIO_DIR, ".optimized.json");

async function loadMarker() {
  try {
    const data = await stat(MARKER_FILE);
    if (!data) return {};
    const raw = await import("node:fs/promises").then((m) =>
      m.readFile(MARKER_FILE, "utf-8")
    );
    return JSON.parse(raw);
  } catch {
    return {};
  }
}

async function saveMarker(obj) {
  try {
    await import("node:fs/promises").then((m) =>
      m.writeFile(MARKER_FILE, JSON.stringify(obj, null, 2))
    );
  } catch (e) {
    console.warn("[optimize-images] Could not persist marker file:", e.message);
  }
}

async function ensureBackup(originalPath) {
  await mkdir(BACKUP_DIR, { recursive: true });
  const base = path.basename(originalPath);
  const backupPath = path.resolve(BACKUP_DIR, base);
  try {
    // Only copy once
    await copyFile(originalPath, backupPath);
    return backupPath;
  } catch (e) {
    // Ignore if already exists
    return backupPath;
  }
}

async function optimizeImage(filePath, marker) {
  let sharp;
  try {
    const m = await import("sharp");
    sharp = m.default || m;
  } catch (e) {
    console.warn(
      "[optimize-images] sharp not installed, skipping optimization"
    );
    return null;
  }
  const ext = path.extname(filePath).toLowerCase();
  if (![".jpg", ".jpeg", ".png"].includes(ext)) return null;

  const origStats = await stat(filePath);
  const origSize = origStats.size;
  const img = sharp(filePath);
  const metadata = await img.metadata();
  let pipeline = img.clone();

  // Skip if already optimized (marker + size threshold)
  const base = path.basename(filePath);
  if (marker[base] && origSize <= SKIP_THRESHOLD_BYTES) {
    return {
      file: base,
      skipped: true,
      origSize,
      newSize: origSize,
      saved: 0,
      webp: marker[base].webp,
    };
  }

  if (metadata.width && metadata.width > TARGET_MAX_WIDTH) {
    pipeline = pipeline.resize(TARGET_MAX_WIDTH);
  }

  // Always backup original before overwrite
  await ensureBackup(filePath);

  // Overwrite original with optimized JPEG/PNG using atomic rename (Windows-friendly)
  if (ext === ".png") {
    await pipeline
      .png({ compressionLevel: 8, adaptiveFiltering: true })
      .toFile(filePath + ".tmp");
  } else {
    await pipeline
      .jpeg({ quality: JPEG_QUALITY, mozjpeg: true })
      .toFile(filePath + ".tmp");
  }
  // Replace original atomically (fallback to unlink+rename if needed)
  try {
    await rename(filePath + ".tmp", filePath);
  } catch (e) {
    try {
      await unlink(filePath);
    } catch {}
    await rename(filePath + ".tmp", filePath);
  }

  // Generate webp sibling if missing
  const webpOut = filePath.replace(ext, ".webp");
  try {
    await pipeline.webp({ quality: WEBP_QUALITY }).toFile(webpOut);
  } catch (e) {
    console.warn(
      "Failed generating webp for",
      path.basename(filePath),
      e.message
    );
  }

  // Gather new stats
  const newStats = await stat(filePath);
  const newSize = newStats.size;
  marker[base] = {
    optimizedAt: Date.now(),
    webp: path.basename(webpOut),
    size: newSize,
  };
  return {
    file: base,
    origSize,
    newSize,
    saved: origSize - newSize,
    webp: path.basename(webpOut),
    skipped: false,
  };
}

function formatBytes(bytes) {
  const units = ["B", "KB", "MB", "GB"];
  let i = 0;
  let val = bytes;
  while (val >= 1024 && i < units.length - 1) {
    val /= 1024;
    i++;
  }
  return `${val.toFixed(i === 0 ? 0 : 2)} ${units[i]}`;
}

async function main() {
  console.log("[optimize-images] Starting portfolio image optimization...");
  let files;
  try {
    files = await readdir(PORTFOLIO_DIR);
  } catch (e) {
    console.error(
      "[optimize-images] Could not read directory",
      PORTFOLIO_DIR,
      e.message
    );
    process.exit(0); // Non-fatal for build
  }
  const marker = await loadMarker();
  const targets = files.map((f) => path.resolve(PORTFOLIO_DIR, f));
  const results = [];
  for (const f of targets) {
    try {
      const r = await optimizeImage(f, marker);
      if (r) results.push(r);
    } catch (e) {
      console.warn(
        "[optimize-images] Failed optimizing",
        path.basename(f),
        e.message
      );
    }
  }
  await saveMarker(marker);
  if (!results.length) {
    console.log(
      "[optimize-images] No images optimized (maybe sharp missing or no matching files)."
    );
    return;
  }
  const totalSaved = results.reduce((acc, r) => acc + r.saved, 0);
  console.table(
    results.map((r) => ({
      file: r.file,
      original: formatBytes(r.origSize),
      optimized: formatBytes(r.newSize),
      saved: formatBytes(r.saved),
      webp: r.webp,
      skipped: r.skipped || false,
    }))
  );
  console.log(`[optimize-images] Total saved: ${formatBytes(totalSaved)}`);
}

main();
