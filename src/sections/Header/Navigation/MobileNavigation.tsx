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

import { Link, List, ListItem } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

/**
 * Component for rendeirng the mobile navigation.
 */
export const MobileNavigation = () => {
  /** translation hook */

  const { t } = useTranslation();

  return (
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
  );
};
