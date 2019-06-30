import App, { Container } from "next/app";
import { ThemeProvider } from "styled-components";
import { theme } from "../components/styles/theme";
import { GlobalStyle } from "../components/styles/global";
import { ApolloProvider } from "react-apollo";
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
    const { Component, pageProps, apolloClient } = this.props;

    return (
      <Container>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <ApolloProvider client={apolloClient}>
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
