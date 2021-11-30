import React from "react";
import { NavHashLink } from "react-router-hash-link";
import styled from "styled-components";

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
  return (
    <StyledNav>
      <StyledOl>
        <StyledLi>
          <StyledNavHashLink smooth to="/#about">
            About
          </StyledNavHashLink>
        </StyledLi>
        <StyledLi>
          <StyledNavHashLink smooth to="/#experience">
            Experience
          </StyledNavHashLink>
        </StyledLi>
        <StyledLi>
          <StyledNavHashLink smooth to="/#projects">
            Projects
          </StyledNavHashLink>
        </StyledLi>
      </StyledOl>
    </StyledNav>
  );
};
