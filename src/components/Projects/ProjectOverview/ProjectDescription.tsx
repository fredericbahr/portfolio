import { lighten } from "@mui/material";
import React from "react";
import styled from "styled-components";

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
`;

export const ProjectDescription = ({ description, leftSideThumbnail }: IProps) => {
  return <Wrapper leftSideThumbnail={leftSideThumbnail}>{description}</Wrapper>;
};
