import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import App from "./App";
import { GlobalStyle, Theme } from "./theme";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
