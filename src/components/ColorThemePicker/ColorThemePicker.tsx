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

import {
  Box,
  HStack,
  Icon,
  IconButton,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Portal,
  Tooltip,
} from "@chakra-ui/react";
import { Palette } from "@phosphor-icons/react";

import { useColorScheme } from "../../context/ColorSchemeContext";
import { DarkModeSwitch } from "./DarkModeSwitch";

/** enum for mapping name to a color */
enum Color {
  Bordeaux = "#930A00",
  Green = "#35a342",
  Lime = "#33e08a",
}

/** enum mapping a name to the responding theme */
enum Theme {
  Bordeaux = "bordeaux",
  Green = "green",
  Lime = "lime",
}

/** enum mapping a display name to the responding theme */
enum ThemeName {
  Bordeaux = "Bordeaux",
  Green = "Grün",
  Lime = "Lime",
}

export const ColorThemePicker = () => {
  const { setColorScheme } = useColorScheme();

  /**
   * Handles the change of the theme
   * @param theme - the theme to change to
   */
  const handleThemeChange = (theme: Theme) => {
    setColorScheme(theme);
  };

  return (
    <Popover placement="bottom-end" closeOnEsc>
      <PopoverTrigger>
        <IconButton aria-label="Change color theme" icon={<Icon as={Palette} />} variant="outline" colorScheme="gray" />
      </PopoverTrigger>

      <Portal>
        <PopoverContent>
          <PopoverArrow />
          <PopoverHeader display="flex" alignItems="center">
            Passe die UI an <PopoverCloseButton />
          </PopoverHeader>
          <PopoverBody>
            <HStack alignItems="center" gap={4} wrap="wrap" width="full" justifyContent="space-evenly">
              <DarkModeSwitch />
              {Object.entries(Theme).map(([key, value]) => (
                <Tooltip label={ThemeName[key as keyof typeof ThemeName]} aria-label="Violett" hasArrow key={value}>
                  <Box
                    backgroundColor={Color[key as keyof typeof Color]}
                    minWidth="2rem"
                    minHeight="2rem"
                    borderRadius="full"
                    ms={"0 !important"}
                    _hover={{ cursor: "pointer" }}
                    onClick={() => handleThemeChange(value as Theme)}
                  ></Box>
                </Tooltip>
              ))}
            </HStack>
          </PopoverBody>
        </PopoverContent>
      </Portal>
    </Popover>
  );
};
