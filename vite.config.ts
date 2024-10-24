/*
 * COPYRIGHT (C) 2024 Frederic Bahr
 *
 * The PROGRAM is protected by national and international copyright laws and conventions.
 * The copyright lies with Frederic Bahr, unless expressly stated otherwise.
 * All rights reserved.
 * Especially the reproduction and distribution of the PROGRAM without written permission of
 * the copyright owner is prohibited.
 *
 * See LICENSE for licensing information.
 */

import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          react: ["react", "react-dom"],
          "chakra-ui": ["@chakra-ui/react", "@emotion/react", "@emotion/styled"],
          "phosphor-icons": ["@phosphor-icons/react"],
        },
      },
    },
    minify: "esbuild",
  },
  server: {
    port: 3000,
  },
  plugins: [react()],
  base: "/portfolio/",
});
