import React, { ReactNode } from "react";
import Page from "../components/app/Page";
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
  <Page>
    {page}
  </Page>
)

export default HomePage;
