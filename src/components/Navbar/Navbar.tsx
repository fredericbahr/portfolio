import { useMediaQuery } from "@mui/material";
import React, { useEffect, useState } from "react";
import { breakpoints } from "../../styles/globalStyles";
import { navbarDelay } from "../../utils/constants";
import { MenuNavbar } from "./MenuNavbar";
import { SideBySideNavbar } from "./SideBySideNavbar";

export const Navbar = () => {
  const [isMounted, setIsMounted] = useState(false);
  const mediaQuery = useMediaQuery(`(max-width: ${breakpoints.sm})`);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), navbarDelay);
    return () => clearTimeout(timeout);
  }, []);

  return mediaQuery ? <MenuNavbar isMounted={isMounted} /> : <SideBySideNavbar isMounted={isMounted} />;
};
