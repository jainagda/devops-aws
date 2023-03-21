import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";

const CreateUser = ({onChangeForm,userData, createUser }) => {


    return(
        <div className="container">
            <div className="row">
                <div className="col-md-7 mrgnbtm">
                <h2>Create User</h2>
                <form>
                    <div style={{display:"flex"}}>
                        <div style={{marginBottom:"10px"}} className="form-group col-md-6">
                            <label style={{marginBottom:"5px"}} htmlFor="exampleInputEmail1">First Name</label>
                            <input type="text" onChange={(e) => onChangeForm(e,"firstname")} value={userData?.firstName}   name="firstname" id="firstname" aria-describedby="emailHelp" placeholder="First Name" />
                        </div>
                        <div style={{marginBottom:"10px"}} className="form-group col-md-6">
                            <label style={{marginBottom:"5px"}} htmlFor="exampleInputPassword1">Last Name</label>
                            <input type="text" onChange={(e) => onChangeForm(e,"lastname")}  value={userData?.lastName} name="lastname" id="lastname" placeholder="Last Name" />
                        </div>
                    </div>
                    <div style={{marginBottom:"10px",width:"100%"}} >
                        <div className="form-group col-md-6">
                            <label style={{marginBottom:"5px"}} htmlFor="exampleInputEmail1">Email</label>
                            <input type="text" onChange={(e) => onChangeForm(e,"email")}  value={userData?.email} name="email" id="email" aria-describedby="emailHelp" placeholder="Email" />
                        </div>
                    </div>
                    <button type="button" onClick= {(e) => createUser()} className="btn btn-danger">Create</button>
                </form>
                </div>
            </div>
        </div>
    )
}

export default CreateUser