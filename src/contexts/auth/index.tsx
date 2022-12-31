import React, { createContext } from "react";
import authContextHooks from "./hooks";

export const AuthContext = createContext({});

interface authProviderProps {
  children: JSX.Element;
}

function AuthProvider({ children }: authProviderProps) {
  const { user, setUser, signUp, signIn } = authContextHooks();

  return (
    <AuthContext.Provider value={{ user, setUser, signUp, signIn }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
