import React, { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [token, setToken] = useState("");

  useEffect(() => {
    const getToken = localStorage.getItem("access_token");
    setToken(getToken);
  }, []);

  const values = {
    token,
    setToken,
  };
  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
};

export default UserProvider;
