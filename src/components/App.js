import React, { memo } from "react";
import { useTheme } from "../store/StoreContext";
import { Seo, Header, Footer } from "./index";

export const App = memo(({ children, title, imgUrl, excerpt }) => {
  const theme = useTheme();
  return (
    theme && (
      <>
        <Seo title={title} image={imgUrl} description={excerpt} />
        <Header />
        {children}
        <Footer />
      </>
    )
  );
});
