import { createContext, useContext, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
const AUTH_URL = "http://localhost:3001";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
  const [authToken, setAuthToken] = useState(() =>
    localStorage.getItem("authToken")
  );
  const [userName, setUserName] = useState(() =>
    localStorage.getItem("userName")
  );

  const register = async ({ email, password, userName }) => {
    try {
      const res = await axios.post(`${AUTH_URL}/register`, {
        email,
        password,
        name: userName,
      });
      const token = res.data.token;
      setAuthToken(token);
      setUserName(res.data.data.user.name);
      localStorage.setItem("authToken", token);
      localStorage.setItem("userName", res.data.data.user.name);
      toast("Logged In");
    } catch (err) {
      toast.error(err?.response?.data?.message || "Something went wrong");
    }
  };

  const login = async (email, password) => {
    try {
      const res = await axios.post(`${AUTH_URL}/login`, {
        email,
        password,
      });
      console.log(res);
      const token = res.data.token;
      setAuthToken(token);
      setUserName(res.data.data.user.name);
      localStorage.setItem("authToken", token);
      localStorage.setItem("userName", res.data.data.user.name);
      toast("Logged In");
    } catch (err) {
      toast.error(err?.response?.data?.message || "Something went wrong");
    }
  };

  const logout = () => {
    setAuthToken(null);
    setUserName(null);
    localStorage.removeItem("authToken");
    localStorage.removeItem("userName");
    toast("User Logged Out");
  };

  const isAuthenticated = !!authToken;

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, login, logout, register, userName }}
    >
      {children}
    </AuthContext.Provider>
  );
};
