// src/pages/Balance.jsx
import React, { useEffect, useState } from "react";
import { checkBalance } from "../icpService";

function Balance() {
  const [balance, setBalance] = useState(0);

  const phone = "user_phone_here"; // Replace with the actual phone number or get it from state

  useEffect(() => {
    const fetchBalance = async () => {
      const balance = await checkBalance(phone);
      setBalance(balance);
    };

    fetchBalance();
  }, [phone]);

  return <h1>Your Balance: ${balance}</h1>;
}

export default Balance;
