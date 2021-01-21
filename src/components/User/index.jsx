import DataList from "./DataList";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { StyledButton } from "./styles";
import { useHistory } from "react-router-dom";
import { UserContext } from "../../UserContext/";

const User = () => {
  const { setToken } = useContext(UserContext);
  const [data, setData] = useState([]);

  const history = useHistory();
  const getToken = localStorage.getItem("access_token");

  useEffect(() => {
    axios
      .get("https://volatile-admin-api.herokuapp.com/employee", {
        headers: {
          Authorization: `token ${getToken}`,
        },
      })
      .then((res) => {
        setData(res.data.data);
        history.push("/");
      });
  }, [getToken]);

  const logOut = () => {
    history.push("/login");
    localStorage.removeItem("access_token");
    setToken("");
  };

  return (
    <>
      <DataList data={data} />
      <StyledButton onClick={logOut}>
        Log Out
      </StyledButton>
    </>
  );
};

export default User;
