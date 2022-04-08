import { ChatBubbleOutline } from "@mui/icons-material";
import { Fab, Grow, Tooltip } from "@mui/material";
import { darken, lighten } from "@mui/system";
import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

const StyledFab = styled(Fab)`
  background-color: ${(props) => lighten(props.theme.colors.mainblack, 0.05)};
  position: fixed;
  bottom: 1vmax;
  right: 2vmax;

  z-index: 10;

  &:hover {
    background-color: ${(props) => darken(props.theme.colors.mainblack, 1)};
  }
`;

interface IProps {
  clickHandler: () => void;
}

const FAB = ({ clickHandler }: IProps) => {
  const { t } = useTranslation();

  return (
    <Grow in>
      <Tooltip title={t("chatbot.tooltip")}>
        <StyledFab onClick={clickHandler} color="primary">
          <ChatBubbleOutline />
        </StyledFab>
      </Tooltip>
    </Grow>
  );
};

export default FAB;
