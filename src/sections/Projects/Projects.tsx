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

import { Flex, Grid, VStack } from "@chakra-ui/react";

import { Heading } from "../../components/Heading/Heading";
import { ProjectTabs } from "./ProjectTabs";
import { ProjectTile } from "./ProjectTile";

/**
 * Component for displaying the projects section
 */
export const Projects = () => {
  return (
    <VStack width="full" alignItems="start" spacing={4} style={{ counterReset: "projects 0" }}>
      <Heading>Projekte</Heading>

      <Flex width="full" justifyContent="center">
        <ProjectTabs />
      </Flex>

      <Grid width="full" gridTemplateColumns="repeat(4, 1fr)" gridTemplateRows="repeat(2, 1fr)">
        <ProjectTile title="Project 1" backgroundType="contour" />
        <ProjectTile title="Project 2" />
        <ProjectTile title="Project 3" backgroundType="contour" />
        <ProjectTile title="Project 4" backgroundType="lines" />
        <ProjectTile
          borderLeft="none"
          borderBottom="none"
          borderTop="none"
          _hover={{}}
          sx={{ "&": { borderLeft: "none" } }}
        />
        <ProjectTile title="Project 5" backgroundType="lines" />
        <ProjectTile title="Project 6" />
      </Grid>
    </VStack>
  );
};
