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

import { Heading, Text, useColorMode, VStack } from "@chakra-ui/react";

import { Button } from "../../components/Button/Button";
import { Spotlight } from "../../components/Spotlight";
import { useHeroKeywords } from "../../hooks/useHeroKeywords";

/** Component for displaying the hero section */
export const Hero = () => {
  /** the current color mode */
  const { colorMode } = useColorMode();

  /** keywords through which the hero section cycles */
  const keywords: string = useHeroKeywords();

  return (
    <>
      <VStack alignItems="start" marginTop={32} spacing={8}>
        <VStack alignItems="start" spacing={2}>
          <Text fontSize="xl">Hey, ich bin</Text>
          <Heading as="h1" fontSize="7xl" color="brand.500">
            {keywords}
          </Heading>
        </VStack>
        <Text fontSize="xl" maxWidth="50%">
          Ich entwickle leidenschaftlich innovative Lösungen zur Optimierung von Arbeitsabläufen und Steigerung der
          Produktivität der Nutzer durch benutzerfreundliche Webanwendungen.
        </Text>

        <Button>
          Kontakt
        </Button>
      </VStack>
      {colorMode === "dark" && <Spotlight />}
    </>
  );
};
