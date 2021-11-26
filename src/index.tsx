import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App/App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider as MUIThemeProvider } from "@mui/material/styles";
import { ThemeProvider } from "styled-components";
import { theme } from "./assets/styles/styledComponentsTheme";
import { muiTheme } from "./assets/styles/muiTheme";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <MUIThemeProvider theme={muiTheme}>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </MUIThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root"),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
