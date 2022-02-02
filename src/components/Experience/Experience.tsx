import { Tab, Tabs } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { experiences } from "../../data/experiences";
import { SectionHeadline } from "../util-components/SectionHeadline";
import { IExperience } from "./interface";
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
  text-transform: none;
  font-weight: 400;
  color: ${(props) => props.theme.colors.mainwhite};
`;

const Experience = () => {
  const [value, setValue] = React.useState(0);
  const { t } = useTranslation();

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <StyledSection id="experience">
      <SectionHeadline>{t("experience.headline")}</SectionHeadline>
      <TabWrapper>
        {experiences.map((experience: IExperience) => (
          <TabPanel key={experience.index} value={value} index={experience.index}>
            {experience.component}
          </TabPanel>
        ))}
        <StyledTabs orientation="vertical" variant="scrollable" onChange={handleChange} value={value}>
          {experiences.map((experience: IExperience) => (
            <StyledTab key={experience.index} label={t(experience.title as any)}></StyledTab>
          ))}
        </StyledTabs>
      </TabWrapper>
    </StyledSection>
  );
};

export default Experience;
