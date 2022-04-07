import React from "react";
import styled from "styled-components";

interface IProps {
  children: React.ReactNode;
}

const StyledHeadline = styled.h2`
  font-size: 2rem;
  margin-bottom: 5vh;
  width: 100%;
  text-transform: uppercase;

  &:before {
    counter-increment: section;
    content: "0" counter(section) ".";
    color: ${(props) => props.theme.colors.mainred};
    font-size: 1.3rem;
    margin-right: 15px;
    font-family: "Fira Code";
  }
`;

export const SectionHeadline = ({ children }: IProps) => {
  return <StyledHeadline>{children}</StyledHeadline>;
};
