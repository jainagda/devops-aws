import React, { Component, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Users } from "../../component/user/Users";
import DisplayBoard from "../../component/user/DisplayBoard";
import CreateUser from "../../component/user/CreateUser";
import { getAllUsers, createUser } from "../../services/UserService";
import Header from "../Header";
import { BASE_URL } from "../../config/config";

const ComboComponent = () => {
  const [state, setState] = useState({
    user: { firstName: "", lastName: "", email: "" },
    users: [],
    numberOfUsers: 0,
  });
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  async function createUser() {
    console.log("data", userData);
    console.log("datanfgnfgnzfgnnnnfgn", JSON.stringify(userData));
    const response = await fetch(`${BASE_URL}/api/user`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ user: userData }),
    });
    // console.log("response", response);

    setUserData({firstName: "",
    lastName: "",
    email: "",})
    return response;
  }

/*   const getAllUsers = async () => {
    console.log("base URL ", BASE_URL);
    const response = await fetch(`${BASE_URL}/api/user`);
    console.log("getAllUsers", response);
    // setState({users: users, numberOfUsers: users.length})
    // return await response.json();
  }; */

  // getAllUsers = () => {
  //   getAllUsers()
  //     .then(users => {
  //       console.log(users)
  //       this.setState({users: users, numberOfUsers: users.length})
  //     });
  // }

async function getAllUsers() {
    console.log("base URL ",BASE_URL)
    const response = await fetch(`${BASE_URL}/api/user`);
    // console.log("getAllUsers",response.json())
    let data = await response.json();
    console.log("apun ka item",data)
    setState({users: data, numberOfUsers: data.length})
  }

  const onChangeForm = (e, field) => {
    console.log("eeeee", e.target.value, field);

    if (field === "firstname") {
      setUserData({
        ...userData,
        firstName: e.target.value,
      });
    } else if (field === "lastname") {
      setUserData({
        ...userData,
        lastName: e.target.value,
      });
    } else if (field === "email") {
      setUserData({
        ...userData,
        email: e.target.value,
      });
    }
    console.log("userrrr alll", userData);
    // setState({alluser})
  };

  return (
    <div>
      <Header />
      <div
        style={{ padding: "40px", border: "0px solid red" }}
        className=" mrgnbtm"
      >
        <div
          style={{ display: "flex", justifyContent:"space-around" }}
          className="row"
        >
          <div className="col-md-6">
            <CreateUser
              user={state.user}
              onChangeForm={onChangeForm}
              userData={userData}
              createUser={createUser}
            ></CreateUser>
          </div>
          <div className="col-md-4">
            <DisplayBoard
              numberOfUsers={state.numberOfUsers}
              getAllUsers={getAllUsers}
            ></DisplayBoard>
          </div>
        </div>
      </div>
      <hr></hr>
      <div style={{padding:"20px"}} className="row mrgnbtm">
        <Users users={state.users}></Users>
      </div>      
    </div>
  );
};

export default ComboComponent;
