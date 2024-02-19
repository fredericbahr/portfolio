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

import { Box, Flex } from "@chakra-ui/react";
import React from "react";

import Logo from "../Logo/Logo";
import { Navigation } from "../Navigation/Navigation";

interface IHeaderProps {
  children: React.ReactNode;
}

/**
 * Component for rendering the header of the application
 */
export const Header = () => {
  return (
    <Flex as="header" flexDirection="row    " width="full" padding={2} marginBottom={{ base: 0, lg: 2 }}>
      <Logo maxH={12} />
      <Navigation />
    </Flex>
  );
};
