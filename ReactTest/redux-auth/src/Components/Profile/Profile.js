import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import "./Profile.css"

export default function Profile() {

  const navigate = useNavigate()
  let user = useSelector((state) => state?.authReducer?.user?.userData);

  user = JSON.parse(user);
  console.log(user);

  return (
    <>
      <h2>Hi Welcome {user.name}</h2>
      <button id="lgbtn" onClick={() => {
          navigate("/")
      }}>Logout</button>
    </>
  );
}
