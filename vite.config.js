import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: "@components",
        replacement: resolve(__dirname, "src/components"),
      },
      { find: "@pages", replacement: resolve(__dirname, "src/pages") },
      { find: "@hooks", replacement: resolve(__dirname, "src/hooks") },
      { find: "@util", replacement: resolve(__dirname, "src/util") },
      { find: "@services", replacement: resolve(__dirname, "src/services") },
      { find: "@css", replacement: resolve(__dirname, "src/css") },
    ],
  },
});
