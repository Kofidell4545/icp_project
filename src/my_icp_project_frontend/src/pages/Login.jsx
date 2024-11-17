// src/pages/Login.jsx
import React, { useState } from "react";
import { loginUser } from "../icpService";

function Login() {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await loginUser(phone, password);
    alert(response);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Phone"
        onChange={(e) => setPhone(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
