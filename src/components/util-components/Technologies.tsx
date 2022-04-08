import { darken, lighten, Paper } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

interface IProps {
  technologies: string[];
}

const Wrapper = styled.div`
  display: flex;
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
  const { t } = useTranslation();
  return (
    <Wrapper>
      {technologies.map((technology: string, idx: number) => (
        <Item key={idx}>{t(technology as any)}</Item>
      ))}
    </Wrapper>
  );
};
