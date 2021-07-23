import React from "react";
import { ButtonWrapper } from "../elements";

export const Button = ({ children, href, className }) => {
  return (
    <ButtonWrapper className={className} to={href}>
      {children}
    </ButtonWrapper>
  );
};
