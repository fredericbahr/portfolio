import { Tab, Tabs, useMediaQuery } from "@mui/material";
import { lighten } from "@mui/system";
import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { experiences } from "../../data/experiences";
import { breakpoints } from "../../styles/globalStyles";
import { SectionHeadline } from "../util-components/SectionHeadline";
import { Description } from "./components/Description";
import { Technologies } from "./components/Technologies";
import { TimeRange } from "./components/TimeRange";
import { WorkingTitle } from "./components/WorkingTitle";
import { IExperience } from "./interface";
import { TabPanel } from "./TabPanel";

type IOrientation = "vertical" | "horizontal";

const StyledSection = styled.section`
  width: 85%;
  margin: 0 auto 25vh auto;

  @media screen and (max-width: ${breakpoints.md}) {
    margin: 0 auto 10vh auto;
  }
`;

const TabWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;

  @media screen and (max-width: ${breakpoints.sm}) {
    grid-template-columns: auto;
    grid-template-rows: auto 1fr;
  }
`;

const StyledTabs = styled(Tabs)`
  @media screen and (max-width: ${breakpoints.sm}) {
    grid-row: 1/2;
    margin-bottom: 3vh;
  }
`;

const StyledTab = styled(Tab)`
  font-size: 1.1rem;
  text-transform: none;
  font-weight: 400;
  color: ${(props) => props.theme.colors.mainwhite};

  &.Mui-selected {
    background-color: ${(props) => lighten(props.theme.colors.mainblack, 0.05)};
  }
`;

const StyledTabPanel = styled(TabPanel)`
  align-self: start;
`;

const Experience = () => {
  const [value, setValue] = React.useState(0);
  const { t } = useTranslation();
  const mobileView = useMediaQuery(`(max-width: ${breakpoints.sm})`);
  const orientation: IOrientation = mobileView ? "horizontal" : "vertical";

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
            <Description description={experience.description} />
            {experience.technologies && <Technologies technologies={experience.technologies} />}
          </StyledTabPanel>
        ))}
        <StyledTabs
          orientation={orientation}
          variant="scrollable"
          scrollButtons="auto"
          allowScrollButtonsMobile
          onChange={handleChange}
          value={value}
        >
          {experiences.map((experience: IExperience) => (
            <StyledTab key={experience.index} label={t(experience.shortCompanyName as any)}></StyledTab>
          ))}
        </StyledTabs>
      </TabWrapper>
    </StyledSection>
  );
};

export default Experience;
