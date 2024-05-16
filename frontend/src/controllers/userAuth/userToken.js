"use client";
import { useState, useEffect } from "react";

const useToken = () => {
  const [tokenStatus, setTokenStatus] = useState({
    isAuthenticated: false,
    token: null,
  });

  useEffect(() => {
    if (typeof localStorage !== "undefined") {
      const token = localStorage.getItem("token");

      if (token) {
        setTokenStatus({ isAuthenticated: true, token });
      }
    }
  }, []);

  return tokenStatus;
};

export default useToken;
