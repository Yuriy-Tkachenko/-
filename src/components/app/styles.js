import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @import url("https://fonts.googleapis.com/css2?family=Rubik:wght@400;700&display=swap");

  html {
    height: 100%;
  }

  body, html {
    margin: 0;
  }

  body {
    position: relative;
    font-family: "Rubik", "Arial", sans-serif;
    font-size: 16px;
    line-height: 24px;
    font-weight: 400px;
    color: #414141; 
  }
`;