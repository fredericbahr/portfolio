import { Card } from "@mui/material";
import React from "react";
import styled from "styled-components";
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
`;

const Chat = ({ clickHandler }: IProps) => {
  return (
    <StyledCard>
      <ChatHeader clickHandler={clickHandler} />
      <ChatMessages />
    </StyledCard>
  );
};

export default Chat;
