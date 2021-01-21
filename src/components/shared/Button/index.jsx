import React from "react";
import { StyledButton } from "./styles";

const Button = ({ clickEvent }) => {
  return (
    <StyledButton onClick={clickEvent}>
      Login
    </StyledButton>
  );
};

export default Button;
