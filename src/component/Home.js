import React , {useState} from "react";
import Header from "./Header";
import LogoInfinity from "./LogoInfinity";
import logo from '../logo.svg';
import DevOpsEngineer from "../assest/image/devops-developer1.png"
import RoadMap from "../assest/image/Road-map.jpeg"
import deployReact from "../assest/image/deploy-react.png"
import archDiagramWeb from "../assest/image/arch-diagram-web.png"
import CreateUser from "./user/CreateUser";
import { Users } from "./user/Users";
import { getAllUsers, createUser } from '../services/UserService'

export default function Home() {
      const [state ,setState]= useState({  
         user: {},
        users: [],
        numberOfUsers: 0
      })
    
     
    
      // getAllUsers = () => {
      //   getAllUsers()
      //     .then(users => {
      //       console.log(users)
      //   setState({users: users, numberOfUsers: users.length})
      //     });
      // }
    
   const onChangeForm = (e) => {
          let user = state.user
          if (e.target.name === 'firstname') {
              user.firstName = e.target.value;
          } else if (e.target.name === 'lastname') {
              user.lastName = e.target.value;
          } else if (e.target.name === 'email') {
              user.email = e.target.value;
          }
        setState({user})
      }
    
  return (
    <>
      <Header />
      <div style={{ width:"100%"}}>
        <div
          style={{
          width:"100%",
            display: "flex",
            justifyContent: "space-between",
            backgroundColor:"ButtonHighlight",
          }}
        >
          <div style={{ width: "30%" , paddingTop: "8%",
            paddingLeft: "5%",
            paddingBottom: "8%", }}>
            <label style={{ fontSize: "40px",fontWeight:"bold" }}>
              Development & Operations{" "}
            </label>

            <div style={{fontSize:"15px",fontFamily:"cursive",marginTop:"20px"}}>
              
                DevOps is the combination of cultural philosophies, practices,
                and tools that increases an organization’s ability to deliver
                applications and services at high velocity: evolving and
                improving products at a faster pace than organizations using
                traditional software development and infrastructure management
                processes
            
            </div>
          </div>
          <div style={{ width: "50%",  paddingTop: "5%",
            paddingRight: "2%",
            paddingBottom: "10%", }}>
            <img src={DevOpsEngineer} width="90%" height="90%"  alt="logo" />
          </div>
        </div>
      
      </div>
      <LogoInfinity />
      <div className="App-header" style={{ paddingTop:"80px"}}>
<h2 style={{ display:"flex",color:"white", fontSize:"30px"}}> This is the React app {process.env.REACT_APP_Version}
        </h2>

        <img src={logo} className="App-logo" alt="logo" />
      </div>
      <div>
        <h2 style={{ paddingTop:"30px", paddingLeft:"50px",display:"flex",color:"black", fontSize:"30px"}}> Devops Road-Map </h2>
        <img src={RoadMap} />
      </div>
      <hr style={{border:"1px solid black"}}/>
      <div style={{}}>
        <h2 style={{ paddingTop:"30px", paddingLeft:"50px",display:"flex",color:"black", fontSize:"30px"}}> Deploy React + Node application on an AWS EC2 Instance </h2>
        
        <div style={{display:"flex",width:"50%"}}>
        <img width="100%" src={deployReact} /> 
        <img width="100%" src={archDiagramWeb} /> 
            </div>
      </div>
      {/* <div className="App"> */}
        {/* <div className="container mrgnbtm"> */}
          {/* <div className="row"> */}
             {/* <div className="col-md-8"> */}
                {/* <CreateUser 
                  user={state.user}
                  onChangeForm={onChangeForm}
                  createUser={createUser}
                  >
                </CreateUser> */}
          {/* </div>  */}
            {/* <div className="col-md-4">
                <DisplayBoard
                  numberOfUsers={this.state.numberOfUsers}
                  getAllUsers={this.getAllUsers}
                >
                </DisplayBoard>
            </div> */}
        
      
  
          {/* <Users users={this.state.users}></Users> */}
      
      {/* </div> */}
    </>
  );
}


// background-image: linear-gradient(rgb(99, 116, 199), rgb(99, 116, 199)), url(/_next/static/media/AuditBanner.52540bb3.png);

// background-color: rgb(245 245 245 / var(--tw-bg-opacity));