import React from "react";
import { StyledButton } from "./styles";

const Button = ({ clickEvent, children }) => {
  return <StyledButton onClick={clickEvent}>{children}</StyledButton>;
};

export default Button;
