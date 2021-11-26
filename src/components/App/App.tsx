import React from "react";
import "./App.css";
import Home from "../Home/Home";
import About from "../About/About";
import NotFound from "../NotFound/NotFound";
import Experience from "../Experience/Experience";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";
import Chatbot from "../Chatbot/Chatbot";
import { StyledEngineProvider } from "@mui/system";

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <Home />
      <Chatbot />
      <About />
      <Experience />
      <Projects />
    </StyledEngineProvider>
  );
}

export default App;
