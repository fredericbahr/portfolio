import { Typography } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

interface IProps {
  className?: string;
  description: string | string[];
}

const StyledTypography = styled(Typography)`
  margin: 2vh 0;
  width: 85%;
`;

const StyledList = styled.ul`
  margin: 2vh 0;
  width: 85%;
`;

const StyledListItem = styled.li`
  list-style: none;
  display: flex;
  margin: 1.75rem 0;

  &::before {
    display: block;
    content: "⏵";
    font-size: 0.7rem;
    padding-right: 8px;
    color: ${(props) => props.theme.colors.mainred};
  }
`;

const isArray = (arr: string | string[]): arr is string[] => {
  return Array.isArray(arr);
};

export const Description = ({ description, className }: IProps) => {
  const { t } = useTranslation();

  const renderUnorderedList = (descriptions: string[]) => {
    const listItems = descriptions.map((description: string, idx: number) => (
      <StyledListItem key={idx}>{t(description as any)}</StyledListItem>
    ));

    return <StyledList>{listItems}</StyledList>;
  };

  return isArray(description) ? (
    renderUnorderedList(description)
  ) : (
    <StyledTypography>{t(description as any)}</StyledTypography>
  );
};
