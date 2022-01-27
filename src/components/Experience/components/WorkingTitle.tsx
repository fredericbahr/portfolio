import { Typography } from "@mui/material";
import React from "react";
import styled from "styled-components";

interface IProps {
  title: string;
  companyName: string;
  url: string;
}

const Wrapper = styled.div`
  display: flex;
`;

const Title = styled(Typography)``;

const At = styled(Typography)``;

const Company = styled.a``;

export const WorkingTitle = ({ title, companyName, url }: IProps) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <At>@</At>
      <Company href={url}>{companyName}</Company>
    </Wrapper>
  );
};
