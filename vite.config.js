import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Relative paths make the built files work on any GitHub Pages repository URL.
export default defineConfig({
  base: process.env.NODE_ENV === "production" ? "/brabu-bca-hub/" : "/",
  plugins: [react()],
});
