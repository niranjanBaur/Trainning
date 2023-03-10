import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import "./Login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const [loginStatus, setLoginStatus] = useState();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
 
  const onSubmit = async (e) => {
    e.preventDefault();

    await axios.post("http://localhost:8000/login", user).then((res) => {
      // console.log(res?.data.message);
      setLoginStatus(res?.data?.message);

      if (res?.data?.data) {
        // console.log(res?.data.data[0].email);

        // document.cookie = `email=${res?.data.data[0].email}`;
        sessionStorage.setItem("userID", res?.data.data[0].id);
        console.log(res?.data.data[0]);
        navigate("/");
      }
    }).then(() => {
      console.log(user);
    });
  };

  return (
    <>
      <div className={`invalid`}>{loginStatus}</div>

      <div className="LoginForm">
        <h1 style={{ marginBottom: "50px" }}>Login</h1>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              onChange={handleChange}
              placeholder="Enter email"
              name="email"
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              onChange={handleChange}
              placeholder="Password"
              name="password"
            />
          </Form.Group>

          {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group> */}
          <Button variant="primary" onClick={onSubmit} type="button">
            Login
          </Button>
        </Form>
        <p className="reg" onClick={()=>{navigate('/register')}}>I don't have any account.<u><b>Register</b></u></p>
      </div>

    </>
  );
};

export default Login;
