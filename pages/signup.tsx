import React from "react";
import checkLoggedIn from "../lib/checkLoggedIn";
import redirect from "../lib/redirect";
import SignUp from "../components/auth/SignUp/SignUp";

const SignUpPage = () => {
  return <SignUp />;
};

SignUpPage.getInitialProps = async context => {
  const { me } = await checkLoggedIn(context.client);

  if (me) {
    redirect(context, "/");
  }

  return {};
};

export default SignUpPage;
