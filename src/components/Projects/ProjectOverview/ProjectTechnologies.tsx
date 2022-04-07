import React from "react";
import styled from "styled-components";
import { Technologies } from "../../util-components/Technologies";

interface IProps {
  technologies: string[];
  leftSideThumbnail: boolean;
}

const Wrapper = styled.div<{ leftSideThumbnail: boolean }>`
  grid-column: ${(props) => (props.leftSideThumbnail ? "2/-1" : "1/-1")};
  display: flex;
  justify-content: ${(props) => (props.leftSideThumbnail ? "flex-end" : "flex-start")};
  align-items: center;
`;

export const ProjectTechnologies = ({ technologies, leftSideThumbnail }: IProps) => {
  return (
    <Wrapper leftSideThumbnail={leftSideThumbnail}>
      <Technologies technologies={technologies} />
    </Wrapper>
  );
};
