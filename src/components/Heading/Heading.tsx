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

import { Heading as ChakraHeading } from "@chakra-ui/react";
import React from "react";

interface HeadingProps {
  children: React.ReactNode;
}

/**
 * Component for displaying a heading section with a number and a dash
 */
export const Heading = ({ children }: HeadingProps) => {
  return (
    <ChakraHeading
      as="h2"
      fontSize="4xl"
      display="flex"
      alignItems="center"
      justifyContent="center"
      width="full"
      style={{ counterIncrement: "heading 1" }}
      // Counter Index
      _before={{
        content: "'0' counter(heading) '.'",
        marginRight: 3,
        color: "brand.500",
        fontSize: "lg",
        alignSelf: "flex-end",
        marginBottom: 1.5,
      }}
      // Dash
      _after={{
        content: "''",
        display: "block",
        width: "100%",
        height: 0.25,
        backgroundColor: "gray.300",
        marginLeft: 8,
        marginTop: 3,
        minWidth: "lg",
      }}
    >
      {children}
    </ChakraHeading>
  );
};
