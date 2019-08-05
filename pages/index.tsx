import React from "react";
import Page from "../components/app/Page";
import checkLoggedIn from "../lib/checkLoggedIn";
import redirect from "../lib/redirect";

const Home = () => <Page>Hi</Page>;

Home.getInitialProps = async function(context) {
  const { me } = await checkLoggedIn(context.apolloClient);

  if (!me) {
    redirect(context, "/signin");
  }

  return me;
};

export default Home;
