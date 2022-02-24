import { lighten } from "@mui/material";
import React from "react";
import styled, { keyframes } from "styled-components";

interface IProps {
  show?: boolean;
  text: string;
}

const float = keyframes`
  0% {
    transform: translateY(-1rem);
  }
  50% {
    transform: translateY(-1.5rem);
  }
  100% {
    transform: translateY(-1rem);
  }
`;

const float2 = keyframes`
0% {
    line-height: 1.5rem;
    transform: translateY(-0.75rem);
  }
  55% {
    transform: translateY(-1rem);
  }
  60% {
    line-height: 0.5rem;
  }
  100% {
    line-height: 1.5rem;
    transform: translateY(-0.75rem);
  }
`;

const Bubble = styled.p`
  animation: ${float} 4s ease-in-out infinite;
  text-align: center;
  font-weight: bold;
  letter-spacing: 3px;
  font-size: 0.85rem;
  color: ${(props) => props.theme.colors.whitefontcolor};
  background-color: ${(props) => lighten(props.theme.colors.mainblack, 0.25)};
  padding: 1rem;
  border-radius: 0.75rem;
  box-shadow: 0.25rem 0.25rem ${(props) => lighten(props.theme.colors.mainblack, 0.1)};
  max-width: 10rem;
  word-wrap: break-word;

  &::after {
    animation: ${float2} 4s ease-in-out infinite;
    content: ".";
    -webkit-text-fill-color: ${(props) => lighten(props.theme.colors.mainblack, 0.25)};
    text-align: right;
    font-size: 2.7rem;
    width: 2.5rem;
    height: 0.5rem;
    border-radius: 0.75rem;
    background-color: ${(props) => lighten(props.theme.colors.mainblack, 0.25)};
    position: absolute;
    display: block;
    bottom: -2rem;
    right: 0;
    transform: translateX(-200px);
  }
`;

export const TextBubble = ({ show = true, text }: IProps) => {
  return show ? <Bubble>{text}</Bubble> : null;
};
