import React, { useEffect } from "react";
import { useState } from "react";
import "./Regis.css";
import { useSelector, useDispatch } from "react-redux";
import {useNavigate} from 'react-router-dom'
// import { postUser } from "../../Actions/index";
// import authReducers from "../../Reducers/authReducers";
import { postUserRequest } from "../../thunk";
const RegistrationForm = (props) =>{
  const initialvalues = { name: "", email: "", password: "" };
  const [formValue, setformValue] = useState(initialvalues);
  const [formError, setFormError] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const dispatch = useDispatch();
  // const user = useSelector((state) => state.authReducer)


  // console.log(19, user);

  const navigate = useNavigate()

  function handleChange(e) {
    // console.log(e.target);
    const { name, value } = e.target;
    setformValue({ ...formValue, [name]: value });
    // console.log(formValue);
  }
  const handleSubmit = (e) => {
    // console.log(props.history)
    e.preventDefault();
    setFormError(validate(formValue));
    setIsSubmit(!isSubmit);

    // navigate('/login')
  };
  useEffect(() => {
    // console.log(formError);
    if (Object.keys(formError).length === 0 && isSubmit) {
      console.log(formValue);
      console.log("Form is ok");
    }
  }, [formError, isSubmit, formValue]);

  const validate = (value) => {
    const errors = {};
    const regex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    if (!value.name) {
      errors.name = "*User name Is required";
    }

    if (!value.email) {
      errors.email = "*Email Is required";
    } else if (!regex.test(value.email)) {
      errors.email = "*Email Is not valid";
    }

    if (!value.password) {
      errors.password = "*Password Is required";
    } else if (value.password.length < 4) {
      errors.password = "*Minimum Password Length must be of 4 characters";
    } else if (value.password.length > 10) {
      errors.password =
        "*Maximum password should not greater than 10 characters";
    }

    return errors;
  };

  return (
    <>
      <h2> Registration Form</h2>
      <br />
      <form action="" onSubmit={handleSubmit}>
        <div className="elements">
          <input
            type="text"
            name="name"
            placeholder="Enter your User name"
            value={formValue.name}
            onChange={handleChange}
          />
          <div className="error"> {formError && formError.name}</div>
        </div>
        <div className="elements">
          <input
            type="email"
            name="email"
            placeholder="Enter your Email"
            value={formValue.email}
            onChange={handleChange}
          />
          <div className="error"> {formError && formError.email}</div>
        </div>

        <div className="elements">
          {" "}
          <input
            type="password"
            name="password"
            placeholder="Enter your Password"
            autoComplete="off"
            value={formValue.password}
            onChange={handleChange}
          />
          <div className="error"> {formError && formError.password}</div>
        </div>

        <button
          id="reg_btn"
          onClick={async() =>{

            if(formValue.name && formValue.email && formValue.password){
             const user = await dispatch(postUserRequest(formValue))
            //  console.log(115, user)  
            
              if(user){
                navigate('/profile')
              }else{
                alert("Wrong Email or Password")
              }
            }
          }
          }
        >
          Register
        </button>
        <p>
          I already have an account.
          <span id="logInTxt" onClick={()=>{
            navigate("/login")
          }}>
            <u><b>Login</b></u>
          </span>
        </p>
          {/* <h3>{user}</h3> */}
      </form>
    </>
  );
}

export default RegistrationForm
