import React, { ReactNode } from "react";
import styled from "styled-components";

interface IProps {
  children: ReactNode;
  owner: "bot" | "customer";
}

const ChatText = ({ children, owner }: IProps) => {
  const StyledMessageWrapper = styled.div`
    display: flex;
    justify-content: ${owner === "bot" ? "start" : "end"};
  `;

  const StyledMessage = styled.p`
    box-sizing: border-box;
    padding: 0.3rem 1rem;
    margin: 0.5rem 0;
    background: ${owner === "bot" ? "rgba(70, 77, 66, 0.15)" : "black"};
    color: ${owner === "bot" ? "black" : "white"};
    border-radius: ${owner === "bot" ? "1.125rem 1.125rem 1.125rem 0" : "1.125rem 1.125rem 0 1.125rem"};
    min-height: 2.25rem;
    width: fit-content;
    max-width: 80%;
    box-shadow: 0 0 2rem rgba(black, 0.075), 0rem 1rem 1rem -1rem rgba(black, 0.1);
  `;

  return (
    <StyledMessageWrapper>
      <StyledMessage>{children}</StyledMessage>
    </StyledMessageWrapper>
  );
};

export default ChatText;
