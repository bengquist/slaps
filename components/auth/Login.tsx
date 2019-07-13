import React from "react";
import styled from "styled-components";
import { useMutation } from "react-apollo-hooks";
import Cookie from "js-cookie";
import { SIGN_IN } from "./query";
import { Formik, FormikErrors } from "formik";
import FormInput from "../ui/FormInput";

type FormValues = {
  user: string;
  password: string;
};

function Login() {
  const toggleSignIn = useMutation(SIGN_IN, {
    update: (_, { data }) => {
      Cookie.set("token", data.signIn.token);
    }
  });

  const submitHandler = ({ user, password }: FormValues) => {
    toggleSignIn({ variables: { login: user, password } });
  };

  const validateHandler = (values: FormValues) => {
    const errors: FormikErrors<FormValues> = {};

    if (!values.user) {
      errors.user = "Required";
    }

    if (!values.password) {
      errors.password = "Required";
    }

    return errors;
  };

  return (
    <Container>
      <Formik
        initialValues={{ user: "", password: "" }}
        onSubmit={submitHandler}
        validate={validateHandler}
      >
        {props => {
          return (
            <Form onSubmit={props.handleSubmit}>
              <Field>
                Email or Username
                <FormInput
                  onChange={props.handleChange}
                  error={props.errors.user}
                  name="user"
                  type="text"
                />
              </Field>
              <Field>
                Password
                <FormInput
                  onChange={props.handleChange}
                  error={props.errors.password}
                  name="password"
                  type="password"
                />
              </Field>
              <Actions>
                <button type="submit">Log In</button>
              </Actions>
            </Form>
          );
        }}
      </Formik>
    </Container>
  );
}

export default Login;

const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${props => props.theme.colors.darkGray};
`;

const Form = styled.form`
  display: grid;
  grid-gap: 1.5rem;
  background: ${props => props.theme.colors.gray};
  width: 100%;
  max-width: 500px;
  padding: 1.5rem;
`;

const Field = styled.label``;

const Actions = styled.div``;
