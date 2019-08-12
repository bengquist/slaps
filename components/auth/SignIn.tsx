import React, { useState } from "react";
import AuthBox from "./AuthBox";
import * as Auth from "./styles/styles";
import useFormValidation from "../hooks/useFormValidation";
import { validateLogin } from "./helpers";
import { SIGN_IN } from "./mutation";
import { useMutation } from "@apollo/react-hooks";
import Cookie from "js-cookie";
import redirect from "../../lib/redirect";
import Link from "next/link";
import colors from "../style/colors";
import AuthInput from "./styles/AuthInput";
import { formatError } from "../../lib/errorHelpers.tsx";

const INITIAL_STATE = {
  user: "",
  password: ""
};

function Login() {
  const {
    handleSubmit,
    handleChange,
    handleBlur,
    values,
    errors,
    isSubmitting
  } = useFormValidation(INITIAL_STATE, submitHandler, validateLogin);

  const [toggleSignIn, { error }] = useMutation(SIGN_IN, {
    update: (_, { data }) => {
      Cookie.set("token", data.signIn.token);
    }
  });

  async function submitHandler() {
    await toggleSignIn({
      variables: { login: values.user, password: values.password }
    });

    redirect({}, "/");
  }

  return (
    <Auth.Container>
      <Auth.Panel
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
      >
        <Auth.Form onSubmit={handleSubmit}>
          <Auth.FormBody>
            <Auth.Title>SIGN IN</Auth.Title>
            <Auth.Label>
              <p>Email or Username</p>
              <AuthInput
                name="user"
                type="text"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.user}
                error={errors.user}
              />
            </Auth.Label>
            <Auth.Label>
              <p>Password</p>
              <AuthInput
                name="password"
                type="password"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.password}
                error={errors.password}
              />
            </Auth.Label>
            {error && (
              <Auth.ErrorMessage>
                {formatError(error.message)}
              </Auth.ErrorMessage>
            )}
          </Auth.FormBody>

          <div>
            <Auth.Button type="submit" disabled={isSubmitting}>
              LOG IN
            </Auth.Button>

            <Link href="/signup">
              <div
                style={{
                  color: colors.black,
                  textAlign: "center",
                  marginTop: ".25rem"
                }}
              >
                <span>Not a member?</span>
                <button type="button" style={{ color: colors.orange }}>
                  Create account
                </button>
              </div>
            </Link>
          </div>
        </Auth.Form>
        <p>OR</p>
        <AuthBox title="Log in with:" />
      </Auth.Panel>
    </Auth.Container>
  );
}

export default Login;
