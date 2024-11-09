// src/context/AuthContext.js
import React, { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch user data if token is present
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setUser(user);
    } else {
      setLoading(false);
    }
  }, []);

  // Login function
  const login = async (email, password) => {
    const response = await axios.post("http://localhost:8000/api/user/login", {
      email,
      password,
    });
    localStorage.setItem("token", response.data.token);
    localStorage.setItem("user", response.data.user);
    setUser(response.data.user);
  };

  // Register function
  const register = async (name, email, password, role) => {
    const response = await axios.post(
      "http://localhost:8000/api/user/register",
      {
        name,
        email,
        password,
        role,
      }
    );
    localStorage.setItem("token", response.data.token);
    localStorage.setItem("user", response.data.user);
    setUser(response.data.user);
    console.log(response);
  };

  // Logout function
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
