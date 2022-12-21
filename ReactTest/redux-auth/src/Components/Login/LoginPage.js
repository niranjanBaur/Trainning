import React, { useState } from "react";
import { useNavigate } from "react-router";
import { loginUserRequest } from "../../thunk";
import { useSelector, useDispatch } from "react-redux";

import "./LoginPage.css"

const LoginPage = () => {
  const [loginData, setLoginData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const onLogIn = async (e) => {
    e.preventDefault();

    if(loginData.email && loginData.password){
      const user = await dispatch(loginUserRequest(loginData))
      console.log(115, user)  
     
       if(user){ //
         navigate('/profile')
       }else{
         alert("Wrong Email or Password")
       }
     }
  };
  return (
    <>
      <form action="">
        <div className="elements">
          <input
            type="email"
            name="email"
            placeholder="Enter your Email"
            value={loginData.email}
            onChange={handleChange}
          />
        </div>

        <div className="elements">
          <input
            type="password"
            name="password"
            placeholder="Enter your Password"
            autoComplete="off"
            value={loginData.password}
            onChange={handleChange}
          />
        </div>
        <button id="lgn_btn" onClick={onLogIn}>
          Log In{" "}
        </button>
        <p>
          I don't have any account.
          <span id="logInTxt" onClick={()=>{
            navigate("/")
          }}>
            <u><b>Registration</b></u>
          </span>
        </p>
      </form>
    </>
  );
};
export default LoginPage;
