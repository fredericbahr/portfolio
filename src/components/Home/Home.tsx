import React from "react";
import { NavHashLink } from "react-router-hash-link";

export default function Home() {
  return (
    <nav>
      <ul>
        <li>
          <NavHashLink smooth to="/#about">
            About
          </NavHashLink>
        </li>
        <li>
          <NavHashLink smooth to="/#experience">
            Experience
          </NavHashLink>
        </li>
        <li>
          <NavHashLink smooth to="/#projects">
            Projects
          </NavHashLink>
        </li>
      </ul>
    </nav>
  );
}
