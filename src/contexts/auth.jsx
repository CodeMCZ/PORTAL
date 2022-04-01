import React, { useState, useEffect, createContext } from "react";

import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const recoveredUser = localStorage.getItem('user');

    if(recoveredUser){
      setUser(JSON.parse(recoveredUser));
    }

    setLoading(false);
  }, []);

  const login=(cnpj, password) => {

    //API -> CRIAR UMA SESSION

    const loggedUser = {
      id: 'escol',
      cnpj
    };

    localStorage.setItem("user", JSON.stringify(loggedUser));
    
    if(password === "locse"){
        setUser(loggedUser);
      navigate("/");
    }
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/login");
  };

  return (
    <AuthContext.Provider
      value={{ authenticated: !!user, user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}