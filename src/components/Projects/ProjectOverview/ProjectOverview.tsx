import React from "react";
import styled from "styled-components";
import { ProjectDescription } from "./ProjectDescription";
import { ProjectTechnologies } from "./ProjectTechnologies";
import { ProjectThumbnail } from "./ProjectThumbnail";

interface IProps {
  projectOverview: IProjectOverview;
}

export interface IProjectOverview {
  imgUrl: string;
  headline: string;
  description: string;
  technologies?: string[];
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: 1fr;
  margin: 10rem 0;

  &:first-child {
    margin-top: 0;
  }
`;

const ProjectContentWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: auto;
  grid-column: 6/-1;
  grid-row: 1/2;
`;

const ProjectHeadline = styled.div`
  grid-column: 2/-1;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  color: ${(props) => props.theme.colors.mainred};
`;

const StyledHeading = styled.h3`
  cursor: pointer;
  font-size: 1.75rem;
`;

export const ProjectOverview = ({ projectOverview }: IProps) => {
  return (
    <Wrapper>
      <ProjectThumbnail onClick={() => alert("Hi")} imgUrl={projectOverview.imgUrl} />
      <ProjectContentWrapper>
        <ProjectHeadline>
          <StyledHeading onClick={() => alert("Hi")}>{projectOverview.headline}</StyledHeading>
        </ProjectHeadline>
        <ProjectDescription description={projectOverview.description} />
        <ProjectTechnologies technologies={projectOverview.technologies ?? []} />
      </ProjectContentWrapper>
    </Wrapper>
  );
};
