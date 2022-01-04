import { Fade } from "@mui/material";
import React, { ReactNode } from "react";
import styled from "styled-components";

interface IProps {
  children: ReactNode;
  owner: "bot" | "customer";
}

const StyledMessageWrapper = styled.div<IProps>`
  display: flex;
  justify-content: ${(props) => (props.owner === "bot" ? "start" : "end")};
`;

const StyledMessage = styled.p<IProps>`
  box-sizing: border-box;
  padding: 0.5rem 1rem;
  margin: 0.5rem 0;
  background: ${(props) => (props.owner === "bot" ? "rgba(70, 77, 66, 0.15)" : "black")};
  color: ${(props) => (props.owner === "bot" ? "black" : "white")};
  border-radius: ${(props) =>
    props.owner === "bot" ? "1.125rem 1.125rem 1.125rem 0" : "1.125rem 1.125rem 0 1.125rem"};
  min-height: 2.25rem;
  width: fit-content;
  max-width: 80%;
  box-shadow: 0 0 2rem rgba(black, 0.075), 0rem 1rem 1rem -1rem rgba(black, 0.1);
  word-wrap: break-word;
  hyphens: auto;
`;

const ChatText = ({ children, owner }: IProps) => {
  return (
    <Fade in appear>
      <StyledMessageWrapper owner={owner}>
        <StyledMessage owner={owner}>{children}</StyledMessage>
      </StyledMessageWrapper>
    </Fade>
  );
};

export default ChatText;
