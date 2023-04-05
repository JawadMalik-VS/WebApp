import axios from "axios";
import React, { useState } from "react";

function ForgotPass() {
  const [email, setEmail] = useState("");

  console.log("Email", email);

  const handleEmail = () => {
    let url = "http://localhost:4500/api/v1/admin/forgot-pass";
    axios
      .post(url, { email })
      .then((res) => {
        console.log("Response", res?.data);
      })
      .catch((error) => console.log("Error-->", error));
  };

  return (
    <div style={{ position: "absolute", marginLeft: "700px" }}>
      <h1>Enter Email to Reset your Password</h1>
      <input type="text" onChange={(e) => setEmail(e.target.value)} />
      <button onClick={handleEmail}>Submit</button>
    </div>
  );
}

export default ForgotPass;
