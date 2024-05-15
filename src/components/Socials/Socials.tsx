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

import { Box, Icon, Link, List, ListItem, Tooltip, useColorModeValue } from "@chakra-ui/react";
import { GithubLogo, LinkedinLogo } from "@phosphor-icons/react";
import { useTranslation } from "react-i18next";

/** Component for displaying the fixed socials */
export const Socials = () => {
  /** translation hook */
  const { t } = useTranslation();

  /** color for the divider */
  const dividerColor = useColorModeValue("gray.600", "gray.200");

  return (
    <Box position="fixed" bottom="0px" left="5%">
      <List
        spacing={4}
        display="flex"
        flexDirection="column"
        alignItems="center"
        _after={{
          content: "''",
          display: "block",
          height: "90px",
          width: "1px",
          backgroundColor: dividerColor,
          marginTop: "4",
        }}
      >
        <ListItem>
          <Tooltip label={t("socials.github")} hasArrow openDelay={300}>
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
          </Tooltip>
        </ListItem>

        <ListItem>
          <Tooltip label={t("socials.linkedin")} hasArrow openDelay={300}>
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
          </Tooltip>
        </ListItem>
      </List>
    </Box>
  );
};
