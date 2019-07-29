import React from "react";
import { useMutation } from "react-apollo-hooks";
import Cookie from "js-cookie";
import { SIGN_IN } from "./query";
import { Formik, FormikErrors } from "formik";
import FormInput from "../ui/Form/FormInput";
import FormPanel from "../ui/Form/FormPanel";
import FormLabel from "../ui/Form/FormLabel";
import FormContainer from "../ui/Form/FormContainer";
import FormActions from "../ui/Form/FormActions";

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
    <FormContainer>
      <Formik
        initialValues={{ user: "", password: "" }}
        onSubmit={submitHandler}
        validate={validateHandler}
      >
        {props => {
          return (
            <FormPanel onSubmit={props.handleSubmit}>
              <FormLabel>
                Email or Username
                <FormInput
                  onChange={props.handleChange}
                  error={props.errors.user}
                  name="user"
                  type="text"
                />
              </FormLabel>
              <FormLabel>
                Password
                <FormInput
                  onChange={props.handleChange}
                  error={props.errors.password}
                  name="password"
                  type="password"
                />
              </FormLabel>
              <FormActions>
                <button type="submit">Log In</button>
              </FormActions>
            </FormPanel>
          );
        }}
      </Formik>
    </FormContainer>
  );
}

export default Login;
