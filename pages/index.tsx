import React from "react";
import checkLoggedIn from "../lib/checkLoggedIn";
import redirect from "../lib/redirect";

const Home = () => <div>Hi</div>;

Home.getInitialProps = async function(context: any) {
  const { me } = await checkLoggedIn(context.client);

  if (!me) {
    redirect(context, "/signin");
  }

  return me;
};

export default Home;
