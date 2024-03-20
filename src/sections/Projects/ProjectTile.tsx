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
  useColorModeValue,
  useToken,
  VStack,
} from "@chakra-ui/react";
import { GithubLogo, Link as LinkIcon } from "@phosphor-icons/react";
import React from "react";
import { useNavigate } from "react-router-dom";

interface ProjectTileProps extends GridItemProps {
  title?: string;
  description?: string;
  url?: string;
  backgroundType?: "none" | "lines" | "contour";
  links?: {
    github?: string;
    website?: string;
  };
}

/**
 * Component for displaying a single project tile
 */
export const ProjectTile = ({
  title,
  description,
  url,
  backgroundType = "none",
  links,
  ...props
}: ProjectTileProps) => {
  const navigate = useNavigate();
  const [gray200, gray700] = useToken("colors", ["gray.200", "gray.700"]).map((color: string) =>
    color.replace("#", "%23").toLowerCase(),
  );
  const backgroundColor = useColorModeValue("white", "gray.800");
  const borderColor = useColorModeValue("gray.300", "gray.600");
  const linesColor = useColorModeValue("gray.100", "gray.700");
  const contourColor = useColorModeValue(gray200, gray700);
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

  const handleProjectLinkClick = (event: React.SyntheticEvent, link: string) => {
    event.stopPropagation();
    navigate(link);
  };

  return (
    <GridItem
      border="2px solid"
      borderColor={borderColor}
      paddingX={3}
      paddingY={1}
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="2xs"
      minWidth="3xs"
      transitionProperty="border-color, transform"
      transitionDuration="normal"
      transitionTimingFunction="ease-in-out"
      style={{ counterIncrement: title && "projects 1" }}
      sx={{
        "&:not(:last-child):not(:first-child):not(:hover)": {
          borderLeft: "none",
        },

        "&:last-child:not(:hover)": {
          borderLeft: "none",
        },

        "&:nth-child(4n+1):not(:hover)": {
          borderLeft: "2px !important",
          borderLeftColor: `${borderColor} !important`,
        },

        "&:nth-child(n+5):not(:hover)": {
          borderTop: "none",
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
      <VStack spacing={3}>
        {title && (
          <VStack spacing={0}>
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
            <Heading as="h3" color={fontColor}>
              {title}
            </Heading>
          </VStack>
        )}
        <HStack className="project-links" display="none">
          {links?.website && (
            <IconButton
              icon={<Icon as={LinkIcon} />}
              aria-label="website"
              variant="ghost"
              colorScheme="gray"
              onClick={(event) => handleProjectLinkClick(event, links.website || "/")}
            />
          )}
          {links?.github && (
            <IconButton
              icon={<Icon as={GithubLogo} />}
              aria-label="github"
              variant="ghost"
              colorScheme="gray"
              onClick={(event) => handleProjectLinkClick(event, links.github || "/")}
            />
          )}
        </HStack>
      </VStack>
    </GridItem>
  );
};
