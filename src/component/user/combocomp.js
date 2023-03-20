import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../Header";
import { getAllUsers, createUser } from '../../services/UserService'
const CreateUser = ({ onChangeForm, createUser }) => {
  const [state, setState] = useState({
    user: {},
    users: [],
    numberOfUsers: 0,
  });
  
  createUser = (e) => {
    createUser(state.user).then((response) => {
      console.log(response);
      setState({ numberOfUsers: state.numberOfUsers + 1 });
    });
  };

  const onChangeForm = (e) => {
    let user = this.state.user
    /* if (e.target.name === 'firstname') {
        user.firstName = e.target.value;
    } else if (e.target.name === 'lastname') {
        user.lastName = e.target.value;
    } else if (e.target.name === 'email') {
        user.email = e.target.value;
    }
    this.setState({user}) */
}

//   getAllUsers = () => {
//     getAllUsers()
//       .then(users => {
//         console.log(users)
//         this.setState({users: users, numberOfUsers: users.length})
//       });
//   }

  return (
    <>
      <Header />

      <div className="" style={{ border: "1px solid red", padding: "40px" }}>
        <h2>Create User</h2>
        <div style={{ display: "flex", border: "1px solid red" }}>
          <div>
            <form>
              <div className="row">
                <div className="form-group col-md-6">
                  <label htmlFor="exampleInputEmail1">First Name</label>
                  <input
                    type="text"
                    onChange={(e) => onChangeForm(e)}
                    className="form-control"
                    name="firstname"
                    id="firstname"
                    aria-describedby="emailHelp"
                    placeholder="First Name"
                  />
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="exampleInputPassword1">Last Name</label>
                  <input
                    type="text"
                    onChange={(e) => onChangeForm(e)}
                    className="form-control"
                    name="lastname"
                    id="lastname"
                    placeholder="Last Name"
                  />
                </div>
              </div>
              <div className="row">
                <div className="form-group col-md-12">
                  <label htmlFor="exampleInputEmail1">Email</label>
                  <input
                    type="text"
                    onChange={(e) => onChangeForm(e)}
                    className="form-control"
                    name="email"
                    id="email"
                    aria-describedby="emailHelp"
                    placeholder="Email"
                  />
                </div>
              </div>
              <button
                type="button"
                onClick={(e) => createUser()}
                className="btn btn-danger"
              >
                Create
              </button>
            </form>
          </div>
          <div>
            <div className="display-board">
              <h4>Users Created</h4>
              {/* <div className="number">{state.numberOfUsers}</div> */}
              <div className="btn">
                {/* <button
                  type="button"
                  onClick={(e) => getAllUsers()}
                  className="btn btn-warning"
                >
                  Get all Users
                </button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateUser;
