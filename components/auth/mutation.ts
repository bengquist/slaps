import gql from "graphql-tag";

export const SIGN_IN = gql`
  mutation SIGN_IN($login: String!, $password: String!) {
    signIn(login: $login, password: $password) {
      token
    }
  }
`;

export const SIGN_UP = gql`
  mutation SIGN_UP($username: String!, $email: String!, $password: String!) {
    signUp(username: $username, email: $email, password: $password) {
      token
    }
  }
`;
