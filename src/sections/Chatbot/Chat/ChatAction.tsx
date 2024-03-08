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

import { Button } from "@chakra-ui/react";
import { ReactNode } from "react";

interface IProps {
  children: ReactNode;
  handleAction: () => void;
}

/**
 * Component for rendering an action within the chat
 */
export const ChatAction = ({ children, handleAction }: IProps) => {
  return (
    <Button variant="outline" colorScheme="gray" onClick={handleAction}>
      {children}
    </Button>
  );
};
