import { Tab, Tabs } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { experiences } from "../../data/experiences";
import { SectionHeadline } from "../util-components/SectionHeadline";
import { TimeRange } from "./components/TimeRange";
import { WorkingTitle } from "./components/WorkingTitle";
import { IExperience } from "./interface";
import { TabPanel } from "./TabPanel";

const StyledSection = styled.section`
  width: 85%;
  height: 100vh;
  margin: 0 auto;
`;

const TabWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
`;

const StyledTab = styled(Tab)`
  font-size: 1.1rem;
  text-transform: none;
  font-weight: 400;
  color: ${(props) => props.theme.colors.mainwhite};
`;

const StyledTabPanel = styled(TabPanel)`
  display: flex;
  flex-direction: column;
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
          <StyledTabPanel key={experience.index} value={value} index={experience.index}>
            <WorkingTitle
              title={t(experience.jobTitle as any)}
              companyName={experience.fullCompanyName}
              companyUrl={experience.companyUrl}
            />
            <TimeRange from={experience.timeRange.from} to={experience.timeRange.to} />
            
          </StyledTabPanel>
        ))}
        <Tabs orientation="vertical" variant="scrollable" onChange={handleChange} value={value}>
          {experiences.map((experience: IExperience) => (
            <StyledTab key={experience.index} label={t(experience.shortCompanyName as any)}></StyledTab>
          ))}
        </Tabs>
      </TabWrapper>
    </StyledSection>
  );
};

export default Experience;
