import React from "react";
import Login from "../components/auth/Login";
import checkLoggedIn from "../lib/checkLoggedIn";
import redirect from "../lib/redirect";

const LoginPage = () => {
  return <Login />;
};

LoginPage.getInitialProps = async context => {
  const { me } = await checkLoggedIn(context.apolloClient);

  if (me) {
    redirect(context, "/");
  }

  return {};
};

export default LoginPage;
