import { Slide } from "@mui/material";
import React, { useEffect, useState } from "react";
import { NavHashLink } from "react-router-hash-link";
import styled from "styled-components";
import { navLinks } from "../../data/navLinks";
import { navbarDelay, navbarItemBaseDelay, navbarItemExtraDelay, transition } from "../../utils/constants";
import { LanguageSwitcher } from "../LanguageSwitcher/LanguageSwitcher";
import { INavLink } from "./interface";

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

const StyledNavHashLink = styled(NavHashLink)`
  text-decoration: none;
  color: inherit;
  transition: ${transition};

  &:hover {
    color: ${(props) => props.theme.colors.mainred};
  }

  &::before {
    content: "0" counter(item) ".";
    color: ${(props) => props.theme.colors.mainred};
    padding: 7px;
  }
`;

export const Navbar = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), navbarDelay);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <StyledNav>
      <StyledOl>
        {isMounted &&
          navLinks.map((link: INavLink, idx: number) => {
            return (
              <Slide key={idx} in={isMounted} timeout={navbarItemBaseDelay + idx * navbarItemExtraDelay}>
                <StyledLi key={idx}>
                  <StyledNavHashLink smooth to={link.url}>
                    {link.title}
                  </StyledNavHashLink>
                </StyledLi>
              </Slide>
            );
          })}
        <Slide in={isMounted} timeout={navbarItemBaseDelay + navLinks.length * navbarItemExtraDelay}>
          <StyledLi>
            <LanguageSwitcher />
          </StyledLi>
        </Slide>
      </StyledOl>
    </StyledNav>
  );
};
