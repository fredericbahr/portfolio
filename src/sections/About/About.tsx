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

import { Box, Grid, HStack, Image, List, ListIcon, ListItem, Text, VStack } from "@chakra-ui/react";
import { Terminal } from "@phosphor-icons/react";
import { useTranslation } from "react-i18next";

import { Heading } from "../../components/Heading/Heading";
import { technologies } from "./technologies";

/**
 * Component for displaying the about section
 */
export const About = () => {
  /** Translation hook */
  const { t } = useTranslation();
  return (
    <VStack width="full" alignItems="start" spacing={8}>
      <Heading id="about">{t("about.title")}</Heading>

      <Grid gap={8} width="full" gridTemplateColumns={{ base: "1fr", lg: "1fr auto" }} alignItems="center">
        <VStack spacing={4}>
          <Text>{t("about.introduction")}</Text>
          <Text>{t("about.main")}</Text>
          <Text>{t("about.volunteering")}</Text>
          <Text>{t("about.technologies")}</Text>

          <List display="grid" gridTemplateColumns="repeat(2, 1fr)" columnGap={8} rowGap={0.5} alignSelf="start">
            {technologies.map((technology) => (
              <ListItem display="flex" alignItems="center">
                <ListIcon as={Terminal} color="green.500" />
                <Text fontSize={{ base: "sm", lg: "lg" }}>{technology}</Text>
              </ListItem>
            ))}
          </List>
        </VStack>
        <Box display="flex" justifyContent="center">
          <Image
            src="https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Picture of me"
            maxHeight="lg"
          />
        </Box>
      </Grid>
    </VStack>
  );
};
