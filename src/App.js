import "./App.css";
import Home from "./component/Home";
import "bootstrap/dist/css/bootstrap.min.css";
// import { BrowserRouter, Route, Switch } from "react-router-dom";
// import {BrowserRouter } from 'react-router-dom';
import { BrowserRouter, Route, Routes  } from 'react-router-dom';
// import { Routes, Route, Navigate } from "react-router-dom";

import CreateUser from "./component/user/CreateUser";
import  ComboComponent from "./component/user/ComboComponent";

function App() {
  return (
    <>
      <Routes >
        <Route exact path="/"   element={<Home/>}/>
          {/* <Route index element={<Home />} /> */}
          <Route exact  path="/user"   element={<ComboComponent/>} />
          {/* <Route path="contact" element={<Contact />} /> */}
          {/* <Route path="*" element={<NoPage />} /> */}
    
      </Routes >

   
   </>
    // <BrowserRouter>
    // {/* <Router> */}
    // <div className="App">
      
    //    <Routes>

    //       <Route path="/" element={<Home />} />
    //       <Route path="/user" element={<CreateUser />} />
    //       </Routes>
        
    // </div>
    // {/* </Router> */}
    // </BrowserRouter>
  );
}

export default App;
