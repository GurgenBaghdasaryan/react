import React from "react";
import { StyledTable, StyledTableTh } from "./styles";
const DataList = ({ data }) => {
  return (
    <StyledTable>
      <tr>
        <StyledTableTh>First Name</StyledTableTh>
        <StyledTableTh>Last Name</StyledTableTh>
        <StyledTableTh>Email</StyledTableTh>
        <StyledTableTh>City</StyledTableTh>
      </tr>
      {data.map((i) => (
        <tr>
          <td>{i.first_name}</td>
          <td>{i.last_name}</td>
          <td>{i.email}</td>
          <td>{i.city}</td>
        </tr>
      ))}
    </StyledTable>
  );
};

export default DataList;
