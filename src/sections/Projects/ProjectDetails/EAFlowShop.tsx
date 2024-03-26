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

import flowShopHeroImage from "../../../assets/projects/ea-flow-shop/flow-shop-hero.jpg";
import { ProjectDetailHeader } from "./ProjectDetailHeader";

/**
 * Component to display evolutionary algorithm for flow shop scheduling project details
 */
export const EAFlowShop = () => {
  /** translation hook */
  const { t, i18n } = useTranslation();

  return (
    <VStack width="full" alignItems="start" spacing={8} marginTop={16}>
      <ProjectDetailHeader
        focus={t("projects.details.eaFlowShop.focus")}
        period={
          format(new Date("2022-06-01"), "MMM. yy", { locale: i18n.language === "de-DE" ? de : undefined }) +
          " - " +
          format(new Date("2022-07-31"), "MMM. yy", { locale: i18n.language === "de-DE" ? de : undefined })
        }
        title={t("projects.projectTitles.eaFlowShop")}
        subtitle={t("projects.details.eaFlowShop.subtitle")}
      />

      <Image src={flowShopHeroImage} width="full" maxHeight="50vh" objectFit="cover" />

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
