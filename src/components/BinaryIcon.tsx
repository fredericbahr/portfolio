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

import { Box, BoxProps } from "@chakra-ui/react";

/**
 * Component for rendering a binary icon
 */
export const BinaryIcon = (props: BoxProps) => {
  return (
    <Box
      as="svg"
      xmlns="http://www.w3.org/2000/svg"
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      display="inline"
      {...props}
    >
      <rect x="14" y="14" width="4" height="6" rx="2"></rect>
      <rect x="6" y="4" width="4" height="6" rx="2"></rect>
      <path d="M6 20h4"></path>
      <path d="M14 10h4"></path>
      <path d="M6 14h2v6"></path>
      <path d="M14 4h2v6"></path>
    </Box>
  );
};
