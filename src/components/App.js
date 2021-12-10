import React, { memo } from "react";
import { Seo, Header, Footer } from "./index";

export const App = memo(({ children, title, imgUrl, excerpt }) => {
  return (
    <>
      <Seo title={title} image={imgUrl} description={excerpt} />
      <Header />
      {children}
      <Footer />
    </>
  );
});
