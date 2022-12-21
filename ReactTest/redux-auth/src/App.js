// import logo from "./logo.svg";
import "./App.css";
// import axios from "axios";
// import { useSelector, useDispatch } from "react-redux";
import RegistrationForm from "./Components/Register/RegistrationForm";
// import LoginPage from "./Components/Login/LoginPage";

import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Profile from "./Components/Profile/Profile";
import LoginPage from "./Components/Login/LoginPage";
// import LoginPage from "./Components/Login/LoginPage";

function App() {
  // axios
  //   .post("https://reqres.in/api/register", {
  //     email: "jojo@gamil.com",
  //     password: "hooloo",
  //   })
  //   .then((res) => console.log(res));

  // let authorized = false

  // const response = useSelector((state) => state.authReducer?.user?.data?.id);

  // console.log(response);

  // if(response){ 
  //    authorized = !authorized
  // }

  // console.log(authorized)


  return (
    <div className="App">
      <Router>
        <Routes>
            <Route exact path="/" element={<RegistrationForm />} />
            {/* <Route exact path="/login" element={<LoginPage authorized={authorized}/>}/> */}
          {/* <RegistrationForm /> */}
            <Route exact path="/profile" element={<Profile/>} />
            <Route exact path="/login" element={<LoginPage/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
