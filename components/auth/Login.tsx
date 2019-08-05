import React from "react";
import AuthBox from "./AuthBox";
import * as Auth from "./styles";
import useFormValidation from "../hooks/useFormValidation";
import { validateLogin } from "./helpers";
import { SIGN_IN } from "./mutation";
import { useMutation } from "react-apollo-hooks";
import Cookie from "js-cookie";
import redirect from "../../lib/redirect";
import Link from "next/link";
import colors from "../style/colors";

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
  } = useFormValidation(INITIAL_STATE, validateLogin, submitHandler);

  const toggleSignIn = useMutation(SIGN_IN, {
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
      <Auth.Panel>
        <Auth.Title>LOG IN</Auth.Title>
        <Auth.Form onSubmit={handleSubmit}>
          <Auth.FormBody>
            <Auth.Label>
              <p>Email or Username</p>
              <Auth.Input
                name="user"
                type="text"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.user}
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
                <button type="button" style={{ color: colors.red }}>
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
