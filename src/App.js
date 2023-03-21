import "./App.css";
import Home from "./component/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import CreateUser from "./component/user/CreateUser";
import ComboComponent from "./component/user/ComboComponent";
import Blog from "./component/Blog";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/user" element={<ComboComponent />} />
        <Route exact path="/blog" element={<Blog />} />
      </Routes>
    </>
  );
}

export default App;
