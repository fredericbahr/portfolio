import { alpha, darken, lighten } from "@mui/material";
import React from "react";
import styled from "styled-components";

interface IProps {
  description: string;
}

const Wrapper = styled.div`
  background-color: ${(props) => lighten(props.theme.colors.mainblack, 0.1)};
  padding: 0.5rem 1.25rem;
  grid-column: 1/-1;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ProjectDescription = ({ description }: IProps) => {
  return <Wrapper>{description}</Wrapper>;
};
