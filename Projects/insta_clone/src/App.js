import Login from "./Pages/Login/Login";
// import SideBar from "./Components/SideMenuBar/SideBar";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./Pages/Register/Register";
import Home from "./Pages/Home/Home";
import CreatePost from "./Pages/CreatePost/CreatePost";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="createpost" element={<CreatePost/>} />
          </Route>
        </Routes>
      </Router>
      {/* <SideBar/> */}
      {/* <Login/> */}
    </div>
  );
}

export default App;
