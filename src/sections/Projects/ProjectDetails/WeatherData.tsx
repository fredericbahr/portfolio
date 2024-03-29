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

import { Box, Heading, HStack, Icon, Image, Link, Stack, Tag, Text, VStack } from "@chakra-ui/react";
import { GithubLogo } from "@phosphor-icons/react";
import { format } from "date-fns";
import { de } from "date-fns/locale";
import { useState } from "react";
import { useTranslation } from "react-i18next";

import screenshot1 from "../../../assets/projects/weather-data/screenshot-1.png";
import screenshot2 from "../../../assets/projects/weather-data/screenshot-2.png";
import screenshot3 from "../../../assets/projects/weather-data/screenshot-3.png";
import weatherDataHeroImage from "../../../assets/projects/weather-data/weather-data-hero.jpg";
import { ImageSlider } from "../../../components/ImageSlider";
import { ProjectDetailHeader } from "./ProjectDetailHeader";

/**
 * Component to display the XML weather data visualization project details
 */
export const WeatherData = () => {
  /** translation hook */
  const { t, i18n } = useTranslation();

  /** state to manage the slider index */
  const [sliderIndex, setSliderIndex] = useState<number>(0);

  /**
   * Handles the change of the slider index
   * @param index - the new index
   */
  const handleSliderIndexChange = (index: number) => {
    setSliderIndex(index);
  };

  return (
    <VStack width="full" alignItems="start" spacing={{ base: 2, lg: 8 }} marginTop={{ base: 4, lg: 16 }}>
      <ProjectDetailHeader
        focus={t("projects.details.weatherData.focus")}
        period={
          format(new Date("2022-04-01"), "MMM. yy", { locale: i18n.language === "de-DE" ? de : undefined }) +
          " - " +
          t("projects.details.present")
        }
        title={t("projects.projectTitles.weatherData")}
        subtitle={t("projects.details.weatherData.subtitle")}
      />

      <Image
        src={weatherDataHeroImage}
        width="full"
        maxHeight="50vh"
        objectFit="cover"
        marginTop={{ base: 4, lg: 0 }}
      />

      <HStack marginTop={8} spacing={8} width="full" alignItems="center">
        <Link href="https://github.com/fredericbahr/dbs_weatherdata" display="flex" gap={2}>
          <Icon as={GithubLogo} boxSize={{ base: 5, lg: 6 }} />
          <Text as="span">Github</Text>
        </Link>
      </HStack>

      <VStack marginTop={4} spacing={16} width="full" alignItems="start">
        <VStack width="full" alignItems="start" spacing={4}>
          <Heading as="h2" fontSize="3xl">
            {t("projects.details.goal")}
          </Heading>

          <Text>{t("projects.details.weatherData.goal")}</Text>
        </VStack>

        <VStack width="full" alignItems="start" spacing={4}>
          <Heading as="h2" fontSize="3xl">
            {t("projects.details.implementation")}
          </Heading>

          <Text>{t("projects.details.weatherData.implementation")}</Text>
        </VStack>

        <VStack width="full" alignItems="start" spacing={4}>
          <Heading as="h2" fontSize="3xl">
            {t("projects.details.technologies")}
          </Heading>

          <Stack direction={{ base: "column", lg: "row" }} width="full">
            <Tag justifyContent="center">XML</Tag>
            <Tag justifyContent="center">XML Schema Definiton</Tag>
            <Tag justifyContent="center">XSL Transformation</Tag>
            <Tag justifyContent="center">D3.js</Tag>
          </Stack>
        </VStack>

        <VStack width="full" alignItems="start" spacing={4}>
          <Heading as="h2" fontSize="3xl">
            {t("projects.details.screenshots")}
          </Heading>

          <Box alignSelf="center" width="full">
            <ImageSlider
              images={[screenshot1, screenshot2, screenshot3]}
              index={sliderIndex}
              onIndexChange={handleSliderIndexChange}
            ></ImageSlider>
          </Box>
        </VStack>
      </VStack>
    </VStack>
  );
};
