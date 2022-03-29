import React from "react";
import styled from "styled-components";
import { ProjectThumbnail } from "./ProjectThumbnail";

interface IProps {
  imgUrl: string;
  technologies: string[];
  headline: string;
  description: string;
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ProjectOverview = () => {
  return (
    <Wrapper>
      <ProjectThumbnail />
    </Wrapper>
  );
};
