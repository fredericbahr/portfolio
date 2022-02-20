import { AppBar, darken, IconButton, Slide, Toolbar, useMediaQuery, useScrollTrigger } from "@mui/material";
import React from "react";
import styled from "styled-components";
import { breakpoints } from "../../styles/globalStyles";
import { timeout } from "../../utils/constants";
import Logo from "../Logo/Logo";
import { Navbar } from "../Navbar/Navbar";

interface IProps {
  homeClickHandler: () => void;
}

const StyledAppBar = styled(AppBar)`
  flex-direction: row;
  background-color: ${(props) => props.theme.colors.mainblack};
  padding: 5px 0;
`;

const StyledIconButton = styled(IconButton)`
  margin-left: 1vmax;
  width: 50px;
  height: 50px;

  &:hover {
    background-color: ${(props) => darken(props.theme.colors.mainred, 0.7)};
  }
`;

const StyledLogo = styled(Logo)`
  width: 50px;
  height: 50px;

  &:hover path {
    stroke: ${(props) => darken(props.theme.colors.mainred, 0.1)};
    fill: ${(props) => darken(props.theme.colors.mainred, 0.1)};
  }
`;

export const Header = ({ homeClickHandler }: IProps) => {
  const trigger = useScrollTrigger({
    target: window,
    threshold: 50,
  });
  const staticPosition = useMediaQuery(`(max-width: ${breakpoints.md})`);

  return (
    <>
      <Slide direction="down" in={!trigger} timeout={timeout}>
        <StyledAppBar color="inherit" position={staticPosition ? "absolute" : "fixed"}>
          <Slide direction="down" in={!trigger} timeout={timeout}>
            <StyledIconButton onClick={homeClickHandler}>
              <StyledLogo />
            </StyledIconButton>
          </Slide>
          <Navbar />
        </StyledAppBar>
      </Slide>
      <Toolbar />
    </>
  );
};
