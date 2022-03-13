import { createGlobalStyle } from "styled-components";

export const breakpoints = {
  xl: "1536px",
  lg: "1200px",
  md: "900px",
  sm: "600px",
  xs: "0px",
};

export const GlobalStyle = createGlobalStyle`
html {
  font-size: 20px;

  @media screen and (min-width: ${breakpoints.lg}) and (max-width: ${breakpoints.xl}) {
    font-size: 16px;
  }

  @media screen and (max-width: ${breakpoints.lg}){
    font-size: 14px;
  }

}

body {
  margin: 0;
  font-family: "Fira Code", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow-x: hidden;
  color: ${(props) => props.theme.colors.whitefontcolor};
  counter-reset: section 0;
  background-color: ${props => props.theme.colors.mainblack};
}

code {
  font-family: "Courier New",
    monospace;
}


canvas { width: 100%; height: 100%; display: block;}

  /* ===== Scrollbar CSS ===== */
/* Firefox */
* {
  scrollbar-width: thin;
  scrollbar-color: #cc0e00 #181114;
  margin: 0;
  padding: 0;
}

/* Chrome, Edge, and Safari */
*::-webkit-scrollbar {
  width: 9px;
}

*::-webkit-scrollbar-track {
  background: #181114;
}

*::-webkit-scrollbar-thumb {
  background-color: #cc0e00;
  border-radius: 0px;
  border: 0px none #cc0e00;
}
`;
