import React, { Component, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Users } from "../../component/user/Users";
import DisplayBoard from "../../component/user/DisplayBoard";
import CreateUser from "../../component/user/CreateUser";
import { getAllUsers, createUser } from "../../services/UserService";
import Header from "../Header";
import { BASE_URL } from "../../config/config";
import devopsLifecycle from "../../assest/image/devops_lifecycle.png";
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
    console.log("response", response);

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
          style={{ display: "flex", justifyContent: "space-between" }}
          className="row"
        >
          <div className="col-md-6">
            <CreateUser
              user={state.user}
              onChangeForm={onChangeForm}
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
      <div className="row mrgnbtm">
        <Users users={state.users}></Users>
      </div>
      <hr></hr>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignContent: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          <div style={{ width: "50%", height: "50%" }}>
            <img src={devopsLifecycle} width="90%" height="90%" alt="logo" />
          </div>
        </div>

        <div
          style={{
            padding: "20px",
            marginTop: "10px",
            justifyContent: "space-evenly",
            alignContent: "center",
          }}
        >
          <p style={{ width: "95%", fontWeight: 600 }}>
            DevOps is a software development methodology that combines the
            principles of development and operations to increase the efficiency,
            reliability, and speed of software development and deployment. The
            DevOps lifecycle consists of a set of continuous processes that work
            together to ensure that software is delivered quickly and reliably.
          </p>
          <p style={{ fontWeight: 500 }}>
            The following are the phases of the DevOps lifecycle:
          </p>
          <ul>
            <li>
              1. Plan: This is the first phase of the DevOps lifecycle. In this
              phase, the development team and operations team work together to
              plan the development process. This includes defining the project
              scope, requirements, timeline, and goals. This phase also involves
              determining the resources needed for the project.
            </li>
            <li>
              2. Code: In this phase, the developers write and test the code.
              They use code repositories to store the code, and they use
              continuous integration tools to ensure that the code is tested
              continuously. This phase also involves code review and debugging
              to ensure that the code is of high quality.
            </li>
            <li>
              3. Build: In this phase, the code is compiled and built into an
              executable format. This phase also includes running tests to
              ensure that the code is working correctly. The build phase also
              includes packaging the application into a deployable format.
            </li>
            <li>
              4. Test: In this phase, the software is tested thoroughly to
              ensure that it meets the requirements and specifications. This
              includes unit testing, integration testing, and performance
              testing.
            </li>
            <li>
              5. Deploy: In this phase, the software is deployed to the
              production environment. The deployment process is automated, and
              the deployment is done using a deployment pipeline.
            </li>
            <li>
              6. Operate: In this phase, the software is monitored and managed
              in the production environment. This includes monitoring the
              application's performance, ensuring that it is running correctly,
              and making any necessary updates or changes.
            </li>
            <li>
              7. Monitor: In this phase, the application is monitored to ensure
              that it is meeting the requirements and specifications. This
              includes monitoring the application's performance, identifying any
              issues or errors, and taking corrective action.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ComboComponent;
