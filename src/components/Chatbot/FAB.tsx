import React from "react";
import { Fab, Grow } from "@mui/material";
import styled from "styled-components";
import { ChatBubbleOutline } from "@mui/icons-material";
import { lighten, darken } from "@mui/system";

const StyledFab = styled(Fab)`
  background-color: ${(props) => lighten(props.theme.mainblack, 0.05)};
  position: fixed;
  bottom: 1vmax;
  right: 2vmax;

  &:hover {
    background-color: ${(props) => darken(props.theme.mainblack, 1)};
  }
`;

interface IProps {
  clickHandler: () => void;
}

const FAB = ({ clickHandler }: IProps) => {
  return (
    <Grow in>
      <StyledFab onClick={clickHandler} color="primary">
        <ChatBubbleOutline />
      </StyledFab>
    </Grow>
  );
};

export default FAB;
