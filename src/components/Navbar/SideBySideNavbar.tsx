import { Slide } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import { NavHashLink } from "react-router-hash-link";
import styled from "styled-components";
import { navLinks } from "../../data/navLinks";
import { transition, navbarItemBaseDelay, navbarItemExtraDelay } from "../../utils/constants";
import { LanguageSwitcher } from "../LanguageSwitcher/LanguageSwitcher";
import { INavLink } from "./interface";

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

export const SideBySideNavbar = ({ isMounted }: IProps) => {
  const { t } = useTranslation();

  return (
    <StyledNav>
      <StyledOl>
        {isMounted &&
          navLinks.map((link: INavLink, idx: number) => {
            return (
              <Slide key={idx} in={isMounted} timeout={navbarItemBaseDelay + idx * navbarItemExtraDelay}>
                <StyledLi key={idx}>
                  <StyledNavHashLink smooth to={link.url}>
                    {t(link.title as any)}
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
