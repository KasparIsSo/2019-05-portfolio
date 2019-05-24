import React from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";

import App from "./pages/App";

const GlobalStyle = createGlobalStyle`
  body {
    color: #333;
    background-color: #FCF3F1;
  }
`;

render(
  <>
    <GlobalStyle />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </>,
  document.getElementById("root")
);
