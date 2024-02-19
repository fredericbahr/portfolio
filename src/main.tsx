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

import "./index.css";

import { ColorModeScript } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App.tsx";
import { ColorSchemeProvider } from "./context/ColorSchemeContext.tsx";
import { bordeauxTheme } from "./theme.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ColorModeScript initialColorMode={bordeauxTheme.config.initialColorMode} />
    <ColorSchemeProvider>
      <App />
    </ColorSchemeProvider>
  </React.StrictMode>,
);
