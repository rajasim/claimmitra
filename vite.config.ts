import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// @ts-ignore - Tell TS to ignore the property error
export default defineConfig({
  server: {
    preset: "vercel",
  },
});