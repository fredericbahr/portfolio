import {
  AppBar,
  IconButton,
  Slide,
  Toolbar,
  useScrollTrigger,
  darken,
} from "@mui/material";
import React from "react";
import Logo from "../Logo/Logo";
import styled from "styled-components";
import { Navbar } from "../Navbar/Navbar";
import { timeout } from "../../utils/constants";

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

  return (
    <>
      <Slide direction="down" in={!trigger} timeout={timeout}>
        <StyledAppBar color="inherit">
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
