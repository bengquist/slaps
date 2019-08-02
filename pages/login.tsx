import React from "react";
import Login from "../components/auth/Login";
import { parseCookies } from "../lib/parseCookies";
import Router from "next/router";

const LoginPage = ({ token }) => {
  if (token) Router.push("/");

  return <Login />;
};

LoginPage.getInitialProps = ({ req }: any) => {
  const { token } = parseCookies(req);

  if (token) {
    return { token };
  }

  return {};
};

export default LoginPage;
