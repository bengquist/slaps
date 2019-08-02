import React from "react";
import Page from "../components/app/Page";
import checkLoggedIn from "../lib/checkLoggedIn";
import redirect from "../lib/redirect";

const Home = () => <Page>Hi</Page>;

Home.getInitialProps = async function(context) {
  const { me } = await checkLoggedIn(context.apolloClient);

  if (!me) {
    // If not signed in, send them somewhere more useful
    redirect(context, "/login");
  }

  return me;
};

export default Home;
