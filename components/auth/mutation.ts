import gql from "graphql-tag";

export const SIGN_IN = gql`
  mutation SIGN_IN($login: String!, $password: String!) {
    signIn(login: $login, password: $password) {
      token
    }
  }
`;
