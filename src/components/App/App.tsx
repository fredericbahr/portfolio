import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Contact from "../Contact/Contact";
import AnimatedLogo from "../Logo/AnimatedLogo";
import "./App.css";
import { Header } from "./Header";
import { Portfolio } from "./Portfolio";

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
  const [isInAnimation, setIsInAnimation] = useState(true);
  const navigate = useNavigate();

  const handleHomeClick = () => {
    setIsInAnimation(true);
    navigate("/", { replace: true });
  };

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
      <Header homeClickHandler={handleHomeClick} />
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Portfolio />} />
      </Routes>
    </StyledContentWrapper>
  );
}

export default App;
