import React from "react";
import { ContentWrapper } from "../elements";
import { Seo, Header } from "./index";

export const App = ({ children, title, imgUrl, excerpt }) => {
  return (
    <div>
      <Seo title={title} image={imgUrl} description={excerpt} />
      <Header />
      <div>
        <ContentWrapper>{children}</ContentWrapper>
      </div>
    </div>
  );
};
