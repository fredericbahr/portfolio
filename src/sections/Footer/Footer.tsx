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

import { HStack, Text } from "@chakra-ui/react";

import { BinaryIcon } from "../../components/BinaryIcon";
import { DarkModeSwitch } from "../../components/ColorThemePicker/DarkModeSwitch";

/**
 * Component for rendering the footer of the portfolio
 */
export const Footer = () => {
  return (
    <HStack width="full" marginTop={6}>
      <Text fontSize="sm" display="flex" gap={1} flex={1}>
        © 2024 Entwickelt von Frederic Bahr mit <BinaryIcon color="brand.500" />
      </Text>

      <DarkModeSwitch variant="ghost" justifySelf="end" />
    </HStack>
  );
};
