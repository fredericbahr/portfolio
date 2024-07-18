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

import { Box, Link, ListItem, OrderedList } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { NavigateFunction, useNavigate } from "react-router-dom";

import { ColorThemePicker } from "../../../components/ColorThemePicker/ColorThemePicker";
import { LanguageSwitcher } from "../../../components/LanguageSwitcher";

/**
 * Component for rendering the navigation of the application
 */
export const Navigation = () => {
  /** translation hook */
  const { t } = useTranslation();

  /** navigation hook */
  const navigate: NavigateFunction = useNavigate();

  /** handle contact button click and navigate to contact section */
  const handleContactClick = () => {
    navigate("/contact");
  };

  return (
    <Box as="nav" flex={1} display="flex" justifyContent="end" alignItems="center" marginRight={8} gap={8}>
      <OrderedList display="flex" flexDirection="row" gap={8} style={{ counterReset: "navitem 0" }}>
        <ListItem style={{ counterIncrement: "navitem 1" }} listStyleType="none">
          <Link
            href="/#about"
            _hover={{
              textDecoration: "none",
              color: "brand.500",
            }}
            _before={{
              content: "'0' counter(navitem) '.'",
              marginRight: 2,
              color: "brand.500",
              fontSize: "sm",
            }}
          >
            {t("navigation.about")}
          </Link>
        </ListItem>
        <ListItem style={{ counterIncrement: "navitem 1" }} listStyleType="none">
          <Link
            href="/#experience"
            _hover={{
              textDecoration: "none",
              color: "brand.500",
            }}
            _before={{
              content: "'0' counter(navitem) '.'",
              marginRight: 2,
              color: "brand.500",
              fontSize: "sm",
            }}
          >
            {t("navigation.experience")}
          </Link>
        </ListItem>
        <ListItem style={{ counterIncrement: "navitem 1" }} listStyleType="none">
          <Link
            href="/#projects"
            _hover={{
              textDecoration: "none",
              color: "brand.500",
            }}
            _before={{
              content: "'0' counter(navitem) '.'",
              marginRight: 2,
              color: "brand.500",
              fontSize: "sm",
            }}
          >
            {t("navigation.projects")}
          </Link>
        </ListItem>
        <ListItem style={{ counterIncrement: "navitem 1" }} listStyleType="none">
          <Link
            onClick={handleContactClick}
            _hover={{
              textDecoration: "none",
              color: "brand.500",
            }}
            _before={{
              content: "'0' counter(navitem) '.'",
              marginRight: 2,
              color: "brand.500",
              fontSize: "sm",
            }}
          >
            {t("navigation.contact")}
          </Link>
        </ListItem>
      </OrderedList>
      <ColorThemePicker />
      <LanguageSwitcher />
    </Box>
  );
};
