import React, { useContext } from "react";
import { StyledButton } from "./styles";
import { useHistory } from "react-router-dom";
import {UserContext} from '../../UserContext/index'


const User = () => {
  const {setToken} = useContext(UserContext)

  const history = useHistory();

  const logOut = () => {
    history.push("/Login");
    localStorage.removeItem("access_token");
    setToken('')
  };

  return (
    <>
      <StyledButton type="checkbox" onClick={logOut}>
        Log Out
      </StyledButton>
    </>
  );
};

export default User;
