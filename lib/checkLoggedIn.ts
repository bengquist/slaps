import gql from "graphql-tag";

export default async (apolloClient: any) => {
  try {
    const { data } = await apolloClient.query({
      query: gql`
        query getUser {
          me {
            email
          }
        }
      `
    });

    return data;
  } catch (e) {
    return {};
  }
};
