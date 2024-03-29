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

import { Box, Flex, Grid, VStack } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

import { Heading } from "../../components/Heading/Heading";
import { Project, projects } from "./projects";
import { ProjectTabs } from "./ProjectTabs";
import { ProjectTile } from "./ProjectTile";

/**
 * Component for displaying the projects section
 */
export const Projects = () => {
  const { t } = useTranslation();

  return (
    <VStack width="full" alignItems="start" spacing={4} style={{ counterReset: "projects 0" }}>
      <Heading id="projects">{t("projects.title")}</Heading>

      <Flex width="full" justifyContent="center">
        <ProjectTabs />
      </Flex>

      <Grid
        width="full"
        gridTemplateColumns={{ base: "1fr", lg: "repeat(4, 1fr)" }}
        gridTemplateRows={{ base: "repeat(6, 1fr)", lg: "repeat(2, 1fr)" }}
      >
        {projects.map((project: Project | null, idx: number) => (
          <>
            {project ? (
              <ProjectTile
                key={project.title}
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                title={t(`projects.projectTitles.${project.title}` as any)}
                backgroundType={project.backgroundType}
                links={project.links}
                url={project.url}
              />
            ) : (
              <Box
                className="project-tile-placeholder"
                key={`project-tile-placeholder-${idx}`}
                display={{ base: "none", lg: "block" }}
              ></Box>
            )}
          </>
        ))}
      </Grid>
    </VStack>
  );
};
