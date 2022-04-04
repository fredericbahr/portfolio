import { lighten } from "@mui/material";
import React from "react";
import styled from "styled-components";
import { transition } from "../../../utils/constants";

interface IProps {
  imgUrl: string;
  altText?: string;
  onClick: () => void;
}

const StyledFigure = styled.figure`
  background-color: ${(props) => lighten(props.theme.colors.mainred, 0.25)};
  overflow: hidden;
  grid-column: 1/7;
  grid-row: 1/2;
  cursor: pointer;
`;

const StyledImage = styled.img`
  opacity: 0.7;
  width: 100%;
  height: 100%;
  object-fit: cover;
  -webkit-transition: ${transition};
  transition: ${transition};

  &:hover {
    opacity: 1;
    transform: scale(1.05);
  }
`;

export const ProjectThumbnail = ({ imgUrl, altText, onClick }: IProps) => {
  return (
    <StyledFigure onClick={onClick}>
      <StyledImage src={imgUrl} alt={altText} />
    </StyledFigure>
  );
};
