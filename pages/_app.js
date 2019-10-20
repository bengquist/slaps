import App, { Container } from "next/app";
import { ApolloProvider } from "@apollo/react-hooks";
import { GlobalStyle } from "../components/style/global";
import React from 'react'
import { ThemeProvider } from "styled-components";
import { theme } from "../components/style/theme";
import withApollo from "../lib/withApollo";

class MyApp extends App {
  render() {
    const { Component, pageProps, client } = this.props;

    const getLayout = Component.getLayout || (page => page)

    return (
      <Container>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <ApolloProvider client={client}>
              {getLayout(<Component {...pageProps} />)}
          </ApolloProvider>
        </ThemeProvider>
      </Container>
    );
  }
}

export default withApollo(MyApp);
