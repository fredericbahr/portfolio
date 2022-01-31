import { IconButton, Menu, Slide } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import React from "react";
import styled from "styled-components";
import { navbarItemBaseDelay, navbarItemExtraDelay } from "../../utils/constants";
import { LanguageSwitcher } from "../LanguageSwitcher/LanguageSwitcher";

interface IProps {
  isMounted: boolean;
}

const StyledNav = styled.nav`
  flex: 1;
  display: flex;
  justify-content: end;
  align-items: center;
  font-family: "Fira Code", monospace;
  color: ${(props) => props.theme.colors.mainwhite};
`;

const StyledOl = styled.ol`
  display: flex;
  flex-direction: row;
  list-style: none;
  counter-reset: item 0;
  margin-right: 1vmax;
  align-items: center;
`;

const StyledLi = styled.li`
  counter-increment: item 1;
  margin: 0 10px;
  font-size: 0.8rem;
`;

const StyledMenuIcon = styled(MenuIcon)`
  color: ${(props) => props.theme.colors.mainwhite};
`;

const StyledCloseIcon = styled(CloseIcon)`
  color: ${(props) => props.theme.colors.mainwhite};

  &:hover {
      cursor: pointer;
  }
`;

export const MenuNavbar = ({ isMounted }: IProps) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const MenuIconButton = open ? (
    <IconButton onClick={handleClose}>
      <StyledCloseIcon />
    </IconButton>
  ) : (
    <IconButton onClick={handleClick}>
      <StyledMenuIcon />
    </IconButton>
  );

  return (
    <>
      <StyledNav>
        <StyledOl>
          <Slide in={isMounted} timeout={navbarItemBaseDelay}>
            <StyledLi>
              <LanguageSwitcher />
            </StyledLi>
          </Slide>
          <Slide in={isMounted} timeout={navbarItemBaseDelay + navbarItemExtraDelay}>
            <StyledLi>{MenuIconButton}</StyledLi>
          </Slide>
        </StyledOl>
      </StyledNav>
      <Menu open={open} anchorEl={anchorEl} onClose={handleClose}></Menu>
    </>
  );
};
