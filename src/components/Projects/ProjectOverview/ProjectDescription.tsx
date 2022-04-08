import { lighten } from "@mui/material";
import React from "react";
import styled from "styled-components";
import { breakpoints } from "../../../styles/globalStyles";

interface IProps {
  description: string;
  leftSideThumbnail: boolean;
}

const Wrapper = styled.div<{ leftSideThumbnail: boolean }>`
  background-color: ${(props) => lighten(props.theme.colors.mainblack, 0.1)};
  padding: 0 1.25rem;
  grid-column: 1/-1;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: ${breakpoints.md}) {
    margin: 2rem 0 1rem 0;
    padding: 1.5rem 1rem;
  }
`;

export const ProjectDescription = ({ description, leftSideThumbnail }: IProps) => {
  return <Wrapper leftSideThumbnail={leftSideThumbnail}>{description}</Wrapper>;
};
