import React from "react";
import initApollo from "./initApollo";
import Head from "next/head";
import { renderToString } from "react-dom/server";
import { getMarkupFromTree } from "react-apollo-hooks";

export default App => {
  return class Apollo extends React.Component {
    static displayName = "withApollo(App)";
    static async getInitialProps(ctx) {
      const { Component, router } = ctx;

      let appProps = {};
      if (App.getInitialProps) {
        appProps = await App.getInitialProps(ctx);
      }

      const apollo = initApollo();
      if (!process.browser) {
        try {
          // Run all GraphQL queries
          await getMarkupFromTree({
            renderFunction: renderToString,
            tree: (
              <App
                {...appProps}
                Component={Component}
                router={router}
                client={apollo}
              />
            )
          });
        } catch (error) {
          console.error("Error while running `getDataFromTree`", error);
        }
        Head.rewind();
      }

      const apolloState = apollo.cache.extract();

      return {
        ...appProps,
        apolloState
      };
    }

    constructor(props) {
      super(props);
      this.client = initApollo(props.apolloState);
    }

    render() {
      return <App {...this.props} client={this.client} />;
    }
  };
};
