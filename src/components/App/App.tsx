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
import { Introduction } from "../Introduction/Introduction";

const StyledLogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${(props) => props.theme.colors.mainblack};
`;

const StyledAnimatedLogo = styled(AnimatedLogo)`
  width: 30vw;
  height: 30vh;
`;

const StyledContentWrapper = styled.div`
  background-color: ${(props) => props.theme.colors.mainblack};
  color: ${(props) => props.theme.colors.whitefontcolor};
`;

function App() {
  const [isInAnimation, setIsInAnimation] = useState(false);

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
      <Introduction />
      <About />
      <Experience />
      <Projects />
      <Chatbot />
    </StyledContentWrapper>
  );
}

export default App;
