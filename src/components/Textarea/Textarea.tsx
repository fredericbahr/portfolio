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

import { Textarea as ChakraTextarea, TextareaProps } from "@chakra-ui/react";

/**
 * Component for displaying a textarea.
 */
export const Textarea = (props: TextareaProps) => {
  return (
    <ChakraTextarea
      focusBorderColor="brand.500"
      size="lg"
      _placeholder={{
        fontSize: "sm",
      }}
      {...props}
    />
  );
};
