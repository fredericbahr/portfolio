import { lighten } from "@mui/material";
import React from "react";
import styled from "styled-components";
import { transition } from "../../../utils/constants";

interface IProps {
  imgUrl: string;
  altText?: string;
  leftSideThumbnail: boolean;
  onClick: () => void;
}

const StyledFigure = styled.figure<{ leftSideThumbnail: boolean }>`
  background-color: ${(props) => lighten(props.theme.colors.mainred, 0.22)};
  overflow: hidden;
  grid-column: ${(props) => (props.leftSideThumbnail ? "1/7" : "7/-1")};
  grid-row: 1/2;
  cursor: pointer;
  transition: ${transition};
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

export const ProjectThumbnail = ({ imgUrl, altText, leftSideThumbnail, onClick }: IProps) => {
  return (
    <StyledFigure onClick={onClick} leftSideThumbnail={leftSideThumbnail}>
      <StyledImage src={imgUrl} alt={altText} />
    </StyledFigure>
  );
};
