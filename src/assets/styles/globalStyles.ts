import { createGlobalStyle } from "styled-components";
import { theme } from "./styledComponentsTheme";

export const GlobalStyle = createGlobalStyle`
  body {
  }

  /* ===== Scrollbar CSS ===== */
/* Firefox */
* {
  scrollbar-width: thin;
  scrollbar-color: #cc0e00 #181114;
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
