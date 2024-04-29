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

import { Flex, FormControl, FormErrorMessage, Grid, Heading, HStack, Icon, Link, Text, VStack } from "@chakra-ui/react";
import emailjs from "@emailjs/browser";
import { EnvelopeSimple } from "@phosphor-icons/react";
import React, { useState } from "react";
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

  /** state for the name input */
  const [name, setName] = useState("");

  /** state for the email input */
  const [email, setEmail] = useState("");

  /** state for the message input */
  const [message, setMessage] = useState("");

  /** state for the email error */
  const [emailError, setEmailError] = useState(false);

  /**
   * Verifies if the given email is valid
   * @param email - email to be validated
   * @returns true if email is valid, false otherwise
   */
  const verifyEmail = (email: string): boolean => {
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    return emailRegex.test(email);
  };

  /** Handles the change of the name input. */
  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  /** Handles the change of the email input. */
  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  /** Handles the change of the message input. */
  const handleMessageChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(event.target.value);
  };

  /** Handles the click on the send button. */
  const handleSendClick = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    event.stopPropagation();

    const templateParams = {
      from_completeName: name,
      from_emailcontact: email,
      message: message,
    };

    if (!verifyEmail(email)) {
      setEmailError(true);
      return;
    }

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
      );

      setEmailError(false);
    } catch (error) {
      console.error("Failed to send email", error);
    }
  };

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
          gridTemplateRows={{ base: "auto auto 1fr", lg: "1fr 1fr" }}
          columnGap={6}
          rowGap={4}
          width="full"
        >
          <Input
            placeholder={t("contact.form.name")}
            gridColumn="1"
            gridRow="1"
            value={name}
            onChange={handleNameChange}
          ></Input>

          <FormControl isInvalid={emailError} gridColumn="1" gridRow="2">
            <Input placeholder={t("contact.form.email")} value={email} onChange={handleEmailChange}></Input>
            {emailError && <FormErrorMessage>{t("contact.form.emailError")}</FormErrorMessage>}
          </FormControl>

          <Textarea
            placeholder={t("contact.form.message")}
            height="full"
            gridRow={{ base: "auto", lg: "1 / span 2" }}
            value={message}
            onChange={handleMessageChange}
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
