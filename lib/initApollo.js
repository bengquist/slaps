import { ApolloClient, InMemoryCache } from "apollo-boost";
import { createHttpLink } from "apollo-link-http";
import { setContext } from "apollo-link-context";
import fetch from "isomorphic-unfetch";

let client = null;

// Polyfill fetch() on the server (used by apollo-client)
if (typeof window === "undefined") {
  global.fetch = fetch;
}

function create(initialState, { getToken, fetchOptions }) {
  const httpLink = createHttpLink({
    uri: "http://localhost:4000/graphql",
    credentials: "same-origin",
    fetchOptions
  });

  const authLink = setContext((_, { headers }) => {
    const token = getToken();

    return {
      headers: {
        ...headers,
        authorization: token ? token : ""
      }
    };
  });

  // Check out https://github.com/zeit/next.js/pull/4611 if you want to use the AWSAppSyncClient
  const isBrowser = typeof window !== "undefined";
  return new ApolloClient({
    connectToDevTools: isBrowser,
    ssrMode: !isBrowser, // Disables forceFetch on the server (so queries are only run once)
    link: authLink.concat(httpLink),
    cache: new InMemoryCache().restore(initialState || {})
  });
}

export default function initApollo(initialState, options) {
  // Make sure to create a new client for every server-side request so that data
  // isn't shared between connections (which would be bad)
  if (typeof window === "undefined") {
    let fetchOptions = {};

    return create(initialState, {
      ...options,
      fetchOptions
    });
  }

  // Reuse client on the client-side
  if (!client) {
    client = create(initialState, options);
  }

  return client;
}
