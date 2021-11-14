import React from "react";
import "./App.css";
import Home from "../Home/Home";
import { Route, Routes } from "react-router";
import About from "../About/About";
import NotFound from "../NotFound/NotFound";
import Experience from "../Experience/Experience";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";

function App() {
  return (
    <>
      <Home />
      <About />
      <Experience />
      <Projects />
    </>
  );
}

export default App;
