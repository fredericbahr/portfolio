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

import { HStack, Heading, Image, Tag, Text, VStack } from "@chakra-ui/react";
import { format } from "date-fns";
import { de } from "date-fns/locale";
import { useTranslation } from "react-i18next";

import { ProjectDetailHeader } from "./ProjectDetailHeader";

/**
 * Component to display QuatschChatbot project details
 */
export const QuatschChatbot = () => {
  /** translation hook */
  const { t, i18n } = useTranslation();

  return (
    <VStack width="full" alignItems="start" spacing={8} marginTop={16}>
      <ProjectDetailHeader
        focus={t("projects.details.chatbot.focus")}
        period={
          format(new Date("2022-04-01"), "MMM. yy", { locale: i18n.language === "de-DE" ? de : undefined }) +
          " - " +
          t("projects.details.present")
        }
        title={t("projects.projectTitles.chatbot")}
        subtitle={t("projects.details.chatbot.subtitle")}
      />

      <Image
        src="https://s3-ap-south-1.amazonaws.com/static.awfis.com/wp-content/uploads/2017/07/07184649/ProjectManagement.jpg"
        width="full"
        maxHeight="35vh"
        objectFit="contain"
      />

      <VStack marginTop={16} spacing={16} width="full" alignItems="start">
        <VStack width="full" alignItems="start" spacing={4}>
          <Heading as="h2" fontSize="3xl">
            {t("projects.details.goal")}
          </Heading>

          <Text>{t("projects.details.chatbot.goal")}</Text>
        </VStack>

        <VStack width="full" alignItems="start" spacing={4}>
          <Heading as="h2" fontSize="3xl">
            {t("projects.details.implementation")}
          </Heading>

          <Text>{t("projects.details.chatbot.implementation")}</Text>
        </VStack>

        <VStack width="full" alignItems="start" spacing={4}>
          <Heading as="h2" fontSize="3xl">
            {t("projects.details.technologies")}
          </Heading>

          <HStack spacing={4}>
            <Tag>TypeScript</Tag>
            <Tag>Qanary</Tag>
            <Tag>Rasa</Tag>
            <Tag>RDF</Tag>
            <Tag>Docker</Tag>
          </HStack>
        </VStack>

        <VStack width="full" alignItems="start" spacing={4}>
          <Heading as="h2" fontSize="3xl">
            {t("projects.details.screenshots")}
          </Heading>
        </VStack>
      </VStack>
    </VStack>
  );
};
