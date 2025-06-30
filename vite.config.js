import { defineConfig } from "vite";

export default defineConfig({
  base: "/2d-repository",
  build: {
    minify: "terser",
  },
})