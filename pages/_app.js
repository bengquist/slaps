import App, { Container } from "next/app";
import { ThemeProvider } from "styled-components";
import { theme } from "../components/style/theme";
import { GlobalStyle } from "../components/style/global";
import { ApolloProvider } from "@apollo/react-hooks";
import withApollo from "../lib/withApollo";

class MyApp extends App {
  render() {
    const { Component, pageProps, apolloClient } = this.props;

    return (
      <Container>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <ApolloProvider client={apolloClient}>
            <Component {...pageProps} />
          </ApolloProvider>
        </ThemeProvider>
      </Container>
    );
  }
}

export default withApollo(MyApp);
