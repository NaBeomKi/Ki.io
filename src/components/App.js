import React from "react";
import { Seo, Header } from "./index";

export const App = ({ children, title, imgUrl, excerpt }) => {
  return (
    <div>
      <Seo title={title} image={imgUrl} description={excerpt} />
      <Header />
      {children}
    </div>
  );
};
