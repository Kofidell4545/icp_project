// src/pages/Register.jsx
import React, { useState } from "react";
import { registerUser } from "../icpService";

function Register() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await registerUser(name, phone, password);
    alert(response);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
        required
      />
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
      <button type="submit">Register</button>
    </form>
  );
}

export default Register;
