import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { transition } from "../../utils/constants";

interface IProps {
  url: string;
}

const Link = styled.a`
  text-decoration: none;
  color: ${(props) => props.theme.colors.mainred};
  transition: ${transition};
  position: relative;
  display: inline-block;

  &:hover {
    &::after {
      width: 100%;
    }
  }

  &::after {
    content: "";
    display: block;
    width: 0;
    height: 1.5px;
    position: relative;
    background-color: ${(props) => props.theme.colors.mainred};
    opacity: 0.5;
    transition: ${transition};
    bottom: 0.2rem;
  }
`;

export const StyledLink: FunctionComponent<IProps> = ({ url, children }) => {
  return (
    <Link href={url} target={"_blank"}>
      {children}
    </Link>
  );
};
