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

import { Flex, Grid, Heading, HStack, Icon, Link, Text, VStack } from "@chakra-ui/react";
import { EnvelopeSimple } from "@phosphor-icons/react";
import { useTranslation } from "react-i18next";

import { Button } from "../../components/Button/Button";
import { Input } from "../../components/Input/Input";
import { Textarea } from "../../components/Textarea/Textarea";

/**
 * Component for displaying the contact section.
 */
export const Contact = () => {
  /** translation hook */
  const { t } = useTranslation();

  /** Handles the click on the send button. */
  const handleSendClick = () => {};

  return (
    <VStack spacing={12} align="start" width="full" marginTop={{ base: 8, lg: 16 }}>
      <Heading>{t("contact.headline")}</Heading>

      <Flex width="full">
        <Text width={{ base: "full", lg: "65%" }} textAlign="start">
          {t("contact.subtext")}
        </Text>
      </Flex>

      <HStack spacing={6} width="full">
        <Icon as={EnvelopeSimple} width={6} height={6}></Icon>
        <Link href="mailto:fredericbahr1@gmail.com">fredericbahr1@gmail.com</Link>
      </HStack>

      <VStack spacing={4} width="full">
        <Text width="full" textAlign="start">
          {t("contact.form.headline")}
        </Text>
        <Grid
          gridTemplateColumns={{ base: "1fr", lg: "1fr 1fr" }}
          gridTemplateRows={{ base: "repeat(3, 1fr)", lg: "1fr 1fr" }}
          columnGap={6}
          rowGap={{ base: 0, lg: 4 }}
          width="full"
        >
          <Input placeholder={t("contact.form.name")} gridColumn="1" gridRow="1"></Input>
          <Input placeholder={t("contact.form.email")} gridColumn="1" gridRow="2"></Input>
          <Textarea
            placeholder={t("contact.form.message")}
            height="full"
            gridRow={{ base: "auto", lg: "1 / span 2" }}
          ></Textarea>
        </Grid>

        <Button
          label={t("contact.form.submit")}
          alignSelf={{ base: "center", lg: "end" }}
          onClick={handleSendClick}
        ></Button>
      </VStack>
    </VStack>
  );
};
