import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`
  * {
      margin: 0;
      padding: 0;
      font-family: Newsreader, Arial, Helvetica, sans-serif;
    }

  html {
    width: auto;
  }

  body {
    max-width: 100vw;
    height: 100vh;
    background-color: #e6e6e6;
  }
`;
