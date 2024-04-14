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

import {
  GridItem,
  GridItemProps,
  Heading,
  HStack,
  Icon,
  IconButton,
  Text,
  Tooltip,
  useColorModeValue,
  useMediaQuery,
  useToken,
  VStack,
} from "@chakra-ui/react";
import { GithubLogo, Link as LinkIcon } from "@phosphor-icons/react";
import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

export type ProjectBackgroundType = "none" | "lines" | "contour";

export interface ProjectLinks {
  github?: string;
  website?: string;
}

interface ProjectTileProps extends GridItemProps {
  title?: string;
  url?: string;
  backgroundType?: ProjectBackgroundType;
  links?: {
    github?: string;
    website?: string;
  };
}

/**
 * Component for displaying a single project tile
 */
export const ProjectTile = ({ title, url, backgroundType = "none", links, ...props }: ProjectTileProps) => {
  /** hook for navigating */
  const navigate = useNavigate();

  /** hook for translations */
  const { t } = useTranslation();

  /** flag indicating whether screen is mobile size */
  const [isMobile] = useMediaQuery("(max-width: 62em)");

  /** stringified token of the chakra ui colors */
  const [gray200, gray700] = useToken("colors", ["gray.200", "gray.700"]).map((color: string) =>
    color.replace("#", "%23").toLowerCase(),
  );

  /** background color of the tile */
  const backgroundColor = useColorModeValue("white", "gray.800");

  /** border color of the color */
  const borderColor = useColorModeValue("gray.300", "gray.600");

  /** line color of the background image */
  const linesColor = useColorModeValue("gray.100", "gray.700");

  /** contour color of the background image */
  const contourColor = useColorModeValue(gray200, gray700);

  /** font color of the tile */
  const fontColor = useColorModeValue("blackAlpha.800", "whiteAlpha.800");

  /**
   * Gets the styles for the different background types
   * @returns
   */
  const getBackgroundStyles = () => {
    if (backgroundType === "none") {
      return {
        backgroundColor: backgroundColor,
      };
    }

    if (backgroundType === "lines") {
      return {
        backgroundImage: `repeating-linear-gradient(-45deg, ${linesColor} 0, ${linesColor} 1.5px, transparent 0, transparent 50%);`,
        backgroundSize: "12px 12px",
        backgroundColor: backgroundColor,
      };
    }

    if (backgroundType === "contour") {
      return {
        backgroundImage: `url(
                "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.dev/svgjs' width='500' height='400' preserveAspectRatio='none' viewBox='0 0 500 400'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1104%26quot%3b)' fill='none'%3e%3cuse xlink:href='%23SvgjsPath1105' x='30' y='30' stroke='${contourColor}'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1106' x='30' y='90' stroke='${contourColor}'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1106' x='30' y='150' stroke='${contourColor}'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1107' x='30' y='210' stroke='${contourColor}'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1105' x='30' y='270' stroke='${contourColor}'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1106' x='30' y='330' stroke='${contourColor}'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1107' x='30' y='390' stroke='${contourColor}'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1107' x='90' y='30' stroke='${contourColor}'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1108' x='90' y='90' stroke='${contourColor}'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1107' x='90' y='150' stroke='${contourColor}'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1106' x='90' y='210' stroke='${contourColor}'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1106' x='90' y='270' stroke='${contourColor}'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1106' x='90' y='330' stroke='${contourColor}'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1108' x='90' y='390' stroke='${contourColor}'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1105' x='150' y='30' stroke='${contourColor}'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1108' x='150' y='90' stroke='${contourColor}'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1109' x='150' y='150' stroke='${contourColor}' stroke-width='3'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1105' x='150' y='210' stroke='${contourColor}'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1108' x='150' y='270' stroke='${contourColor}'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1107' x='150' y='330' stroke='${contourColor}'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1110' x='150' y='390' stroke='${contourColor}'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1107' x='210' y='30' stroke='${contourColor}'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1110' x='210' y='90' stroke='${contourColor}'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1105' x='210' y='150' stroke='${contourColor}'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1105' x='210' y='210' stroke='${contourColor}'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1107' x='210' y='270' stroke='${contourColor}'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1107' x='210' y='330' stroke='${contourColor}'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1110' x='210' y='390' stroke='${contourColor}'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1108' x='270' y='30' stroke='${contourColor}'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1108' x='270' y='90' stroke='${contourColor}'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1109' x='270' y='150' stroke='${contourColor}' stroke-width='3'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1107' x='270' y='210' stroke='${contourColor}'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1106' x='270' y='270' stroke='${contourColor}'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1107' x='270' y='330' stroke='${contourColor}'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1110' x='270' y='390' stroke='${contourColor}'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1109' x='330' y='30' stroke='${contourColor}' stroke-width='3'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1106' x='330' y='90' stroke='${contourColor}'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1110' x='330' y='150' stroke='${contourColor}'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1106' x='330' y='210' stroke='${contourColor}'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1107' x='330' y='270' stroke='${contourColor}'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1107' x='330' y='330' stroke='${contourColor}'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1107' x='330' y='390' stroke='${contourColor}'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1107' x='390' y='30' stroke='${contourColor}'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1107' x='390' y='90' stroke='${contourColor}'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1110' x='390' y='150' stroke='${contourColor}'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1109' x='390' y='210' stroke='${contourColor}' stroke-width='3'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1106' x='390' y='270' stroke='${contourColor}'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1107' x='390' y='330' stroke='${contourColor}'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1109' x='390' y='390' stroke='${contourColor}' stroke-width='3'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1110' x='450' y='30' stroke='${contourColor}'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1107' x='450' y='90' stroke='${contourColor}'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1106' x='450' y='150' stroke='${contourColor}'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1110' x='450' y='210' stroke='${contourColor}'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1106' x='450' y='270' stroke='${contourColor}'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1107' x='450' y='330' stroke='${contourColor}'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1106' x='450' y='390' stroke='${contourColor}'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1105' x='510' y='30' stroke='${contourColor}'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1106' x='510' y='90' stroke='${contourColor}'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1110' x='510' y='150' stroke='${contourColor}'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1107' x='510' y='210' stroke='${contourColor}'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1109' x='510' y='270' stroke='${contourColor}' stroke-width='3'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1106' x='510' y='330' stroke='${contourColor}'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1107' x='510' y='390' stroke='${contourColor}'%3e%3c/use%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1104'%3e%3crect width='500' height='400' fill='white'%3e%3c/rect%3e%3c/mask%3e%3cpath d='M-1 0 a1 1 0 1 0 2 0 a1 1 0 1 0 -2 0z' id='SvgjsPath1105'%3e%3c/path%3e%3cpath d='M-3 0 a3 3 0 1 0 6 0 a3 3 0 1 0 -6 0z' id='SvgjsPath1110'%3e%3c/path%3e%3cpath d='M-5 0 a5 5 0 1 0 10 0 a5 5 0 1 0 -10 0z' id='SvgjsPath1107'%3e%3c/path%3e%3cpath d='M2 -2 L-2 2z' id='SvgjsPath1108'%3e%3c/path%3e%3cpath d='M6 -6 L-6 6z' id='SvgjsPath1106'%3e%3c/path%3e%3cpath d='M30 -30 L-30 30z' id='SvgjsPath1109'%3e%3c/path%3e%3c/defs%3e%3c/svg%3e"
            )`,
        backgroundColor: backgroundColor,
      };
    }

    return {};
  };

  /**
   * Handles the click on the project tile to navigate to the project detail page
   */
  const handleProjectTileClick = () => {
    navigate(url || "/");
  };

  /**
   * Handles the click on a project link to navigate to the respective page
   */
  const handleProjectLinkClick = (event: React.SyntheticEvent, link: string) => {
    event.stopPropagation();

    window.open(link, "_blank");
  };

  return (
    <GridItem
      key={title}
      className="project-tile"
      border="2px solid"
      borderColor={borderColor}
      paddingX={6}
      paddingY={1}
      display="flex"
      justifyContent={{ base: "start", lg: "center" }}
      alignItems="center"
      minHeight="2xs"
      minWidth="3xs"
      transitionProperty="border-color, transform"
      transitionDuration="normal"
      transitionTimingFunction="ease-in-out"
      style={{ counterIncrement: title && "projects 1" }}
      sx={{
        "&:has(+ .project-tile)": {
          borderLeft: isMobile ? "2px solid" : "none",
          borderBottom: isMobile ? "none" : "2px solid",
          borderColor: borderColor,
        },

        "&:has(+ .project-tile-placeholder)": {
          borderLeft: "none",
        },

        "&:nth-child(n+5):not(:hover)": {
          borderTop: "none",
        },

        "&:nth-child(1):not(:hover)": {
          borderLeft: "2px solid",
          borderColor: borderColor,
        },

        "&:nth-child(6):not(:hover)": {
          borderLeft: "2px solid",
          borderColor: borderColor,
        },

        "& .project-tile-placeholder": {
          marginRight: "-2px",
        },

        "&:nth-child(4):not(:hover)": {
          borderLeft: isMobile ? "2px solid" : "none",
          borderColor: borderColor,
        },

        "&:nth-child(7):not(:hover)": {
          borderTop: isMobile ? "2px solid" : "none",
          borderLeft: isMobile ? "2px solid" : "none",
          borderColor: borderColor,
        },

        "&:hover": {
          border: "2px solid",
          borderColor: "brand.500",
        },

        "&:hover .project-counter:before": {
          color: "brand.500",
        },

        "&:hover .project-links": {
          display: "flex",
        },
      }}
      _hover={{
        border: "all",
        borderColor: "brand.500",
        borderWidth: 4,
        transform: "scale(1.05)",
        cursor: "pointer",
        zIndex: 1,
      }}
      {...getBackgroundStyles()}
      onClick={handleProjectTileClick}
      {...props}
    >
      <VStack spacing={3} width="full">
        {title && (
          <VStack spacing={0} width="full" alignItems="start">
            <Text
              as="span"
              className="project-counter"
              alignSelf="start"
              _before={{
                content: "'0' counter(projects) '.'",
                color: "gray.500",
                fontSize: "sm",
                display: "block",
              }}
            ></Text>
            <Heading as="h3" color={fontColor} fontSize={{ base: "2xl", lg: "3xl" }}>
              {title}
            </Heading>
          </VStack>
        )}
        <HStack
          className="project-links"
          display={{ base: "block", lg: "none" }}
          justifyContent="start"
          width={{ base: "full", lg: "auto" }}
        >
          {links?.website && (
            <Tooltip label={t("projects.website")} hasArrow openDelay={300}>
              <IconButton
                icon={<Icon as={LinkIcon} />}
                aria-label="website"
                variant="ghost"
                colorScheme="gray"
                onClick={(event) => handleProjectLinkClick(event, links.website || "/")}
              />
            </Tooltip>
          )}
          {links?.github && (
            <Tooltip label={t("projects.github")} hasArrow openDelay={300}>
              <IconButton
                icon={<Icon as={GithubLogo} />}
                aria-label="github"
                variant="ghost"
                colorScheme="gray"
                onClick={(event) => handleProjectLinkClick(event, links.github || "/")}
              />
            </Tooltip>
          )}
        </HStack>
      </VStack>
    </GridItem>
  );
};
