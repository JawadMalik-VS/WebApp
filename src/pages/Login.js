import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import axios from "axios";

function Login() {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  const handleSignup = () => {
    navigate("/signup");
  };

  let url = "http://localhost:4500/api/v1/admin/login";

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        url,
        { email, password },
        {
          headers: {
            Authorization: `Basic ${token}`,
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        res.data?.data?.token.accessToken ? navigate("/meetup") : navigate("#");
        console.log("Token-->", res.data?.data?.token.accessToken);
        localStorage.setItem("token", res.data?.data?.token.accessToken);
      })
      .catch((error) => console.log("Error-->", error));
  };

  return (
    <div>
      <div className="Auth-form-container">
        <form className="Auth-form">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign In</h3>
            <div className="form-group mt-3">
              <label>Email address</label>
              <input
                type="email"
                className="form-control mt-1"
                placeholder="Enter email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Enter password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button
                type="submit"
                className="btn btn-primary"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
            <p className="forgot-password text-right mt-2">
              <a href="/forgot-pass"> Forgot password?</a>
            </p>
          </div>
          <Button onClick={handleSignup}>Signup if you have no Account</Button>
        </form>
      </div>
    </div>
  );
}

export default Login;
