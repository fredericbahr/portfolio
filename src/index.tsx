import { StyledEngineProvider, ThemeProvider as MUIThemeProvider } from "@mui/material/styles";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import App from "./components/App/App";
import "./i18n/i18n";
import reportWebVitals from "./reportWebVitals";
import { GlobalStyle } from "./styles/globalStyles";
import { muiTheme } from "./styles/muiTheme";
import { theme } from "./styles/styledComponentsTheme";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <StyledEngineProvider injectFirst>
        <MUIThemeProvider theme={muiTheme}>
          <ThemeProvider theme={theme}>
            <GlobalStyle />
            <App />
          </ThemeProvider>
        </MUIThemeProvider>
      </StyledEngineProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root"),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
