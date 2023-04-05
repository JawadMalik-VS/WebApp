import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Button } from "@mui/material";

function Signup() {
  const navigate = useNavigate();
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  const token = localStorage.getItem("token");
  console.log("Token-->", token);

  const handleSubmit = (e) => {
    //Prevent page reload
    e.preventDefault();

    let url = "http://localhost:4500/api/v1/admin/signup";
    axios
      .post(
        url,
        {
          name,
          email,
          password,
        },
        {
          headers: {
            Authorization: `Basic ${token}`,
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        console.log("object", res.data);
      })
      .catch((error) => console.log("Error-->", error));

    navigate("/login");
  };

  const handleLogin = (e) => {
    //Prevent page reload
    e.preventDefault();

    navigate("/login");
  };

  return (
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign Up</h3>
          <div className="form-group mt-3">
            <label>Name </label>
            <input
              type="text"
              name="name"
              className="form-control mt-1"
              placeholder="Enter Name"
              required
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="form-group mt-3">
            <label>Email </label>
            <input
              type="email"
              className="form-control mt-2"
              placeholder="Enter Email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <label>Password </label>
            <input
              type="password"
              name="password"
              className="form-control mt-1"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <Button
              variant="contained"
              type="submit"
              className="btn btn-primary"
              onClick={handleSubmit}
            >
              Submit
            </Button>
          </div>
        </div>
        {/* {localStorage.getItem("email")
          ? navigate("/home")
          : console.log("Failed to signup")} */}
        <Button onClick={handleLogin}>Login if you already have Account</Button>
      </form>
    </div>
  );
}

export default Signup;
