import React, { useEffect, useState } from "react";
import "./App.css";
import About from "../About/About";
import NotFound from "../NotFound/NotFound";
import Experience from "../Experience/Experience";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";
import Chatbot from "../Chatbot/Chatbot";
import { Header } from "./Header";
import AnimatedLogo from "../Logo/AnimatedLogo";
import styled from "styled-components";
import { Fade } from "@mui/material";

const StyledLogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${(props) => props.theme.mainblack};
`;

const StyledAnimatedLogo = styled(AnimatedLogo)`
  width: 30vw;
  height: 30vh;
`;

const StyledContentWrapper = styled.div`
  background-color: ${(props) => props.theme.mainblack};
  color: ${(props) => props.theme.whitecolorfont};
`;

function App() {
  const [isInAnimation, setIsInAnimation] = useState(true);

  useEffect(() => {
    const id = setTimeout(() => {
      setIsInAnimation(false);
    }, 2800);
    return () => clearTimeout(id);
  }, [isInAnimation]);

  return isInAnimation ? (
    <StyledLogoWrapper>
      <StyledAnimatedLogo />
    </StyledLogoWrapper>
  ) : (
    <StyledContentWrapper>
      <Header homeClickHandler={() => setIsInAnimation(true)} />
      <Chatbot />
      <About />
      <Experience />
      <Projects />
    </StyledContentWrapper>
  );
}

export default App;
