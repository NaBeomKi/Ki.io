import React from "react";
import { NotFoundWrapper, NotFoundTitle, NotFoundText } from "../elements";

export const NotFound = () => {
  return (
    <NotFoundWrapper>
      <div>
        <NotFoundTitle>404</NotFoundTitle>
        <NotFoundText>Not Found Page</NotFoundText>
      </div>
    </NotFoundWrapper>
  );
};
