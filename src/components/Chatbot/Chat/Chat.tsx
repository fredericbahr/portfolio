import { Card, Slide } from "@mui/material";
import React from "react";
import styled from "styled-components";
import { breakpoints } from "../../../styles/globalStyles";
import ChatHeader from "./ChatHeader";
import ChatMessages from "./ChatMessages";

interface IProps {
  clickHandler: () => void;
}

const StyledCard = styled(Card)`
  display: flex;
  flex-direction: column;
  position: fixed;
  bottom: 1vmax;
  right: 2vmax;
  width: 25vw;
  height: 75vh;

  @media screen and (max-width: ${breakpoints.md}) {
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 1200;
  }
`;

const Chat = ({ clickHandler }: IProps) => {
  return (
    <Slide direction="up" in>
      <StyledCard>
        <ChatHeader clickHandler={clickHandler} />
        <ChatMessages />
      </StyledCard>
    </Slide>
  );
};

export default Chat;
