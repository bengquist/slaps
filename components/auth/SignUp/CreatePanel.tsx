import React from "react";
import * as Auth from "../styles/styles";
import useFormValidation from "../../hooks/useFormValidation";
import { validateSignUp } from "../helpers";
import { useMutation } from "react-apollo-hooks";
import Cookie from "js-cookie";
import { SIGN_UP } from "../mutation";
import AuthBox from "../AuthBox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import Router from "next/router";
import AuthInput from "../styles/AuthInput";
import PasswordValidation from "../PasswordValidation";

type Props = {
  onSignUp: () => void;
};

const INITIAL_STATE = {
  username: "",
  email: "",
  password: "",
  passwordConfirm: ""
};

function SignUpPanel({ onSignUp }: Props) {
  const {
    handleSubmit,
    handleChange,
    handleBlur,
    values,
    errors,
    isSubmitting
  } = useFormValidation(INITIAL_STATE, submitHandler, validateSignUp);

  const toggleSignUp = useMutation(SIGN_UP, {
    update: (_, { data }) => {
      Cookie.set("token", data.signUp.token);
    }
  });

  async function submitHandler() {
    await toggleSignUp({
      variables: {
        username: values.username,
        email: values.email,
        password: values.password
      }
    });

    onSignUp();
  }

  return (
    <Auth.Panel
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
    >
      <Auth.Form onSubmit={handleSubmit}>
        <Auth.FormBody>
          <Auth.TitleContainer>
            <Auth.BackButton
              type="button"
              onClick={() => Router.replace("/signin")}
            >
              <FontAwesomeIcon icon={faChevronLeft} /> LOG IN
            </Auth.BackButton>
            <Auth.Title>SIGN UP</Auth.Title>
          </Auth.TitleContainer>
          <Auth.Label>
            <p>Username</p>
            <AuthInput
              name="username"
              type="text"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.username}
              error={errors.username}
            />
          </Auth.Label>
          <Auth.Label>
            <p>Email</p>
            <AuthInput
              name="email"
              type="text"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.email}
              error={errors.email}
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
          <Auth.Label>
            <p>Confirm Password</p>
            <AuthInput
              name="passwordConfirm"
              type="password"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.passwordConfirm}
              error={errors.passwordConfirm}
            />
          </Auth.Label>
          <PasswordValidation
            password={values.password}
            passwordConfirm={values.passwordConfirm}
          />
        </Auth.FormBody>

        <Auth.Button type="submit" disabled={isSubmitting}>
          CREATE ACCOUNT
        </Auth.Button>
      </Auth.Form>
      <p>OR</p>
      <AuthBox title="Sign up with:" />
    </Auth.Panel>
  );
}

export default SignUpPanel;
