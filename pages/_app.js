import App, { Container } from "next/app";
import { ApolloProvider } from "@apollo/react-hooks";
import { GlobalStyle } from "../components/style/global";
import Page from '../components/app/Page'
import React from 'react'
import { ThemeProvider } from "styled-components";
import { theme } from "../components/style/theme";
import withApollo from "../lib/withApollo";

class MyApp extends App {
  render() {
    const { Component, pageProps, client } = this.props;

    return (
      <Container>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <ApolloProvider client={client}>
            <Page>
              <Component {...pageProps} />
            </Page>
          </ApolloProvider>
        </ThemeProvider>
      </Container>
    );
  }
}

export default withApollo(MyApp);
