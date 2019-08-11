import gql from "graphql-tag";

export const GET_ME = gql`
  query GET_ME {
    me {
      firstName
      lastName
      location
      bio
      image
    }
  }
`;
