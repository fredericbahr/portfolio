import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import shimReactPdf from "vite-plugin-shim-react-pdf";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: "build",
  },
  plugins: [react(), shimReactPdf()],
});
