import { defineConfig } from "vite";
import netlify from "@netlify/vite-plugin";

import netlifyEdge from "@netlify/vite-plugin-netlify-edge";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    netlify({
      build: {
        enabled: true,
        edgeSSR: true,
      },
    }),
    netlifyEdge(),
  ],
  input: "src/index.ts",
  build: {
    ssr: true,
    rolldownOptions: {
      input: "src/index.ts",
    },
  },
});
