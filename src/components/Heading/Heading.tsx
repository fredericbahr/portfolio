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
  id?: string;
}

/**
 * Component for displaying a heading section with a number and a dash
 */
export const Heading = ({ children, id }: HeadingProps) => {
  return (
    <ChakraHeading
      id={id}
      as="h2"
      fontSize={{ base: "3xl", lg: "4xl" }}
      display="flex"
      alignItems="center"
      justifyContent="center"
      width="full"
      marginTop={{ base: 4, lg: 12 }}
      style={{ counterIncrement: "heading 1" }}
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
        display: { base: "none", lg: "block" },
        width: "100%",
        height: 0.25,
        backgroundColor: "gray.300",
        marginLeft: { base: 4, lg: 8 },
        marginTop: 3,
        minWidth: { base: "unset", lg: "lg" },
      }}
    >
      {children}
    </ChakraHeading>
  );
};
