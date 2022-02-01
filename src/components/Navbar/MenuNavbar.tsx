import { IconButton, lighten, List, ListItem, ListItemButton, Slide, SwipeableDrawer } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import React from "react";
import styled from "styled-components";
import { navbarItemBaseDelay, navbarItemExtraDelay, transition } from "../../utils/constants";
import { LanguageSwitcher } from "../LanguageSwitcher/LanguageSwitcher";
import { NavHashLink } from "react-router-hash-link";
import { navLinks } from "../../data/navLinks";
import { INavLink } from "./interface";
import { useTranslation } from "react-i18next";

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

const StyledSwipeableDrawer = styled(SwipeableDrawer)`
  & .MuiPaper-root {
    background-color: transparent;
  }
`;

const DrawerWrapper = styled.div`
  display: grid;
  flex-direction: column;
  place-content: center;
  background-color: ${(props) => lighten(props.theme.colors.mainblack, 0.3)};
  border-radius: 8px 8px 0 0;
`;

const Puller = styled.div`
  display: flex;
  width: 2rem;
  height: 6px;
  background-color: ${(props) => lighten(props.theme.colors.mainblack, 0.05)};
  border-radius: 3px;
  margin-top: 0.75rem;
  justify-self: center;
`;

const StyledListItemButton = styled(ListItemButton)`
  color: ${(props) => props.theme.colors.mainwhite};
  transition: ${transition};
  justify-content: center;

  &:hover {
    color: ${(props) => props.theme.colors.mainred};
  }
`;

const StyledNavHashLink = styled(NavHashLink)`
  text-decoration: none;
  color: inherit;
  transition: ${transition};
  font-size: 1.3rem;

  &:hover {
    color: ${(props) => props.theme.colors.mainred};
  }
`;

export const MenuNavbar = ({ isMounted }: IProps) => {
  const drawerBleeding = 56;
  const { t } = useTranslation();
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const MenuIconButton = open ? (
    <IconButton onClick={toggleDrawer(false)}>
      <StyledCloseIcon />
    </IconButton>
  ) : (
    <IconButton onClick={toggleDrawer(true)}>
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
      <StyledSwipeableDrawer
        anchor="bottom"
        open={open}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        swipeAreaWidth={drawerBleeding}
        disableSwipeToOpen={false}
      >
        <DrawerWrapper>
          <Puller />
          <List>
            {navLinks.map((link: INavLink, idx: number) => {
              return (
                <ListItem>
                  <StyledListItemButton >
                    <StyledNavHashLink smooth to={link.url} onClick={toggleDrawer(false)}>
                      {t(link.title as any)}
                    </StyledNavHashLink>
                  </StyledListItemButton>
                </ListItem>
              );
            })}
          </List>
        </DrawerWrapper>
      </StyledSwipeableDrawer>
    </>
  );
};
