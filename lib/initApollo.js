import { ApolloClient, InMemoryCache, HttpLink } from "apollo-boost";
import fetch from "isomorphic-unfetch";

let apolloClient = null;

function create(initialState) {
  return new ApolloClient({
    freezeResults: true,
    connectToDevTools: process.browser,
    ssrMode: !process.browser,
    link: new HttpLink({
      uri: "http://localhost:8000/graphql",
      credentials: "same-origin",
      fetch: !process.browser && fetch
    }),
    cache: new InMemoryCache().restore(initialState || {}),
    assumeImmutableResults: true
  });
}

export default function initApollo(initialState) {
  if (!process.browser) {
    return create(initialState);
  }

  if (!apolloClient) {
    apolloClient = create(initialState);
  }

  return apolloClient;
}
