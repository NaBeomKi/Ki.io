import React, { memo } from "react";
import { FooterWrapper, Span, Strong } from "../elements";

export const Footer = memo(() => {
  return (
    <FooterWrapper>
      <Span>
        &copy; 2021.{" "}
        <a href="https://github.com/NaBeomKi" target="_blank" rel="noreferrer">
          <Strong>Beomki</Strong>
        </a>
        , Built with{" "}
        <a
          href="https://github.com/NaBeomKi/gatsby-starter-ki"
          target="_blank"
          rel="noreferrer"
        >
          <Strong>gatsby-starter-ki</Strong>
        </a>
      </Span>
    </FooterWrapper>
  );
});
