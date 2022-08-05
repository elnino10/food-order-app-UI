import React, { useState } from "react";

export const AuthContext = {
  isLogin: false,
  loggedIn: () => {},
  loggedOut: () => {},
};

const AuthProvider = (props) => {
  const [loginState, setLoginState] = useState(false);

  const loginHandler = () => {
    setLoginState(true);
  };

  const logoutHandler = () => { 
    setLoginState(false);
  };

  const authContext = {
    islogin: loginState,
    loggedIn: loginHandler,
    loggedOut: logoutHandler,
  };

  return (
    <AuthContext.Provider value={authContext}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
