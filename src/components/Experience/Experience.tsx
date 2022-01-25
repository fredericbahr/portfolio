import { Tab, Tabs, Box, Typography } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { TabPanel } from "./TabPanel";

const StyledSection = styled.section`
  width: 85%;
  height: 100vh;
  margin: 0 auto;
`;

const TabWrapper = styled.div`
  display: flex;
`;

const StyledTab = styled(Tab)`
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
      <h2>{t("experience.headline")}</h2>
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
        <Tabs orientation="vertical" variant="scrollable" onChange={handleChange} value={value}>
          <StyledTab label="one"></StyledTab>
          <StyledTab label="two"></StyledTab>
          <StyledTab label="three"></StyledTab>
          <StyledTab label="fourth"></StyledTab>
        </Tabs>
      </TabWrapper>
    </StyledSection>
  );
};

export default Experience;
