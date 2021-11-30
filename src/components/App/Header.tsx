import { AppBar, lighten, IconButton, Slide, Toolbar, useScrollTrigger, emphasize, darken } from "@mui/material";
import React from "react";
import Logo from "../Logo/Logo";
import styled from "styled-components";
import { Navbar } from "../Navbar/Navbar";

const StyledAppBar = styled(AppBar)`
  flex-direction: row;
  background-color: ${(props) => props.theme.mainblack};
  padding: 5px 0;
`;

const StyledIconButton = styled(IconButton)`
  margin-left: 1vmax;
  width: 50px;
  height: 50px;
  
  &:hover {
    background-color: ${props => darken(props.theme.mainred, 0.7)};
  }
`;

const StyledLogo = styled(Logo)`
  width: 50px;
  height: 50px;

  &:hover path {
    stroke: ${props => darken(props.theme.mainred, 0.1)};
    fill: ${props => darken(props.theme.mainred, 0.1)};
  }
`;

export const Header = () => {
  const trigger = useScrollTrigger({
    target: window,
  });

  return (
    <>
      <Slide appear={false} direction="down" in={!trigger}>
        <StyledAppBar color="inherit">
          <StyledIconButton>
            <StyledLogo />
          </StyledIconButton>
          <Navbar />
        </StyledAppBar>
      </Slide>
      <Toolbar />
    </>
  );
};
