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

import { Heading, HStack, Icon, Image, Link, Stack, Tag, Text, VStack } from "@chakra-ui/react";
import { GithubLogo } from "@phosphor-icons/react";
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
    <VStack width="full" alignItems="start" spacing={{ base: 4, lg: 8 }} marginTop={{ base: 4, lg: 16 }}>
      <ProjectDetailHeader
        focus={t("projects.details.chatbot.focus")}
        period={
          format(new Date("2023-01-10"), "MMM. yy", { locale: i18n.language === "de-DE" ? de : undefined }) +
          " - " +
          format(new Date("2023-03-21"), "MMM. yy", { locale: i18n.language === "de-DE" ? de : undefined })
        }
        title={t("projects.projectTitles.chatbot")}
        subtitle={t("projects.details.chatbot.subtitle")}
      />

      <Image
        src="https://s3-ap-south-1.amazonaws.com/static.awfis.com/wp-content/uploads/2017/07/07184649/ProjectManagement.jpg"
        width="full"
        maxHeight="35vh"
        objectFit="contain"
        marginTop={{ base: 4, lg: 0 }}
      />

      <HStack marginTop={8} spacing={8} width="full" alignItems="center">
        <Link href="https://github.com/fredericbahr/quatsch-project-22" display="flex" gap={2}>
          <Icon as={GithubLogo} boxSize={{ base: 5, lg: 6 }} />
          <Text as="span">Github</Text>
        </Link>
      </HStack>

      <VStack marginTop={4} spacing={16} width="full" alignItems="start">
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

          <VStack width="full" alignItems="start">
            <Text>
              * {t("projects.details.chatbot.rasa-detail")}{" "}
              <Link href="https://rasa.com/" isExternal color="brand.500">
                Rasa
              </Link>
            </Text>
            <Text>
              ** {t("projects.details.chatbot.qanary-detail")}{" "}
              <Link href="https://github.com/WDAqua/Qanary" isExternal color="brand.500">
                Qanary
              </Link>
            </Text>
          </VStack>
        </VStack>

        <VStack width="full" alignItems="start" spacing={4}>
          <Heading as="h2" fontSize="3xl">
            {t("projects.details.technologies")}
          </Heading>

          <Stack direction={{ base: "column", lg: "row" }} width="full">
            <Tag justifyContent="center">TypeScript</Tag>
            <Tag justifyContent="center">Qanary</Tag>
            <Tag justifyContent="center">Rasa</Tag>
            <Tag justifyContent="center">RDF</Tag>
            <Tag justifyContent="center">Docker</Tag>
          </Stack>
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
