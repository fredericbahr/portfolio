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
  Button,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  useColorModeValue,
  useMultiStyleConfig,
  useTab,
} from "@chakra-ui/react";
import React, { Ref } from "react";

interface CustomTabProps {
  children?: React.ReactNode;
}

interface ProjectTabsProps {
  children?: React.ReactNode[];
}

const CustomTab = React.forwardRef((props: CustomTabProps, ref: Ref<HTMLElement> | undefined) => {
  const tabProps = useTab({ ...props, ref });
  const isSelected: boolean = !!tabProps["aria-selected"];
  const styles = useMultiStyleConfig("Tabs", tabProps);
  const nonActiveBorderColor = useColorModeValue("gray.300", "gray.400");

  return (
    <Button
      __css={styles.tab}
      {...tabProps}
      textTransform="uppercase"
      paddingX={3}
      paddingY={1}
      minWidth={16}
      borderBottom="2px solid"
      borderColor={isSelected ? "brand.300" : nonActiveBorderColor}
      pointerEvents="none"
      fontSize="sm"
    >
      <Text as="span" visibility={isSelected ? "visible" : "hidden"}>
        {tabProps.children}
      </Text>
    </Button>
  );
});

/**
 * Component for displaying the project tabs
 */
export const ProjectTabs = ({ children }: ProjectTabsProps) => {
  return (
    <Tabs defaultIndex={1}>
      <TabList border="none" gap={4}>
        <CustomTab></CustomTab>
        <CustomTab>Auswahl</CustomTab>
        <CustomTab></CustomTab>
        <CustomTab></CustomTab>
      </TabList>
      <TabPanels>
        <TabPanel>{children && children[0]}</TabPanel>
        <TabPanel>{children && children[1]}</TabPanel>
        <TabPanel>{children && children[2]}</TabPanel>
        <TabPanel>{children && children[3]}</TabPanel>
      </TabPanels>
    </Tabs>
  );
};
