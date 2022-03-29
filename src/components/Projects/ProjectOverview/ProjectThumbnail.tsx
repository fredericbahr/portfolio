import { lighten } from "@mui/material";
import React from "react";
import styled from "styled-components";
import { transition } from "../../../utils/constants";

interface IProps {
  imgUrl: string;
  altText?: string;
}

const StyledFigure = styled.figure`
  background-color: ${(props) => lighten(props.theme.colors.mainred, 0.25)};
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
  }
`;

export const ProjectThumbnail = ({ imgUrl, altText }: IProps) => {
  return (
    <StyledFigure>
      <StyledImage src={imgUrl} alt={altText} />
    </StyledFigure>
  );
};
