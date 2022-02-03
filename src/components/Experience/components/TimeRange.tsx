import React from "react";
import moment from "moment";
import { darken, Typography, TypographyProps } from "@mui/material";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

interface IProps {
  from: string;
  to: string | "Present";
}

type TypographyType = React.ComponentType<TypographyProps<"span", { component: "span" }>>;

const StyledTypography: TypographyType = styled(Typography)`
  font-size: 0.9rem;
  color: ${(props) => darken(props.theme.colors.mainwhite, 0.5)};
`;

const isDate = (date: string) => {
  const formats = ["YYYY-MM-DD"];
  return moment(date, formats).isValid();
};

export const TimeRange = ({ from, to }: IProps) => {
  const { t } = useTranslation();

  return (
    <div>
      <StyledTypography component="span">{moment(from).format("MMMM YYYY")}</StyledTypography>
      <StyledTypography component="span">{" - "}</StyledTypography>
      <StyledTypography component="span">{isDate(to) ? moment(to).format("MMMM YYYY") : t(to as any)}</StyledTypography>
    </div>
  );
};
