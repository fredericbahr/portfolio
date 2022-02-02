import { Typography, TypographyProps } from "@mui/material";
import React from "react";
import styled from "styled-components";
import { StyledLink } from "../../util-components/StyledLink";

interface IProps {
  title: string;
  companyName: string;
  url: string;
}

type TypographyType = React.ComponentType<TypographyProps<"span", { component: "span" }>>;


const Wrapper = styled.h3`
  display: flex;
`;

const Title: TypographyType = styled(Typography)``;

const At: TypographyType = styled(Typography)`
  margin: 0 10px;
`;



export const WorkingTitle = ({ title, companyName, url }: IProps) => {
  return (
    <Wrapper>
      <Title component="span">{title}</Title>
      <At component="span">@</At>
      <StyledLink url={url}>{companyName}</StyledLink>
    </Wrapper>
  );
};
