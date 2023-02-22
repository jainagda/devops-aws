import React from 'react'
import leadingBrandsLogo from "../style/logoAnimation.module.css"
import logo1 from "../assest/image/ansible.png"
import logo2 from "../assest/image/aks.png"
import logo3 from "../assest/image/apache.png"
import logo4 from "../assest/image/bitbucket.png"
import logo5 from "../assest/image/dcoker swarm.png"
import logo6 from "../assest/image/mongodb.png"
import logo7 from "../assest/image/nodejs.png"
import logo8 from "../assest/image/selenium.png"
import logo9 from "../assest/image/terraform.png"
import logo10 from "../assest/image/rancher.png"
const LogoInfinity = (props) => {

    const data = [logo1,logo2,logo3,logo4,logo5,logo6,logo7,logo8,logo9,logo10]

  return (
    <div style={{ display:"flex", justifyContent:"center"}}>
      <div style={{border:"0px solid black", padding:"30px",backgroundColor:"#fff", marginTop:"-70px",display:"flex",borderRadius:"10px", position:"absolute", width:"86%", boxShadow:"2px 1px 6px 2px",zIndex:"50", overflow: "hidden"}}
        >
          {data.map((item, index) => {
            return (
                <div  style={{padding:"10px"}}className={`${leadingBrandsLogo.imgTicker}`}>
               <img
                src={item}
                alt="Picture of the author"
                height={60}
                width={160}
                style={{marginLeft: "30px"}}
              />
              </div>
            );
          })}
        </div>
    </div>
  )
}

export default LogoInfinity
