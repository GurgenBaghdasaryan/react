import React from "react";
import { StyledButton } from "./styles";

const Button = ({ clickEvent }) => {
  return (
    <StyledButton type="checkbox" onClick={clickEvent}>
      Login
    </StyledButton>
  );
};

export default Button;
