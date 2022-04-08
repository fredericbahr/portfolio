import { useMediaQuery } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { breakpoints } from "../../../styles/globalStyles";
import { ProjectDescription } from "./ProjectDescription";
import { ProjectTechnologies } from "./ProjectTechnologies";
import { ProjectThumbnail } from "./ProjectThumbnail";

interface IProps {
  projectOverview: IProjectOverview;
  leftSideThumbnail?: boolean;
}

export interface IProjectOverview {
  imgUrl: string;
  headline: string;
  subheadline: string;
  description: string;
  technologies?: string[];
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: 1fr;
  margin: 10rem 0;

  &:first-of-type {
    margin-top: 1rem;
  }

  @media screen and (max-width: ${breakpoints.md}) {
    display: flex;
    flex-direction: column;
  }
`;

const ProjectContentWrapper = styled.div<{ leftSideThumbnail: boolean }>`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: auto;
  grid-column: ${(props) => (props.leftSideThumbnail ? "6/-1" : "1/8")};
  grid-row: 1/2;
`;

const ProjectHeadline = styled.div<{ leftSideThumbnail: boolean }>`
  grid-column: ${(props) => (props.leftSideThumbnail ? "2/-1" : "1/7")};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: ${(props) => (props.leftSideThumbnail ? "flex-end" : "flex-start")};
  color: ${(props) => props.theme.colors.mainwhite};
`;

const StyledHeading = styled.h3<{ leftSideThumbnail: boolean }>`
  cursor: pointer;
  font-size: 1.75rem;
  text-align: ${(props) => (props.leftSideThumbnail ? "right" : "left")};

  @media screen and (max-width: ${breakpoints.md}) {
    margin: 0.25rem 0 2rem 0;
  }
`;

const StyledSubHeadline = styled.h4`
  font-size: 1rem;
  color: ${(props) => props.theme.colors.mainred};
`;

export const ProjectOverview = ({ projectOverview, leftSideThumbnail = true }: IProps) => {
  const { t } = useTranslation();
  const mediaQuery = useMediaQuery(`(max-width: ${breakpoints.md})`);
  return !mediaQuery ? (
    <Wrapper>
      <ProjectThumbnail
        leftSideThumbnail={leftSideThumbnail}
        onClick={() => alert("Hi")}
        imgUrl={projectOverview.imgUrl}
      />
      <ProjectContentWrapper leftSideThumbnail={leftSideThumbnail}>
        <ProjectHeadline leftSideThumbnail={leftSideThumbnail}>
          <StyledSubHeadline>{projectOverview.subheadline}</StyledSubHeadline>
          <StyledHeading leftSideThumbnail={leftSideThumbnail} onClick={() => alert("Hi")}>
            {t(projectOverview.headline as any)}
          </StyledHeading>
        </ProjectHeadline>
        <ProjectDescription leftSideThumbnail={leftSideThumbnail} description={t(projectOverview.description as any)} />
        <ProjectTechnologies leftSideThumbnail={leftSideThumbnail} technologies={projectOverview.technologies ?? []} />
      </ProjectContentWrapper>
    </Wrapper>
  ) : (
    <Wrapper>
      <StyledSubHeadline>{projectOverview.subheadline}</StyledSubHeadline>
      <StyledHeading leftSideThumbnail={false} onClick={() => alert("Hi")}>
        {t(projectOverview.headline as any)}
      </StyledHeading>
      <ProjectThumbnail leftSideThumbnail={false} onClick={() => alert("Hi")} imgUrl={projectOverview.imgUrl} />
      <ProjectDescription leftSideThumbnail={false} description={projectOverview.description} />
      <ProjectTechnologies leftSideThumbnail={false} technologies={projectOverview.technologies ?? []} />
    </Wrapper>
  );
};
