import React from "react";
import "./App.css";
import { HashRouter, Link, Route, Routes } from "react-router-dom";
import About from "../About/About";

function App() {
  return (
    <HashRouter basename="/">
      <div>
        <nav>
          <ul>
            <Link to="/about">About</Link>
          </ul>
        </nav>
        <div>
          <Routes>
            <Route path="about" element={About()} />
          </Routes>
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
