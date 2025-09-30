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
  try {
    await mkdir(distRoot, { recursive: true });
    await copyFile(srcJpg, dstJpg);
    console.log("Copied OG image to:", dstJpg);
  } catch (e) {
    console.warn("Could not copy OG image:", e?.message);
  }
}

main();
