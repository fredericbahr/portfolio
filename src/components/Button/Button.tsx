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

import { Button as ChakraButton, ButtonProps as ChakraButtonProps } from "@chakra-ui/react";

/** Component for displaying the hero section */
export const Button = (props: ChakraButtonProps) => {
  return <ChakraButton colorScheme="brand" size="lg" variant="outline" {...props} />;
};
