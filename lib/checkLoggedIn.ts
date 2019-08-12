import gql from "graphql-tag";

export default async (client: any) => {
  try {
    const { data } = await client.query({
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
