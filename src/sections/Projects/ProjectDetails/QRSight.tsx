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
import { LinkIcon } from "@phosphor-icons/react";
import { format } from "date-fns";
import { de } from "date-fns/locale";
import { useState } from "react";
import { useTranslation } from "react-i18next";

import studio from "../../../assets/projects/qr-sight/studio.webp";
import viewer from "../../../assets/projects/qr-sight/viewer.webp";
import { ImageSlider } from "../../../components/ImageSlider";
import { ScrollRestoration } from "../../../components/ScrollRestoration/ScrollRestoration";
import { ProjectDetailHeader } from "./ProjectDetailHeader";

/**
 * Component to display qr-sight project details
 */
export const QRSight = () => {
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
    <>
      <ScrollRestoration />

      <VStack width="full" alignItems="start" spacing={{ base: 4, lg: 8 }} marginTop={{ base: 4, lg: 16 }}>
        <ProjectDetailHeader
          focus={t("projects.details.qrSight.focus")}
          period={
            format(new Date("2025-07-15"), "MMM. yy", { locale: i18n.language === "de-DE" ? de : undefined }) +
            " - " +
            t("projects.details.present")
          }
          title={t("projects.projectTitles.qrSight")}
          subtitle={t("projects.details.qrSight.subtitle")}
        />

        <Image src={studio} width="full" maxHeight="35vh" objectFit="contain" marginTop={{ base: 4, lg: 0 }} />

        <HStack marginTop={8} spacing={8} width="full" alignItems="center">
          <Link href="https://qr-sight.de" display="flex" gap={2}>
            <Icon as={LinkIcon} boxSize={{ base: 5, lg: 6 }} />
            <Text as="span">Website</Text>
          </Link>
        </HStack>

        <VStack marginTop={4} spacing={16} width="full" alignItems="start">
          <VStack width="full" alignItems="start" spacing={4}>
            <Heading as="h2" fontSize="3xl">
              {t("projects.details.goal")}
            </Heading>

            <Text>{t("projects.details.qrSight.goal")}</Text>
          </VStack>

          <VStack width="full" alignItems="start" spacing={4}>
            <Heading as="h2" fontSize="3xl">
              {t("projects.details.implementation")}
            </Heading>

            <Text>{t("projects.details.qrSight.implementation")}</Text>
          </VStack>

          <VStack width="full" alignItems="start" spacing={4}>
            <Heading as="h2" fontSize="3xl">
              {t("projects.details.technologies")}
            </Heading>

            <Stack direction={{ base: "column", lg: "row" }} width="full">
              <Tag justifyContent="center">TypeScript</Tag>
              <Tag justifyContent="center">React</Tag>
              <Tag justifyContent="center">Mantine</Tag>
              <Tag justifyContent="center">Express</Tag>
              <Tag justifyContent="center">Prisma</Tag>
              <Tag justifyContent="center">Mongo DB</Tag>
            </Stack>
          </VStack>
        </VStack>

        <VStack width="full" alignItems="start">
          <Heading as="h2" fontSize="3xl">
            {t("projects.details.screenshots")}
          </Heading>

          <Box alignSelf="center" width="full">
            <ImageSlider
              images={[studio, viewer]}
              index={sliderIndex}
              imageProps={{ maxWidth: { base: "80%", lg: "550px" } }}
              onIndexChange={handleSliderIndexChange}
            ></ImageSlider>
          </Box>
        </VStack>
      </VStack>
    </>
  );
};
