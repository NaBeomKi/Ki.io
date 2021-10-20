import React, { memo } from "react";
import { NotFoundWrapper, NotFoundTitle, NotFoundText } from "../elements";

export const NotFound = memo(() => {
  return (
    <NotFoundWrapper>
      <div>
        <NotFoundTitle>404</NotFoundTitle>
        <NotFoundText>Not Found Page</NotFoundText>
      </div>
    </NotFoundWrapper>
  );
});
