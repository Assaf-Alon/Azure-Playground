import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const BASE_URL = process.env.BASE_URL || "https://xp3.azurewebsites.net/"

export default defineConfig({
  base: BASE_URL,
  plugins: [react()],
  preview: {
    port: 3000,
    strictPort: true,
  },
  server: {
    port: 3000,
    strictPort: true,
    host: true,
    origin: "http://0.0.0.0:3000",
  },
});