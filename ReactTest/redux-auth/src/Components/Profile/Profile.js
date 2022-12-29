import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import "./Profile.css"

export default function Profile() {

  const navigate = useNavigate()
  let userR = useSelector((state) => state?.authReducer?.user?.userData);

  userR = JSON.parse(userR);
  console.log(userR);

  return (
    <>
      <h2>Hi, {userR.name}</h2>
      <button id="lgbtn" onClick={() => {
          navigate("/")
      }}>Logout</button>
    </>
  );
}
