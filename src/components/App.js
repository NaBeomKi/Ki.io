import React from "react";
import ThemeProvider from "../contexts/ThemeContext";
import { Seo, Header, Footer } from "./index";

export const App = ({ children, title, imgUrl, excerpt }) => {
  return (
    <ThemeProvider>
      <Seo title={title} image={imgUrl} description={excerpt} />
      <Header />
      {children}
      <Footer />
    </ThemeProvider>
  );
};
