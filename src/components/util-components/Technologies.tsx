import { darken, lighten, Paper } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

interface IProps {
  technologies: string[];
  justifyContent?: "flex-start" | "flex-end" | "center";
  margin?: string;
}

const Wrapper = styled.div<Pick<IProps, "justifyContent">>`
  display: flex;
  flex-wrap: wrap;
  justify-content: ${(props) => props.justifyContent};
`;

const Item = styled(Paper)<Pick<IProps, "margin">>`
  font-size: 0.8rem;
  padding: 0.25rem 0.5rem;
  margin: ${(props) => props.margin};
  background-color: ${(props) => lighten(props.theme.colors.mainblack, 0.15)};
  color: ${(props) => darken(props.theme.colors.mainwhite, 0.15)};
`;

export const Technologies = ({
  technologies = [],
  justifyContent = "flex-start",
  margin = "0.5rem 1rem 0.5rem 0",
}: IProps) => {
  const { t } = useTranslation();
  return (
    <Wrapper justifyContent={justifyContent}>
      {technologies.map((technology: string, idx: number) => (
        <Item margin={margin} key={idx}>
          {t(technology as any)}
        </Item>
      ))}
    </Wrapper>
  );
};
