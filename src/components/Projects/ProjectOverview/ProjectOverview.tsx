import React from "react";
import styled from "styled-components";
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
`;

const ProjectContentWrapper = styled.div<{ leftSideThumbnail: boolean }>`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: auto;
  grid-column: ${(props) => (props.leftSideThumbnail ? "6/-1" : "1/8")};
  grid-row: 1/2;
`;

const ProjectHeadline = styled.div<{ leftSideThumbnail: boolean }>`
  grid-column: ${(props) => (props.leftSideThumbnail ? "2/-1" : "1/-1")};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: ${(props) => (props.leftSideThumbnail ? "flex-end" : "flex-start")};
  color: ${(props) => props.theme.colors.mainwhite};
`;

const StyledHeading = styled.h3`
  cursor: pointer;
  font-size: 1.75rem;
`;

const StyledSubHeadline = styled.h4`
  font-size: 1rem;
  color: ${(props) => props.theme.colors.mainred};
`;

export const ProjectOverview = ({ projectOverview, leftSideThumbnail = true }: IProps) => {
  return (
    <Wrapper>
      <ProjectThumbnail
        leftSideThumbnail={leftSideThumbnail}
        onClick={() => alert("Hi")}
        imgUrl={projectOverview.imgUrl}
      />
      <ProjectContentWrapper leftSideThumbnail={leftSideThumbnail}>
        <ProjectHeadline leftSideThumbnail={leftSideThumbnail}>
          <StyledSubHeadline>{projectOverview.subheadline}</StyledSubHeadline>
          <StyledHeading onClick={() => alert("Hi")}>{projectOverview.headline}</StyledHeading>
        </ProjectHeadline>
        <ProjectDescription leftSideThumbnail={leftSideThumbnail} description={projectOverview.description} />
        <ProjectTechnologies leftSideThumbnail={leftSideThumbnail} technologies={projectOverview.technologies ?? []} />
      </ProjectContentWrapper>
    </Wrapper>
  );
};
