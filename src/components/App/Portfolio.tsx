import React from "react";
import About from "../About/About";
import Chatbot from "../Chatbot/Chatbot";
import Experience from "../Experience/Experience";
import { Footer } from "../Footer/Footer";
import { Introduction } from "../Introduction/Introduction";
import Projects from "../Projects/Projects";

export const Portfolio = () => {
  return (
    <>
      <Introduction />
      <About />
      <Experience />
      <Projects />
      <Chatbot />
      <Footer />
    </>
  );
};
