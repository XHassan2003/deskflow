import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const AuthContext = createContext({
  user: null,
  loading: true,
  login: async () => {},
  register: async () => {},
  signOut: () => {},
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const API_URL = "https://deskflow-6hg2.onrender.com";

  // Load user from token
  useEffect(() => {
    const loadUser = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        setLoading(false);
        return;
      }

      try {
        const { data } = await axios.get(`${API_URL}/me`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        setUser(data);
      } catch (error) {
        localStorage.removeItem("token");
      } finally {
        setLoading(false);
      }
    };

    loadUser();
  }, []);

  const login = async (email, password) => {
    const { data } = await axios.post(`${API_URL}/login`, {
      email,
      password,
    });

    localStorage.setItem("token", data.token);

    setUser({
      _id: data._id,
      displayName: data.displayName,
      email: data.email,
    });
  };

  const register = async (displayName, email, password) => {
    const { data } = await axios.post(`${API_URL}/register`, {
      displayName,
      email,
      password,
    });

    localStorage.setItem("token", data.token);

    setUser({
      _id: data._id,
      displayName: data.displayName,
      email: data.email,
    });
  };

  const signOut = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, register, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};
