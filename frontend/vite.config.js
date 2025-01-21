import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  envDir: resolve(__dirname, ".."), // Tell Vite to look for .env one directory above
});
