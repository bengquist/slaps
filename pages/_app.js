import App, { Container } from "next/app";
import { ThemeProvider } from "styled-components";
import { theme } from "../components/styles/theme";
import { GlobalStyle } from "../components/styles/global";
import { ApolloProvider } from "react-apollo";
import { ApolloProvider as ApolloHooksProvider } from "react-apollo-hooks";
import withApollo from "../lib/withApollo";
import Page from "../components/app/Page";

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps, client } = this.props;

    return (
      <Container>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <ApolloProvider client={client}>
            <ApolloHooksProvider client={client}>
              <Page>
                <Component {...pageProps} />
              </Page>
            </ApolloHooksProvider>
          </ApolloProvider>
        </ThemeProvider>
      </Container>
    );
  }
}

export default withApollo(MyApp);
