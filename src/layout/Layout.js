import React from "react";
import AuthProvider from '../store/auth-ctx';

const Layout = (props) => {

  return <AuthProvider>{props.children}</AuthProvider>;
};

export default Layout;
