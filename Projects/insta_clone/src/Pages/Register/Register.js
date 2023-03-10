import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./Register.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8000/register", user).then((res) => {
        console.log(res);
        // document.cookie = `email=${res?.data.data[0].email}`;
        sessionStorage.setItem("userID", res?.data.data[0].id);
        navigate("/");
      })
    } catch (err) {
      console.log(err);
    }
  };

  // console.log(user);

  return (
    <div className="RegisterForm">
      <h1 style={{ marginBottom: "50px" }}>Register</h1>

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
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            onChange={handleChange}
            placeholder="username"
            name="username"
          />
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

        {/* <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group> */}

        {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group> */}
        <Button variant="primary" type="button" onClick={onSubmit}>
          Register
        </Button>
      </Form>

      <p
        className="reg"
        style={{}}
        onClick={() => {
          navigate("/login");
        }}
      >
        I already have an account.
        <u>
          <b>Login</b>
        </u>
      </p>
    </div>
  );
};

export default Register;
