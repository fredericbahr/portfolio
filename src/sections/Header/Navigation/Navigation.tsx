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

import { ColorThemePicker } from "../../../components/ColorThemePicker/ColorThemePicker";
import { LanguageSwitcher } from "../../../components/LanguageSwitcher";


/**
 * Component for rendering the navigation of the application
 */
export const Navigation = () => {
  return (
    <Box as="nav" flex={1} display="flex" justifyContent="end" alignItems="center" marginRight={8} gap={8}>
      <OrderedList display="flex" flexDirection="row" gap={8} style={{ counterReset: "item 0" }}>
        <ListItem style={{ counterIncrement: "item 1" }} listStyleType="none">
          <Link
            href="/about"
            _hover={{
              textDecoration: "none",
              color: "brand.500",
            }}
            _before={{
              content: "'0' counter(item) '.'",
              marginRight: 2,
              color: "brand.500",
              fontSize: "sm",
            }}
          >
            Über mich
          </Link>
        </ListItem>
        <ListItem style={{ counterIncrement: "item 1" }} listStyleType="none">
          <Link
            href="/experience"
            _hover={{
              textDecoration: "none",
              color: "brand.500",
            }}
            _before={{
              content: "'0' counter(item) '.'",
              marginRight: 2,
              color: "brand.500",
              fontSize: "sm",
            }}
          >
            Erfahrung
          </Link>
        </ListItem>
        <ListItem style={{ counterIncrement: "item 1" }} listStyleType="none">
          <Link
            href="/projects"
            _hover={{
              textDecoration: "none",
              color: "brand.500",
            }}
            _before={{
              content: "'0' counter(item) '.'",
              marginRight: 2,
              color: "brand.500",
              fontSize: "sm",
            }}
          >
            Projekte
          </Link>
        </ListItem>
        <ListItem style={{ counterIncrement: "item 1" }} listStyleType="none">
          <Link
            href="/contact"
            _hover={{
              textDecoration: "none",
              color: "brand.500",
            }}
            _before={{
              content: "'0' counter(item) '.'",
              marginRight: 2,
              color: "brand.500",
              fontSize: "sm",
            }}
          >
            Kontakt
          </Link>
        </ListItem>
      </OrderedList>
      <ColorThemePicker />
      <LanguageSwitcher />
    </Box>
  );
};
