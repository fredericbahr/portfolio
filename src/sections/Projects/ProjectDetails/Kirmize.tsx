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
import { GithubLogo, Link as LinkIcon } from "@phosphor-icons/react";
import { format } from "date-fns";
import { de } from "date-fns/locale";
import { useTranslation } from "react-i18next";

import { ProjectDetailHeader } from "./ProjectDetailHeader";

/**
 * Component to display Kirmize project details
 */
export const Kirmize = () => {
  /** translation hook */
  const { t, i18n } = useTranslation();

  return (
    <VStack width="full" alignItems="start" spacing={{ base: 4, lg: 8 }} marginTop={{ base: 4, lg: 16 }}>
      <ProjectDetailHeader
        focus={t("projects.details.kirmize.focus")}
        period={
          format(new Date("2022-04-01"), "MMM. yy", { locale: i18n.language === "de-DE" ? de : undefined }) +
          " - " +
          t("projects.details.present")
        }
        title={t("projects.projectTitles.kirmize")}
        subtitle={t("projects.details.kirmize.subtitle")}
      />

      <Image
        src="https://s3-ap-south-1.amazonaws.com/static.awfis.com/wp-content/uploads/2017/07/07184649/ProjectManagement.jpg"
        width="full"
        maxHeight="35vh"
        objectFit="contain"
        marginTop={{ base: 4, lg: 0 }}
      />

      <HStack marginTop={8} spacing={8} width="full" alignItems="center">
        <Link href="" display="flex" gap={2}>
          <Icon as={LinkIcon} boxSize={{ base: 5, lg: 6 }} />
          <Text as="span">Website</Text>
        </Link>
      </HStack>

      <VStack marginTop={4} spacing={16} width="full" alignItems="start">
        <VStack width="full" alignItems="start" spacing={4}>
          <Heading as="h2" fontSize="3xl">
            {t("projects.details.goal")}
          </Heading>
        </VStack>

        <VStack width="full" alignItems="start" spacing={4}>
          <Heading as="h2" fontSize="3xl">
            {t("projects.details.implementation")}
          </Heading>
        </VStack>

        <VStack width="full" alignItems="start" spacing={4}>
          <Heading as="h2" fontSize="3xl">
            {t("projects.details.technologies")}
          </Heading>

          <Stack direction={{ base: "column", lg: "row" }} width="full">
            <Tag justifyContent="center">TypeScript</Tag>
            <Tag justifyContent="center">React</Tag>
            <Tag justifyContent="center">Chakra UI</Tag>
            <Tag justifyContent="center">Express</Tag>
            <Tag justifyContent="center">Prisma</Tag>
            <Tag justifyContent="center">Mongo DB</Tag>
          </Stack>
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
