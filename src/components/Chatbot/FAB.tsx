import React from "react";
import { Fab, Grow, Tooltip } from "@mui/material";
import styled from "styled-components";
import { ChatBubbleOutline } from "@mui/icons-material";
import { lighten, darken } from "@mui/system";
import { useTranslation } from "react-i18next";

const StyledFab = styled(Fab)`
  background-color: ${(props) => lighten(props.theme.colors.mainblack, 0.05)};
  position: fixed;
  bottom: 1vmax;
  right: 2vmax;

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
      <Tooltip title={t("chatbot.tooltip") as string}>
        <StyledFab onClick={clickHandler} color="primary">
          <ChatBubbleOutline />
        </StyledFab>
      </Tooltip>
    </Grow>
  );
};

export default FAB;
