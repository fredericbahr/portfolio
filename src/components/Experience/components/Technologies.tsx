import { Chip, darken, lighten, Paper, Stack } from "@mui/material";
import React from "react";
import styled from "styled-components";

interface IProps {
  technologies: string[];
}

const StyledStack = styled(Stack)`
  margin-top: 3vh;
`;

const Item = styled(Paper)`
  font-size: 0.8rem;
  padding: 0.25rem 0.5rem;
  background-color: ${(props) => lighten(props.theme.colors.mainblack, 0.15)};
  color: ${(props) => darken(props.theme.colors.mainwhite, 0.15)};
`;

export const Technologies = ({ technologies = [] }: IProps) => {
  return (
    <StyledStack direction="row" spacing={2}>
      {technologies.map((technology: string) => (
        <Item>{technology}</Item>
      ))}
    </StyledStack>
  );
};
