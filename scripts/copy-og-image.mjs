import { copyFile, mkdir } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function main() {
  const projectRoot = resolve(__dirname, "..");
  const distRoot = resolve(projectRoot, "dist");
  // Copy the rectangular JPG from src to dist root for OG/Twitter
  const srcJpg = resolve(
    projectRoot,
    "src",
    "assets",
    "VoxelForgeLogos",
    "voxel-forge-logo-rectangular.jpg"
  );
  const dstJpg = resolve(distRoot, "voxel-forge-logo-rectangular.jpg");
  const dstOg1200 = resolve(distRoot, "og-1200x630.jpg");
  // Generate PNG favicons from circular SVG
  const svgLogo = resolve(
    projectRoot,
    "src",
    "assets",
    "VoxelForgeLogos",
    "voxel-forge-logo-solo.svg"
  );
  const dstSvgFavicon = resolve(distRoot, "voxel-forge-icon.svg");
  const iconTargets = [
    { name: "favicon-16x16.png", size: 16 },
    { name: "favicon-32x32.png", size: 32 },
    { name: "favicon-48x48.png", size: 48 },
    { name: "apple-touch-icon.png", size: 180 },
    { name: "android-chrome-192x192.png", size: 192 },
    { name: "android-chrome-512x512.png", size: 512 },
  ];
  try {
    await mkdir(distRoot, { recursive: true });
    // Ensure SVG favicon is available at the site root
    await copyFile(svgLogo, dstSvgFavicon);
    console.log("Copied SVG favicon to:", dstSvgFavicon);

    // Always copy the original rectangular OG image
    await copyFile(srcJpg, dstJpg);
    console.log("Copied OG image to:", dstJpg);
    // Try to import sharp dynamically; fall back gracefully if unavailable
    let sharp;
    try {
      const m = await import("sharp");
      sharp = m?.default ?? m;
    } catch (e) {
      console.warn("sharp not installed; skipping image resizing:", e?.message);
    }

    if (sharp) {
      // Generate a 1200x630 variant for consistent cards
      await sharp(srcJpg)
        .resize(1200, 630, { fit: "cover" })
        .jpeg({ quality: 88, mozjpeg: true })
        .toFile(dstOg1200);
      console.log("Generated", dstOg1200);

      // Render favicons
      for (const t of iconTargets) {
        const out = resolve(distRoot, t.name);
        await sharp(svgLogo)
          .resize(t.size, t.size, {
            fit: "contain",
            background: { r: 0, g: 0, b: 0, alpha: 0 },
          })
          .png()
          .toFile(out);
        console.log("Generated", t.name);
      }
    } else {
      // Ensure og-1200x630.jpg exists even if not resized
      await copyFile(srcJpg, dstOg1200);
      console.log("sharp unavailable — copied", dstOg1200, "without resizing");
    }
  } catch (e) {
    console.warn("Could not copy OG image:", e?.message);
  }
}

main();
