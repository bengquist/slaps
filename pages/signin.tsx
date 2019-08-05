import React from "react";
import SignIn from "../components/auth/SignIn";
import checkLoggedIn from "../lib/checkLoggedIn";
import redirect from "../lib/redirect";

const SignInPage = () => {
  return <SignIn />;
};

SignInPage.getInitialProps = async context => {
  const { me } = await checkLoggedIn(context.apolloClient);

  if (me) {
    redirect(context, "/");
  }

  return {};
};

export default SignInPage;
