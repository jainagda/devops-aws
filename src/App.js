import "./App.css";
import Home from "./component/Home";
import "bootstrap/dist/css/bootstrap.min.css";
// import { BrowserRouter, Route, Switch } from "react-router-dom";
import {BrowserRouter } from 'react-router-dom';
import { Routes, Route, Navigate } from "react-router-dom";

import CreateUser from "./component/user/CreateUser";
import { ComboComponent } from "./component/user/ComboComponent";

function App() {
  return (


    <>
    <BrowserRouter>
      <Routes>
        <Route path="/"  exact element={<Home />}>
          {/* <Route index element={<Home />} /> */}
          <Route   path="user"  exact={true} element={<CreateUser/>} />
          {/* <Route path="contact" element={<Contact />} /> */}
          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
    {/* <Home /> */}
    {/* <CreateUser/> */}
    {/* <ComboComponent/> */}
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
