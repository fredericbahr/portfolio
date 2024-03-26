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

import { Heading, Image, VStack } from "@chakra-ui/react";
import { format } from "date-fns";
import { de } from "date-fns/locale";
import { useTranslation } from "react-i18next";

import weatherDataHeroImage from "../../../assets/projects/weather-data/weather-data-hero.jpg";
import { ProjectDetailHeader } from "./ProjectDetailHeader";

/**
 * Component to display the XML weather data visualization project details
 */
export const WeatherData = () => {
  /** translation hook */
  const { t, i18n } = useTranslation();

  return (
    <VStack width="full" alignItems="start" spacing={8} marginTop={16}>
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

      <Image src={weatherDataHeroImage} width="full" maxHeight="50vh" objectFit="cover" />

      <VStack marginTop={16} spacing={16} width="full" alignItems="start">
        <VStack width="full" alignItems="start">
          <Heading as="h2" fontSize="3xl">
            {t("projects.details.goal")}
          </Heading>
        </VStack>

        <VStack width="full" alignItems="start">
          <Heading as="h2" fontSize="3xl">
            {t("projects.details.implementation")}
          </Heading>
        </VStack>

        <VStack width="full" alignItems="start">
          <Heading as="h2" fontSize="3xl">
            {t("projects.details.technologies")}
          </Heading>
        </VStack>

        <VStack width="full" alignItems="start">
          <Heading as="h2" fontSize="3xl">
            {t("projects.details.screenshots")}
          </Heading>
        </VStack>
      </VStack>
    </VStack>
  );
};
