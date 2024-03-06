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

import { Container, VStack } from "@chakra-ui/react";

import { Header } from "../sections/Header/Header";
import { Socials } from "./Socials/Socials";

interface LayoutProps {
  children: React.ReactNode;
}

/** component for defining the layout of the portfolio */
export const Layout = ({ children }: LayoutProps) => {
  return (
    <VStack minHeight="100vh">
      <Header />
      <Container maxWidth="80%">{children}</Container>
      <Socials />
    </VStack>
  );
};
