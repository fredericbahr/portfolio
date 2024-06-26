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

import { Icon, IconButton, IconButtonProps, Tooltip, useColorMode } from "@chakra-ui/react";
import { Moon, Sun } from "@phosphor-icons/react";
import { useTranslation } from "react-i18next";

/**
 * Component for displaying a dark mode switch
 */
export const DarkModeSwitch = (props: Partial<IconButtonProps>) => {
  const { t } = useTranslation();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Tooltip
      label={t(colorMode === "light" ? "navigation.themeSwitch.dark" : "navigation.themeSwitch.light")}
      aria-label="Dark mode switch"
      hasArrow
      openDelay={300}
    >
      <IconButton
        icon={<Icon as={colorMode === "light" ? Moon : Sun} boxSize={{ base: 6, lg: 5 }} />}
        variant="outline"
        colorScheme="gray"
        onClick={toggleColorMode}
        {...props}
        aria-label="Dark mode switch"
      />
    </Tooltip>
  );
};
