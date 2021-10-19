import React, { memo } from "react";
import { ButtonWrapper } from "../elements";

export const Button = memo(({ children, href, className }) => {
  return (
    <ButtonWrapper className={className} to={href}>
      {children}
    </ButtonWrapper>
  );
});
