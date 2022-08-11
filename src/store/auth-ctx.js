import React, { useState } from "react";

import { auth } from "../firebase";

export const AuthContext = React.createContext();

const AuthProvider = (props) => {
  const [newUser, setNewUser] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const signup = (email, password) => {
    return auth.createUserWithEmailAndPassword(email, password);
  };

  const login = (email, password) => {
    return auth.signInWithEmailAndPassword(email, password)
  }

  auth.onAuthStateChanged((user) => {
    setIsLoading(false);
    setNewUser(user);
    });

  const authContext = {
    newUser,
    signup,
    login
  };

  return (
    <AuthContext.Provider value={authContext}>
      {!isLoading && props.children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
