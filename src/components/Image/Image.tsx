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

import { Box, Image as ChakraImage, ImageProps } from "@chakra-ui/react";

/**
 * Custom image component
 */
export const Image = (props: ImageProps) => {
  return (
    <Box position="relative">
      <Box
        as="span"
        display="block"
        backgroundColor="brand.500"
        width="7rem"
        height="0.5rem"
        position="relative"
        marginBottom={2}
        _after={{
          content: "''",
          display: "block",
          backgroundColor: "brand.500",
          width: "full",
          height: "full",
          transform: "rotate(90deg)",
          position: "absolute",
          top: "3.25rem",
          left: "-3.75rem",
          marginRight: 2,
        }}
      ></Box>
      <ChakraImage {...props} position="relative" />
    </Box>
  );
};
