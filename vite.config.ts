import { defineConfig } from "vite";
import netlify from "@netlify/vite-plugin";

// https://vite.dev/config/
export default defineConfig({
  plugins: [netlify()],
  // ssr: {
  //   resolve: {
  //     mainFields: ["src/index.ts"],
  //   },
  // },
  input: "src/index.ts",
  // build: {
  //   rolldownOptions: {
  //     input: "src/index.ts",
  //   },
  // },
  server: {
    cors: {
      // the origin you will be accessing via browser
      origin: "http://my-backend.example.com",
    },
  },
});
