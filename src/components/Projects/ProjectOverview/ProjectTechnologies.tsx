import React from "react";
import styled from "styled-components";
import { Technologies } from "../../util-components/Technologies";

interface IProps {
  technologies: string[];
}

const Wrapper = styled.div`
  grid-column: 2/-1;
  display: flex;
  justify-content: end;
  align-items: flex-end;
`;



export const ProjectTechnologies = ({ technologies }: IProps) => {
  return (
    <Wrapper>
      <Technologies technologies={technologies} />
    </Wrapper>
  );
};
