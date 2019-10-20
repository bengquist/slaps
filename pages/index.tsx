import React, { ReactNode } from "react";
import Layout from "../components/app/Layout";
import checkLoggedIn from "../lib/checkLoggedIn";
import redirect from "../lib/redirect";

const HomePage = () => <div>Hi</div>;

HomePage.getInitialProps = async function(context: any) {
  const { me } = await checkLoggedIn(context.client);

  if (!me) {
    redirect(context, "/signin");
  }

  return me;
};

HomePage.getLayout = (page: ReactNode) => (
  <Layout>
    {page}
  </Layout>
)

export default HomePage;
