import React from "react";
import { createGlobalStyle } from "styled-components";
import { MDXProvider } from "@mdx-js/react";
import { preToCodeBlock } from "mdx-utils";
import reset from "styled-reset";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import "tailwindcss/dist/base.min.css";
import { Code, Table } from "./src/components";
import StoreProvider from "./src/store/StoreContext";

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
  :root {
    --backgroundColor: #f9fafb;
    --textColor: #111826;

    &.dark{
      --backgroundColor: #111826;
      --textColor: #f9fafb;
    }
  }
  body {
    font-family: --apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    background: var(--backgroundColor);
    color: var(--textColor);
  }
`;

const components = {
  table: Table,
  pre: (preProps) => {
    const props = preToCodeBlock(preProps);
    // if there's a codeString and some props, we passed the test
    if (props) {
      return <Code {...props} />;
    } else {
      // it's possible to have a pre without a code in it
      return <pre {...preProps} />;
    }
  },
  wrapper: ({ children }) => <>{children}</>,
};

export const wrapRootElement = ({ element }) => (
  <MDXProvider components={components}>
    <StoreProvider>
      <GlobalStyles />
      {element}
    </StoreProvider>
  </MDXProvider>
);
