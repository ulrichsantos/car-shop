import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
  }
  body {
    background: ${({ theme }) => theme.colors["base-background"]};
    -webkit-font-smoothing: antialiased;
  }
  body, input, textarea, button {
    font-weight: 400;
  }
  button {
    cursor: pointer;
  }
  a {
    text-decoration: none;
  }
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`