import React from "react";
import * as Auth from "./styles";
import useFormValidation from "../hooks/useFormValidation";
import { validateSignUp } from "./helpers";
import { useMutation } from "react-apollo-hooks";
import Cookie from "js-cookie";
import { SIGN_UP } from "./mutation";
import AuthBox from "./AuthBox";

const INITIAL_STATE = {
  user: "",
  password: ""
};

function SignUpPanel() {
  const {
    handleSubmit,
    handleChange,
    handleBlur,
    values,
    errors,
    isSubmitting
  } = useFormValidation(INITIAL_STATE, validateSignUp, submitHandler);

  const toggleSignIn = useMutation(SIGN_UP, {
    update: (_, { data }) => {
      Cookie.set("token", data.signUp.token);
    }
  });

  async function submitHandler() {
    await toggleSignIn({
      variables: {
        username: values.username,
        email: values.email,
        password: values.password
      }
    });
  }

  return (
    <Auth.Panel>
      <Auth.Title>SIGN UP</Auth.Title>
      <Auth.Form onSubmit={handleSubmit}>
        <Auth.FormBody>
          <Auth.Label>
            <p>Username</p>
            <Auth.Input
              name="username"
              type="text"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.username}
            />
          </Auth.Label>
          <Auth.Label>
            <p>Email</p>
            <Auth.Input
              name="email"
              type="text"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.email}
            />
          </Auth.Label>
          <Auth.Label>
            <p>Password</p>
            <Auth.Input
              name="password"
              style={{ fontSize: "1.125rem" }}
              type="password"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.password}
            />
          </Auth.Label>
          <Auth.Label>
            <p>Confirm Password</p>
            <Auth.Input
              name="passwordConfirm"
              style={{ fontSize: "1.125rem" }}
              type="password"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.passwordConfirm}
            />
          </Auth.Label>
        </Auth.FormBody>

        <Auth.Button type="submit" disabled={isSubmitting}>
          SIGN UP
        </Auth.Button>
      </Auth.Form>
      <p>OR</p>
      <AuthBox title="Sign up with:" />
    </Auth.Panel>
  );
}

export default SignUpPanel;
