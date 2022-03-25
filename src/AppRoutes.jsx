import React, { useState } from 'react';

import {
  BrowserRouter as Routers,
  Route,
  Routes,
  Navigate
} from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";

import { AuthContext } from "./contexts/auth";

const AppRoutes = () => {
  const [user, setUser] = useState(null);

  const login=(cnpj, password) => {
    setUser({id: "123", cnpj})
  };

  const logout = () => {};
  
  return (
    <Router>
      <AuthContext.Provider value={{authenticated:
      !!user, user, login}}>
      <Routes>
        <Route exact path="/login" element={<LoginPage />} />
        <Route exact path="/" element={<HomePage />} />
      </Routes>
        </AuthContext.Provider>
    </Router>
  )
}

export default AppRoutes;