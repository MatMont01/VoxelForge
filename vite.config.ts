import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "/VoxelForge/", // Reemplaza "VoxelForge" con el nombre exacto de tu repositorio
  build: {
    outDir: "dist",
    assetsDir: "assets",
  },
});
