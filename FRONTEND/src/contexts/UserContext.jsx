import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext();
const UserProvider = ({ children }) => {
  const [token, setToken] = useState(true);
  const [email, setEmail] = useState("");

  const logout = () => {
    setToken(null);
    setEmail("");
  };
  const login = async (email, password) => {
    console.log("Entró a login del UserContext");

    const response = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    const data = await response.json();

    console.log("esto es data ", data);

    if (data.error) {
      alert(data.error);
      return false;
    }

    setToken(data.token);
    setEmail(data.email);

    return true;
  };
  const register = async (email, password) => {
    console.log("Estos son email y password ", { email, password });

    const response = await fetch("http://localhost:5000/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (data.error) {
      alert(data.error);
      return false;
    }

    setToken(data.token);
    setEmail(data.email);

    return true;
  };

  const getProfile = async () => {
    console.log("Entró a getProfile");

    const response = await fetch("http://localhost:5000/api/auth/me", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await response.json();


    return data;
  };
  return (
    <UserContext.Provider value={{ token, logout, login, register, email, getProfile }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
