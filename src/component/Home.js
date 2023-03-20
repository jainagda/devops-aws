import React , {useState} from "react";
import Header from "./Header";
import LogoInfinity from "./LogoInfinity";
import logo from '../logo.svg';
import DevOpsEngineer from "../assest/image/devops.png"
import RoadMap from "../assest/image/Road-map.jpeg"
import deployReact from "../assest/image/deploy-react.png"
import archDiagramWeb from "../assest/image/arch-diagram-web.png"
import CreateUser from "./user/CreateUser";
import { Users } from "./user/Users";
import { getAllUsers, createUser } from '../services/UserService'

const Home=()=> {
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
            <label style={{ fontSize: "30px",fontWeight:"bold" }}>
              Development & Operations
            </label>

            <div style={{fontSize:"15px",fontFamily:"cursive",marginTop:"20px"}}>
              
            DevOps is a methodology in the software development and IT industry. Used as a set of practices and tools, DevOps integrates and automates the work of software development and IT operations as a means for improving and shortening the systems development life cycle
            
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

        {/* <img src={logo} className="App-logo" alt="logo" /> */}
      </div>
      {/* <div>
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
      </div> */}
    </>
  );
}

export default Home;
// background-image: linear-gradient(rgb(99, 116, 199), rgb(99, 116, 199)), url(/_next/static/media/AuditBanner.52540bb3.png);

// background-color: rgb(245 245 245 / var(--tw-bg-opacity));