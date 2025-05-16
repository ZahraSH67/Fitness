//Code fra Landrup dans
"use client";
import React, { createContext, useContext, useState, useEffect } from "react";
const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      const parsedToken = JSON.parse(storedToken);
      setToken(parsedToken);
      fetchUserData(parsedToken.userId, parsedToken.token);
    } else {
      setLoading(false);
    }
  }, []);

  async function fetchUserData(userId, authToken) {
    try {
      const response = await fetch(`http://localhost:4000/api/v1/users/${userId}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${authToken}`,
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch user data");
      }

      const userData = await response.json();
    
      setCurrentUser({
        ...userData,
        token: authToken, 
      });
    } catch (error) {
      console.error("Error fetching user data:", error);
    } finally {
      setLoading(false);
    }
  }

  async function login(username, password) {
    setLoading(true);
    try {
      const response = await fetch("http://localhost:4000/auth/token", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        throw new Error("Login failed");
      }

      const authData = await response.json();
      const tokenData = {
        userId: authData.userId,
        token: authData.token,
        validUntil: authData.validUntil,
      };

      setToken(tokenData);
      localStorage.setItem("token", JSON.stringify(tokenData));

    
      await fetchUserData(authData.userId, authData.token);
    } catch (error) {
      console.error("Login error:", error);
      throw new Error(error);
    } finally {
      setLoading(false);
    }
  }

  function logout() {
    setCurrentUser(null);
    setToken(null);
    localStorage.removeItem("token");
  }

  return (
    <AuthContext.Provider value={{ currentUser, setCurrentUser, token, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return {
    ...context,
    currentUser: context.currentUser,
    token: context.token, 
  };
};