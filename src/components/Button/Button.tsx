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

import {
  Box,
  Button as ChakraButton,
  ButtonProps as ChakraButtonProps,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useDencrypt } from "use-dencrypt-effect";

interface ButtonProps extends ChakraButtonProps {
  /** The label of the button */
  label: string;
}

/** Component for displaying the hero section */
export const Button = ({ label, ...rest }: ButtonProps) => {
  const backgroundColor = useColorModeValue("white", "gray.800");
  const hoverBackgroundColor = useColorModeValue("gray.800", "white");
  const hoverColor = useColorModeValue("white", "gray.800");

  const [dencryptText, dencrypt] = useDencrypt(label);

  useEffect(() => {
    dencrypt(label);
  }, [label, dencrypt]);

  return (
    <ChakraButton
      colorScheme="brand"
      size="lg"
      position="relative"
      borderRadius="none"
      overflow="hidden"
      backgroundColor="brand.500"
      _before={{
        content: "''",
        width: "20px",
        height: "20px",
        position: "absolute",
        transform: "rotate(45deg)",
        borderWidth: 2,
        backgroundColor: backgroundColor,
        bottom: "-10px",
        left: "-10px",
        overflow: "hidden",
        zIndex: 1,
      }}
      _after={{
        content: "''",
        width: "20px",
        height: "20px",
        position: "absolute",
        transform: "rotate(45deg)",
        borderWidth: 2,
        backgroundColor: backgroundColor,
        top: "-10px",
        right: "-10px",
        overflow: "hidden",
        zIndex: 1,
      }}
      _hover={{
        color: hoverColor,
      }}
      sx={{
        "&:hover > div": {
          left: 0,
        },
      }}
      onMouseEnter={() => dencrypt(label)}
      onMouseLeave={() => dencrypt(label)}
      {...rest}
    >
      <Text as="span" zIndex="1">
        {dencryptText}
      </Text>
      <Box
        className="btn-slide-effect"
        position="absolute"
        top={0}
        left="-100%"
        width="100%"
        height="100%"
        background={hoverBackgroundColor}
        transition="all 0.3s"
      />
    </ChakraButton>
  );
};
