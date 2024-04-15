/*
 * COPYRIGHT (C) 2023 Frederic Bahr
 *
 * The PROGRAM is protected by national and international copyright laws and conventions.
 * The copyright lies with Frederic Bahr, unless expressly stated otherwise.
 * All rights reserved.
 * Especially the reproduction and distribution of the PROGRAM without written permission of
 * the copyright owner is prohibited.
 *
 * See LICENSE for licensing information.
 */

import { Divider, HStack, Link, List, ListItem, useColorModeValue,VStack } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

import { ColorThemePicker } from "../../../components/ColorThemePicker/ColorThemePicker";
import { LanguageSwitcher } from "../../../components/LanguageSwitcher";

/**
 * Component for rendeirng the mobile navigation.
 */
export const MobileNavigation = () => {
  /** translation hook */
  const { t } = useTranslation();

  /** color for the divider */
  const dividerColor = useColorModeValue("gray.500", "gray.400");

  return (
    <VStack spacing={3}>
      <List alignSelf="start" spacing={3} fontSize="large">
        <ListItem style={{ counterIncrement: "navitem 1" }}>
          <Link
            href="/#about"
            _before={{
              content: "'0' counter(navitem) '.'",
              marginRight: 1,
              color: "brand.500",
              fontSize: "xs",
            }}
          >
            {t("navigation.about")}
          </Link>
        </ListItem>
        <ListItem style={{ counterIncrement: "navitem 1" }}>
          <Link
            href="/#experience"
            _before={{
              content: "'0' counter(navitem) '.'",
              marginRight: 1,
              color: "brand.500",
              fontSize: "xs",
            }}
          >
            {t("navigation.experience")}
          </Link>
        </ListItem>
        <ListItem style={{ counterIncrement: "navitem 1" }}>
          <Link
            href="/#projects"
            _before={{
              content: "'0' counter(navitem) '.'",
              marginRight: 1,
              color: "brand.500",
              fontSize: "xs",
            }}
          >
            {t("navigation.projects")}
          </Link>
        </ListItem>
        <ListItem style={{ counterIncrement: "navitem 1" }}>
          <Link
            href="/contact"
            _before={{
              content: "'0' counter(navitem) '.'",
              marginRight: 1,
              color: "brand.500",
              fontSize: "xs",
            }}
          >
            {t("navigation.contact")}
          </Link>
        </ListItem>
      </List>

      <Divider borderColor={dividerColor} />

      <HStack spacing={8}>
        <ColorThemePicker />
        <LanguageSwitcher />
      </HStack>
    </VStack>
  );
};
