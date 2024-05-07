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

import portfolioHeroImage from "../../../assets/projects/portfolio/portfolio-hero.jpg";
import { ProjectDetailHeader } from "./ProjectDetailHeader";

/**
 * Component to display Portfolio project details
 */
export const Portfolio = () => {
  /** translation hook */
  const { t, i18n } = useTranslation();

  return (
    <VStack width="full" alignItems="start" spacing={{ base: 4, lg: 8 }} marginTop={{ base: 4, lg: 16 }}>
      <ProjectDetailHeader
        focus={t("projects.details.portfolio.focus")}
        period={
          format(new Date("2024-03-01"), "MMM. yy", { locale: i18n.language === "de-DE" ? de : undefined }) +
          " - " +
          t("projects.details.present")
        }
        title={t("projects.projectTitles.portfolio")}
        subtitle={t("projects.details.portfolio.subtitle")}
      />

      <Image src={portfolioHeroImage} width="full" maxHeight="50vh" objectFit="cover" marginTop={{ base: 4, lg: 0 }} />

      <HStack marginTop={8} spacing={8} width="full" alignItems="center">
        <Link href="https://fredericbahr.github.io/portfolio/" display="flex" gap={2}>
          <Icon as={LinkIcon} boxSize={{ base: 5, lg: 6 }} />
          <Text as="span">Website</Text>
        </Link>

        <Link href="https://github.com/fredericbahr/portfolio" display="flex" gap={2}>
          <Icon as={GithubLogo} boxSize={{ base: 5, lg: 6 }} />
          <Text as="span">Github</Text>
        </Link>
      </HStack>

      <VStack marginTop={4} spacing={16} width="full" alignItems="start">
        <VStack width="full" alignItems="start" spacing={4}>
          <Heading as="h2" fontSize="3xl">
            {t("projects.details.goal")}
          </Heading>

          <Text>{t("projects.details.portfolio.goal")}</Text>
        </VStack>

        <VStack width="full" alignItems="start" spacing={4}>
          <Heading as="h2" fontSize="3xl">
            {t("projects.details.implementation")}
          </Heading>

          <Text>{t("projects.details.portfolio.implementation")}</Text>
        </VStack>

        <VStack width="full" alignItems="start" spacing={4}>
          <Heading as="h2" fontSize="3xl">
            {t("projects.details.technologies")}
          </Heading>

          <Stack direction={{ base: "column", lg: "row" }} width="full">
            <Tag justifyContent="center">TypeScript</Tag>
            <Tag justifyContent="center">React</Tag>
            <Tag justifyContent="center">Chakra UI</Tag>
            <Tag justifyContent="center">Framer Motion</Tag>
          </Stack>
        </VStack>
      </VStack>
    </VStack>
  );
};
