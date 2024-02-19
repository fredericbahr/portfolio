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

import { createContext, useContext, useState } from "react";

import { bordeauxTheme, greenTheme, limeTheme } from "../theme";

/** the provided color scheme */
interface ColorScheme {
  colorScheme: Record<string, unknown>;
  setColorScheme: (name: ColorSchemeName) => void;
}

/** human readable color scheme names */
export type ColorSchemeName = "bordeaux" | "green" | "lime";

/** Map between color scheme name and the color scheme */
const colorSchemeMap: Map<ColorSchemeName, Record<string, unknown>> = new Map<ColorSchemeName, Record<string, unknown>>([
  ["bordeaux", bordeauxTheme],
  ["green", greenTheme],
  ["lime", limeTheme],
]);

/**
 * The color scheme context to provide the current color schema and a method to update it
 */
const ColorSchemeContext = createContext<ColorScheme>({ colorScheme: bordeauxTheme } as ColorScheme);

/**
 * The color scheme provider for providing the current color scheme and a method to update it
 * @param children - the children to render
 */
export const ColorSchemeProvider = ({ children }: { children: React.ReactNode }): JSX.Element => {
  /**
   * Get the color scheme from local storage and if it is not set, return the bordeaux theme
   * @returns the color scheme from local storage or the bordeaux theme
   */
  const getColorSchemeFromLocalStorage = (): Record<string, unknown> | undefined => {
    const colorSchemeFromLocalStorage: string | null = localStorage.getItem("colorScheme");

    if (colorSchemeFromLocalStorage) {
      const colorSchemeName: string = JSON.parse(colorSchemeFromLocalStorage);
      return colorSchemeMap.get(colorSchemeName as ColorSchemeName);
    }

    return bordeauxTheme;
  };

  /** the current color scheme */
  const [colorScheme, setColorScheme] = useState<Record<string, unknown>>(
    getColorSchemeFromLocalStorage() as Record<string, unknown>,
  );

  /**
   * Handle the color scheme update by updating the local storage and the state
   * @param name - the new name of the color scheme
   */
  const handleColorSchemeUpdate = (name: ColorSchemeName): void => {
    localStorage.setItem("colorScheme", JSON.stringify(name));
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    setColorScheme(colorSchemeMap.get(name)!);
  };

  return (
    <ColorSchemeContext.Provider
      value={{ colorScheme, setColorScheme: (name: ColorSchemeName) => handleColorSchemeUpdate(name) }}
    >
      {children}
    </ColorSchemeContext.Provider>
  );
};

/**
 * Custom hook to access the current color scheme and update method
 * @returns
 */
export const useColorScheme = (): ColorScheme => useContext(ColorSchemeContext) as ColorScheme;
