import React from "react";
import moment from "moment";
import { darken, Typography, TypographyProps } from "@mui/material";
import styled from "styled-components";

interface IProps {
  from: string;
  to: string | "Present";
}

type TypographyType = React.ComponentType<TypographyProps<"span", { component: "span" }>>;

const StyledTypography: TypographyType = styled(Typography)`
  font-size: 0.9rem;
  color: ${(props) => darken(props.theme.colors.mainwhite, 0.5)};
`;

export const TimeRange = ({ from, to }: IProps) => {
  return (
    <div>
      <StyledTypography component="span">{moment(from).format("MMM YYYY")}</StyledTypography>
      <StyledTypography component="span">{" - "}</StyledTypography>
      <StyledTypography component="span">
        {to === "Present" ? "Present" : moment(to).format("MMM YYYY")}
      </StyledTypography>
    </div>
  );
};
