import { darken, lighten, Paper } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

interface IProps {
  technologies: string[];
  justifyContent?: "flex-start" | "flex-end" | "center";
}

const Wrapper = styled.div<Pick<IProps, "justifyContent">>`
  display: flex;
  flex-wrap: wrap;
  justify-content: ${props => props.justifyContent};
`;

const Item = styled(Paper)`
  font-size: 0.8rem;
  padding: 0.25rem 0.5rem;
  margin: 0.5rem;
  background-color: ${(props) => lighten(props.theme.colors.mainblack, 0.15)};
  color: ${(props) => darken(props.theme.colors.mainwhite, 0.15)};

  &:first-of-type {
    margin-left: 0;
  }

  &:last-of-type {
    margin-right: 0;
  }
`;

export const Technologies = ({ technologies = [], justifyContent = "flex-start" }: IProps) => {
  const { t } = useTranslation();
  return (
    <Wrapper justifyContent={justifyContent}>
      {technologies.map((technology: string, idx: number) => (
        <Item key={idx}>{t(technology as any)}</Item>
      ))}
    </Wrapper>
  );
};
