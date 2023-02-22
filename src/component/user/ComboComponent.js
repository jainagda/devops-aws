import React from "react";
import CreateUser from "./CreateUser";
import DisplayBoard  from "./DisplayBoard";
import Users from "./Users";

export const ComboComponent = () => {
  return (
    <div style={{ display: "flex",justifyContent:"center" ,backgroundColor:"yellow"}}>
      <CreateUser />
      <DisplayBoard />
      <Users />
    </div>
  );
};
