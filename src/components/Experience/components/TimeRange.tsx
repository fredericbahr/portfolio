import { darken, Typography, TypographyProps } from "@mui/material";
import moment from "moment";
import React from "react";
import { useTranslation } from "react-i18next";
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

const isDate = (date: string) => {
  const formats = ["YYYY-MM-DD"];
  return moment(date, formats).isValid();
};

export const TimeRange = ({ from, to }: IProps) => {
  const { t } = useTranslation();

  return (
    <div>
      <StyledTypography component="span">
        {t("{{val, datetime}}" as any, {
          val: new Date(from),
          formatParams: {
            val: { year: "numeric", month: "long" },
          },
        })}
      </StyledTypography>
      <StyledTypography component="span">{" - "}</StyledTypography>
      <StyledTypography component="span">
        {isDate(to)
          ? t("{{val, datetime}}" as any, {
              val: new Date(to),
              formatParams: {
                val: { year: "numeric", month: "long" },
              },
            })
          : t(to as any)}
      </StyledTypography>
    </div>
  );
};
