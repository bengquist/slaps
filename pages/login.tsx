import React from "react";
import Login from "../components/auth/Login";
import { parseCookies } from "../lib/parseCookies";

const LoginPage = () => <Login />;

LoginPage.getInitialProps = ({ req }: any) => {
  const { token } = parseCookies(req);

  return { token };
};

export default LoginPage;