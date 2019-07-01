import React, { useState } from "react";
import styled from "styled-components";
import { preventDefault } from "../../lib/eventHelpers";
import { useMutation } from "react-apollo-hooks";
import Cookie from "js-cookie";
import { SIGN_IN } from "./query";

function Login() {
  const [login, setLogin] = useState();
  const [password, setPassword] = useState();

  const toggleSignIn = useMutation(SIGN_IN, {
    update: (cache, { data }) => {
      console.log(cache);
      Cookie.set("token", data.signIn.token);
    },
    variables: { login, password }
  });

  return (
    <Container>
      <Form onSubmit={preventDefault(() => toggleSignIn())}>
        <Field>
          <label htmlFor="username">Username</label>
          <input
            onChange={e => setLogin(e.target.value)}
            id="username"
            type="text"
          />
        </Field>
        <Field>
          <label htmlFor="password">Password</label>
          <input
            onChange={e => setPassword(e.target.value)}
            id="username"
            type="password"
          />
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
