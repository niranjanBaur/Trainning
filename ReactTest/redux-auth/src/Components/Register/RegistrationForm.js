import React, { useEffect } from "react";
import { useState } from "react";
import "./Regis.css"
import {useSelector , useDispatch} from "react-redux"
import {postUser} from "../../Actions/index"
import { postUserRequest } from "../../thunk";

export default function RegistrationForm() {
  const initialvalues ={Username:"",email:"",password:""}
  const [formValue,setformValue] = useState(initialvalues);
  const [formError,setFormError] = useState({});
  const [isSubmit,setIsSubmit] = useState(false);

const dispatch = useDispatch();

  function handleChange(e){
    // console.log(e.target);
    const {name,value}=e.target;
    setformValue({...formValue,[name]:value})
    // console.log(formValue);
  }
const handleSubmit=(e)=>{
    e.preventDefault();
    setFormError(validate(formValue));
      setIsSubmit(!isSubmit)
   
    
  }
  useEffect(()=>{
    // console.log(formError);
    if(Object.keys(formError).length===0 && isSubmit){
      console.log(formValue);
      console.log("Form is ok");
    }
  },[formError,isSubmit,formValue])

  const validate = (value)=>{
    const errors = {};
    const regex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    if(!value.Username){
      errors.Username ="*User name Is required"
    }

    if(!value.email){
      errors.email ="*Email Is required"
    }else if(!regex.test(value.email)){
      errors.email ="*Email Is not valid"
    }

    if(!value.password){
      errors.password ="*Password Is required"
    }else if(value.password.length<4){
      errors.password ="*Minimum Password Length must be of 4 characters"
    }else if(value.password.length>10){
      errors.password = "*Maximum password should not greater than 10 characters"
    }

    return errors;
  }


   return (
     <>
     <h2> Registration Form</h2>
     <br />
     <form action="" onSubmit={handleSubmit}>
      <div className="elements">
      <input type="text" name='Username' 
      placeholder='Enter your User name' 
      value={formValue.Username}
      onChange={handleChange}
       />
       <div className='error'> {formError && formError.Username}</div>
      </div>
<div className="elements"><input type="email" name='email' 
      placeholder='Enter your Email' 
      value={formValue.email}
      onChange={handleChange}/>
 <div className='error'> {formError && formError.email}</div>
      </div>
      

<div className="elements"> <input type="password" name='password'
       placeholder='Enter your Password'
       autoComplete='off'
       value={formValue.password}
       onChange={handleChange}/>
    <div className='error'> {formError && formError.password}</div>
       </div>
     
     
   
  <button id="reg_btn" onClick={()=>dispatch(postUserRequest(formValue))}>Register</button>
 <p>I already have an account. <span><u>Login</u></span></p>
       
     </form>
     
     
     </>
   )
 }