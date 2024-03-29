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

import { Divider, Heading, HStack, Stack, Stat, StatHelpText, StatLabel, VStack } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

interface ProjectDetailHeaderProps {
  title: string;
  subtitle: string;
  period: string;
  focus: string;
}

/**
 * Component to display evolutionary algorithm for flow shop scheduling project details
 */
export const ProjectDetailHeader = ({ focus, period, subtitle, title }: ProjectDetailHeaderProps) => {
  /** hook for translating */
  const { t } = useTranslation();

  return (
    <Stack direction={{ base: "column", lg: "row" }} width="full" justifyContent="space-between" alignItems="start">
      <VStack width="full" maxWidth={{ base: "full", lg: "65%" }} alignItems="start" spacing={{ base: 6, lg: 4 }}>
        <Heading as="h1" color="brand.500" fontSize={{ base: "3xl", lg: "5xl" }}>
          {title}
        </Heading>
        <Heading as="h2" fontSize={{ base: "md", lg: "lg" }} fontWeight={400}>
          {subtitle}
        </Heading>
        <Divider
          borderTopWidth={{ base: "2px", lg: "3px" }}
          width={{ base: "full", lg: "10%" }}
          borderColor="brand.500"
        />
      </VStack>

      <Stack
        direction={{ base: "column", lg: "row" }}
        spacing={{ base: 4, lg: 16 }}
        whiteSpace="nowrap"
        marginTop={{ base: 4, lg: 0 }}
      >
        <Stat>
          <StatLabel>{t("projects.details.period")}</StatLabel>
          <StatHelpText margin={0} style={{ textWrap: "wrap" }}>
            {period}
          </StatHelpText>
        </Stat>

        <Stat>
          <StatLabel>{t("projects.details.focus")}</StatLabel>
          <StatHelpText margin={0} style={{ textWrap: "wrap" }}>
            {focus}
          </StatHelpText>
        </Stat>
      </Stack>
    </Stack>
  );
};
