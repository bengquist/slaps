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

export const UPDATE_USER = gql`
  mutation UPDATE_USER(
    $firstName: String
    $lastName: String
    $location: String
    $bio: String
  ) {
    updateUser(
      firstName: $firstName
      lastName: $lastName
      location: $location
      bio: $bio
    ) {
      _id
      username
      firstName
      lastName
      location
      bio
    }
  }
`;
