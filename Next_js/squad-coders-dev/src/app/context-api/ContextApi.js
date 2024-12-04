"use client";

import React, { createContext, useContext } from "react";
import { authService } from "utils/auth.service";

const AuthenticationContext = createContext();

const ContextApi = ({ children }) => {
  const onLogin = (props) => {
    const { data } = props;
    authService.setLocalStorageToken(data?.token);
    authService.setLocalStorageToken(data?.username);
  };
  const onLogout = () => {
    authService.setLocalStorageToken();
  };
  return   (
    <AuthenticationContext.Provider value={{ onLogin, onLogout }}>
      {children}
    </AuthenticationContext.Provider>
  );
};

export default ContextApi;
export const useAuthenticatedContext = () => useContext(AuthenticationContext);
