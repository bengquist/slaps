import React from "react";
import styled from "styled-components";
import { preventDefault } from "../../lib/eventHelpers";
import { gql } from "apollo-boost";
import { useQuery } from "react-apollo-hooks";

const GET_USERS = gql`
  {
    users {
      username
    }
  }
`;

function Login() {
  const { loading, data } = useQuery(GET_USERS);

  console.log(loading, data);

  return (
    <Container>
      <Form onSubmit={preventDefault(() => console.log("yo"))}>
        <Field>
          <label htmlFor="username">Username</label>
          <input id="username" type="text" />
        </Field>
        <Field>
          <label htmlFor="password">Password</label>
          <input id="username" type="text" />
        </Field>
        <Actions>
          <button>Log In</button>
        </Actions>
      </Form>
    </Container>
  );
}

export default Login;

const Container = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Form = styled.form`
  display: grid;
  grid-gap: 1.5rem;
  background: ${props => props.theme.colors.gray};
  width: 100%;
  max-width: 500px;
  padding: 1.5rem;
`;

const Field = styled.div`
  display: grid;
  grid-gap: 0.51rem;
`;

const Actions = styled.div``;
