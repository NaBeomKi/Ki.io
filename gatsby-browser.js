import React from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import Theme from "./src/themes/theme";
import { MDXProvider } from "@mdx-js/react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import "tailwindcss/dist/base.min.css";

library.add(fab, fas, far);

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

const components = {};

export const wrapRootElement = ({ element }) => (
  <MDXProvider components={components}>
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      {element}
    </ThemeProvider>
  </MDXProvider>
);
