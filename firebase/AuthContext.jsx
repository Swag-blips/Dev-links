import React, { createContext, useContext, useEffect, useState } from "react";
import { auth } from "./config";
import { onAuthStateChanged } from "firebase/auth";

const AuthContext = createContext();

export default function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) =>
      setCurrentUser(user)
    );

    return unsubscribe;
  }, []);

  const value = { currentUser };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
