import { defineConfig } from "vite";
import netlify from "@netlify/vite-plugin";

import netlifyEdge from "@netlify/vite-plugin-netlify-edge";

// https://vite.dev/config/
export default defineConfig({
  plugins: [netlify(), netlifyEdge()],
  input: "src/index.ts",
  isBundled: true,
  build: {
    rolldownOptions: {
      input: "src/index.ts",
    },
  },
});
