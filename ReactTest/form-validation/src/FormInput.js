import React from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import "./FormInput.css";

const userData = yup.object().shape({
  firstName: yup.string().required("First Name is required"),
  lastName: yup.string().required("Last Name is required"),
  email: yup.string().email().required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be atleast 6 charecters")
    .max(12, "Password can be maximum of 6 charecters"),
  cnfpswrd: yup.string().oneOf([yup.ref("password")], "Password didn't match"),
  date: yup.string().required(),
});

export default function FormInput() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(userData),
  });
  // console.log(errors);

  const formData = (data) => {
    console.log(data);

    reset();
  };

  return (
    <>
      <div className="container">
        {/* <div className="signUp">
          <h3>Sign Up</h3>
        </div> */}
        <form className="form" onSubmit={handleSubmit(formData)}>
          <div className="inp">
            <label htmlFor="fname">First Name</label>
            <input
              type="text"
              name="firstName"
              id="fname"
              placeholder="First Name"
              {...register("firstName")}
            />
            <p>{errors.firstName && errors.firstName.message}</p>
          </div>

          <div className="inp">
            <label htmlFor="lname">Last Name</label>
            <input
              type="text"
              name="lastName"
              id="lname"
              placeholder="Last Name"
              {...register("lastName")}
            />
            <p>{errors.lastName && errors.lastName.message}</p>
          </div>

          <div className="inp">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="john@gmail.com"
              {...register("email")}
            />
            <p>{errors.email && errors.email.message}</p>
          </div>

          <div className="inp">
            <label htmlFor="paswrd">Password</label>
            <input
              type="password"
              name="password"
              id="paswrd"
              placeholder="password"
              {...register("password")}
            />
            <p>{errors.password && errors.password.message}</p>
          </div>

          <div className="inp">
            <label htmlFor="cnfpswrd">Confirm Password</label>
            <input
              type="password"
              name="cnfpswrd"
              id="cnfpswrd"
              placeholder="Confirm Password"
              {...register("cnfpswrd")}
            />
            <p>{errors.cnfpswrd && errors.cnfpswrd.message}</p>
          </div>

          <div className="inp">
            <label htmlFor="date">DOB</label>
            <input type="date" name="date" id="date" {...register("date")} placeholder="date"/>
            <p>{errors.date && errors.date.message}</p>
          </div>

          <button>Sign Up</button>
        </form>
      </div>
    </>
  );
}
