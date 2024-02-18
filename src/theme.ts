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

import { ColorModeWithSystem, extendTheme, type ThemeConfig, withDefaultColorScheme } from "@chakra-ui/react";

/**
 * The config of the theme
 */
const config: ThemeConfig = {
  initialColorMode: (localStorage.getItem("chakra-ui-color-mode") as ColorModeWithSystem) ?? "light",
  useSystemColorMode: false,
};

/**
 * The custom bordeaux chakra-ui theme
 */
export const bordeauxTheme = extendTheme(
  {
    config,
    colors: {
      brand: {
        50: "#FFB7B1",
        100: "#FF9E98",
        200: "#FF3E30",
        300: "#FB1100",
        400: "#C80D00",
        500: "#930A00",
        600: "#890900",
        700: "#7F0800",
        800: "#740800",
        900: "#6A0700",
      },
    },
  },
  withDefaultColorScheme({ colorScheme: "brand" }),
);

/**
 * The custom green chakra-ui theme
 */
export const greenTheme = extendTheme(
  {
    config,
    colors: {
      brand: {
        50: "#9ad1a1",
        100: "#86c88e",
        200: "#72bf7b",
        300: "#5db568",
        400: "#49ac55",
        500: "#35a342",
        600: "#30933b",
        700: "#2a8235",
        800: "#25722e",
        900: "#1b5221",
      },
    },
  },
  withDefaultColorScheme({ colorScheme: "brand" }),
);

/**
 * The custom lime chakra-ui theme
 */
export const limeTheme = extendTheme(
  {
    config,
    colors: {
      brand: {
        50: "#99f0c5",
        100: "#85ecb9",
        200: "#70e9ad",
        300: "#5ce6a1",
        400: "#47e396",
        500: "#33e08a",
        600: "#2eca7c",
        700: "#29b36e",
        800: "#249d61",
        900: "#1f8653",
      },
    },
  },
  withDefaultColorScheme({ colorScheme: "brand" }),
);
