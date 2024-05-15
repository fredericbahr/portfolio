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

import { HStack, Icon, Link, Stack, Text, useMediaQuery } from "@chakra-ui/react";
import { GithubLogo, LinkedinLogo } from "@phosphor-icons/react";
import { useTranslation } from "react-i18next";

import { BinaryIcon } from "../../components/BinaryIcon";
import { DarkModeSwitch } from "../../components/ColorThemePicker/DarkModeSwitch";

/**
 * Component for rendering the footer of the portfolio
 */
export const Footer = () => {
  /** translation hook */
  const { t } = useTranslation();

  /** flag indicating whether screen is mobile size */
  const [isMobile] = useMediaQuery("(max-width: 62em)");

  return (
    <Stack direction={{ base: "column", lg: "row" }} width="full" marginTop={6}>
      <Text
        fontSize="sm"
        display="flex"
        flexDirection={{ base: "column", lg: "row" }}
        alignItems={{ base: "center", lg: "start" }}
        gap={1}
        flex={1}
      >
        <Text as="span">© 2024</Text> {t("footer.text")} <BinaryIcon color="brand.500" />
      </Text>

      {isMobile ? (
        <HStack spacing={4} width="full" justifyContent="center">
          <Link aria-label="Github" isExternal href="https://github.com/fredericbahr">
            <Icon
              as={GithubLogo}
              boxSize={6}
              transition="all 0.2s ease-in-out"
              _hover={{
                color: "brand.500",
                transform: "translateY(-4px) scale(1.2)",
              }}
            />
          </Link>
          <Link aria-label="Linkedin" isExternal href="https://www.linkedin.com/in/frederic-bahr-446925251/">
            <Icon
              as={LinkedinLogo}
              boxSize={6}
              transition="all 0.2s ease-in-out"
              _hover={{
                color: "brand.500",
                transform: "translateY(-4px) scale(1.2)",
              }}
            />
          </Link>
          <DarkModeSwitch variant="ghost" justifySelf="end" />
        </HStack>
      ) : (
        <DarkModeSwitch variant="ghost" justifySelf="end" />
      )}
    </Stack>
  );
};
