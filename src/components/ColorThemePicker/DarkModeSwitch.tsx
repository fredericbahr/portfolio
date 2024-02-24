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

import { Icon, IconButton, Tooltip, useColorMode } from "@chakra-ui/react";
import { Moon, Sun } from "@phosphor-icons/react";

/**
 * Component for displaying a dark mode switch
 */
export const DarkModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Tooltip label="Dark mode" aria-label="Dark mode switch" hasArrow openDelay={300}>
      <IconButton
        aria-label="Dark mode switch"
        icon={<Icon as={colorMode === "light" ? Moon : Sun} />}
        variant="outline"
        colorScheme="gray"
        onClick={toggleColorMode}
      />
    </Tooltip>
  );
};
