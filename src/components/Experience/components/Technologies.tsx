import { darken, lighten, Paper } from "@mui/material";
import React from "react";
import styled from "styled-components";

interface IProps {
  technologies: string[];
}

const Wrapper = styled.div`
  display: flex;
  margin-top: 2rem;
  flex-wrap: wrap;
`;

const Item = styled(Paper)`
  font-size: 0.8rem;
  padding: 0.25rem 0.5rem;
  margin: 0.5rem;
  background-color: ${(props) => lighten(props.theme.colors.mainblack, 0.15)};
  color: ${(props) => darken(props.theme.colors.mainwhite, 0.15)};
`;

export const Technologies = ({ technologies = [] }: IProps) => {
  return (
    <Wrapper>
      {technologies.map((technology: string) => (
        <Item>{technology}</Item>
      ))}
    </Wrapper>
  );
};
