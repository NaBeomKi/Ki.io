import React from "react";
import { ContentWrapper, ContentContainer } from "../elements";
import { Seo, Header } from "./index";

export const App = ({ children, title, imgUrl, excerpt }) => {
  return (
    <div>
      <Seo title={title} image={imgUrl} description={excerpt} />
      <Header />
      <ContentWrapper>
        <ContentContainer>{children}</ContentContainer>
      </ContentWrapper>
    </div>
  );
};
