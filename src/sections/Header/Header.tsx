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

import { Flex, IconButton } from "@chakra-ui/react";

import Logo from "../../components/Logo/Logo";
import { Navigation } from "./Navigation/Navigation";

/**
 * Component for rendering the header of the application
 */
export const Header = () => {
  return (
    <Flex as="header" flexDirection="row" width="full" padding={2} marginBottom={{ base: 0, lg: 2 }}>
      <IconButton
        icon={<Logo maxH={12} />}
        aria-label="Logo"
        variant="ghost"
        marginLeft={6}
        onClick={() => window.location.reload()}
      />
      <Navigation />
    </Flex>
  );
};
