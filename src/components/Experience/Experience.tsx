import { Tab, Tabs, Box, Typography } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { SectionHeadline } from "../util-components/SectionHeadline";
import { TabPanel } from "./TabPanel";

const StyledSection = styled.section`
  width: 85%;
  height: 100vh;
  margin: 0 auto;
`;

const TabWrapper = styled.div`
  display: flex;
`;

const StyledTabs = styled(Tabs)`
  height: 100%;
`;

const StyledTab = styled(Tab)`
  font-size: 1.1rem;
  color: ${(props) => props.theme.colors.mainwhite};
`;

const Experience = () => {
  const [value, setValue] = React.useState(0);
  const { t } = useTranslation();

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <StyledSection id="experiesection">
      <SectionHeadline>{t("experience.headline")}</SectionHeadline>
      <TabWrapper>
        <TabPanel value={value} index={0}>
          Item One
        </TabPanel>
        <TabPanel value={value} index={1}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2}>
          Item Three
        </TabPanel>
        <TabPanel value={value} index={3}>
          Item Four
        </TabPanel>
        <StyledTabs orientation="vertical" variant="scrollable" onChange={handleChange} value={value}>
          <StyledTab label={t("experience.work4.name")}></StyledTab>
          <StyledTab label={t("experience.work3.name")}></StyledTab>
          <StyledTab label={t("experience.work2.name")}></StyledTab>
          <StyledTab label={t("experience.work1.name")}></StyledTab>
        </StyledTabs>
      </TabWrapper>
    </StyledSection>
  );
};

export default Experience;
