/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react";
import request from "../api/client";

const AuthContext = createContext(null);

function getStoredUser() {
  const storedUser = localStorage.getItem("estatein_user");

  if (!storedUser) {
    return null;
  }

  try {
    return JSON.parse(storedUser);
  } catch {
    localStorage.removeItem("estatein_user");
    return null;
  }
}

export function AuthProvider({ children }) {
  const [token, setToken] = useState(
    () => localStorage.getItem("estatein_token") || null,
  );
  const [user, setUser] = useState(getStoredUser);

  const login = async (email, password) => {
    const data = await request("/auth/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    });

    localStorage.setItem("estatein_token", data.token);
    localStorage.setItem("estatein_user", JSON.stringify(data.user));
    setToken(data.token);
    setUser(data.user);

    return data;
  };

  const logout = () => {
    localStorage.removeItem("estatein_token");
    localStorage.removeItem("estatein_user");
    setToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used inside an AuthProvider");
  }

  return context;
}
