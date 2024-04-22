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

import { Heading, HStack, Text, useColorMode, VStack } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import { Button } from "../../components/Button/Button";
import { Spotlight } from "../../components/Spotlight";
import { useHeroKeywords } from "../../hooks/useHeroKeywords";

/** Component for displaying the hero section */
export const Hero = () => {
  /** translation hook */
  const { t } = useTranslation();

  /** navigation hook */
  const navigate = useNavigate();

  /** the current color mode */
  const { colorMode } = useColorMode();

  /** keywords through which the hero section cycles */
  const keywords: string = useHeroKeywords();

  /** handle contact button click */
  const handleHeroContactClick = () => {
    navigate("/contact");
  };

  return (
    <HStack width="full">
      <VStack alignItems="start" marginTop={{ base: 8, lg: 32 }} spacing={8}>
        <VStack alignItems="start" spacing={2}>
          <Text fontSize={{ base: "sm", lg: "xl" }}>{t("hero.intro")}</Text>
          <Heading as="h1" fontSize={{ base: "4xl", lg: "7xl" }} color="brand.500" wordBreak="break-word">
            {keywords}
          </Heading>
        </VStack>
        <Text fontSize={{ base: "md", lg: "xl" }} maxWidth={{ base: "full", lg: "50%" }}>
          {t("hero.subtitle")}
        </Text>

        <Button
          size={{ base: "md", lg: "lg" }}
          alignSelf={{ base: "center", lg: "start" }}
          label={t("hero.contact")}
          onClick={handleHeroContactClick}
        ></Button>
      </VStack>
      {colorMode === "dark" && <Spotlight />}
    </HStack>
  );
};
