import React, { createContext, useState } from "react";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [loginField, setLoginField] = useState("");
  const [passwordField, setPasswordField] = useState("");
  const values = {
    login: "gug12321",
    password: "gug12321",
    loginField,
    passwordField,
    setLoginField,
    setPasswordField,
  };

  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
};

export default UserProvider;
