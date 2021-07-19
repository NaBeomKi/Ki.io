import React from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import Theme from "./src/themes/theme";
import "tailwindcss/dist/base.min.css";

const GlobalStyles = createGlobalStyle`
  ${reset};
  a {
    text-decoration: none;
    color: inherit;
  }
  * {
    box-sizing: border-box;
    word-break: keep-all;
  }
  body {
    font-family: ${(props) =>
      props.theme.fonts
        .main}, --apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }
`;

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={Theme}>
    <GlobalStyles />
    {element}
  </ThemeProvider>
);
