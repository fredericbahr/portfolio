import { Slide } from "@mui/material";
import React, { useEffect, useState } from "react";
import { NavHashLink } from "react-router-hash-link";
import { TransitionGroup } from "react-transition-group";
import styled from "styled-components";
import { navLinks } from "../../data/navLinks";
import { INavLink } from "../../interfaces/nav";

const StyledNav = styled.nav`
  flex: 1;
  display: flex;
  justify-content: end;
  align-items: center;
  font-family: "Fira Code", monospace;
  color: ${(props) => props.theme.mainwhite};
`;

const StyledOl = styled.ol`
  display: flex;
  flex-direction: row;
  list-style: none;
  counter-reset: item 0;
  margin-right: 1vmax;
`;

const StyledLi = styled.li`
  counter-increment: item 1;
  margin: 0 10px;
`;

const StyledNavHashLink = styled(NavHashLink)`
  text-decoration: none;
  color: inherit;
  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);

  &:hover {
    color: ${(props) => props.theme.mainred};
  }

  &::before {
    content: "0" counter(item) ".";
    color: ${(props) => props.theme.mainred};
    padding: 7px;
  }
`;

export const Navbar = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 500);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <StyledNav>
      <StyledOl>
        {isMounted &&
          navLinks.map((link: INavLink, idx: number) => {
            return (
              <Slide key={idx} in={isMounted} timeout={200 + idx * 300}>
                <StyledLi key={idx}>
                  <StyledNavHashLink smooth to={link.url}>
                    {link.title}
                  </StyledNavHashLink>
                </StyledLi>
              </Slide>
            );
          })}
      </StyledOl>
    </StyledNav>
  );
};
