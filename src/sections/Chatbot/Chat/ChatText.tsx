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

import { Fade, Flex, Text } from "@chakra-ui/react";
import { ReactNode } from "react";

interface ChatTextProps {
  children: ReactNode;
  owner: "bot" | "customer";
}

/**
 * Component to render the chat text
 * @param children - the text to be displayed
 * @param owner - the owner of the message
 * @returns
 */
export const ChatText = ({ children, owner }: ChatTextProps) => {
  return (
    <Fade in style={{ width: "100%" }}>
      <Flex width="full" justifyContent={owner === "bot" ? "start" : "end"}>
        <Text
          minHeight={6}
          width="fit-content"
          maxWidth="80%"
          boxShadow="0 0 2rem rgba(black, 0.075), 0rem 1rem 1rem -1rem rgba(black, 0.1)"
          backgroundColor={owner === "bot" ? "gray.200" : "black"}
          color={owner === "bot" ? "black" : "white"}
          borderRadius={owner === "bot" ? "1.125rem 1.125rem 1.125rem 0" : "1.125rem 1.125rem 0 1.125rem"}
          paddingX={4}
          paddingY={2}
          style={{ hyphens: "auto", wordWrap: "break-word" }}
        >
          {children}
        </Text>
      </Flex>
    </Fade>
  );
};
