import React from "react";
import { StyledTable, StyledTableTh, StyledTableTd } from "./styles";

const DataList = ({ data }) => {
  return (
    <StyledTable>
      <thead>
        <tr>
          <StyledTableTh>First Name</StyledTableTh>
          <StyledTableTh>Last Name</StyledTableTh>
          <StyledTableTh>Email</StyledTableTh>
          <StyledTableTh>City</StyledTableTh>
        </tr>
      </thead>
      <tbody>
        {data &&
          data.map((i) => (
            <tr>
              <StyledTableTd>{i.first_name}</StyledTableTd>
              <StyledTableTd>{i.last_name}</StyledTableTd>
              <StyledTableTd>{i.email}</StyledTableTd>
              <StyledTableTd>{i.city}</StyledTableTd>
            </tr>
          ))}
      </tbody>
    </StyledTable>
  );
};

export default DataList;
