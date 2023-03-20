import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";

 const DisplayBoard = ({numberOfUsers, getAllUsers}) => {
    return(
        <div style={{ display:"flex",flexDirection:"column",padding:"10px", width:"50%", height:"200px", backgroundColor:"rgb(555, 200, 789)"}}>
            <h4>Users Created</h4>
            <div style={{display:"flex",justifyContent:"center",fontSize:65}} className="">
            {numberOfUsers}
            </div>
            <div style={{display:"flex",justifyContent:"center"}} >
                <button type="button" onClick={(e) => getAllUsers()} className="btn btn-warning">Get all Users</button>
            </div>
        </div>
    )
}
export default DisplayBoard