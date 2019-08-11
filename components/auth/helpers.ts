import EmailValidator from "email-validator";

export const usernameRegEx = /^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/;
export const passwordRegEx = /^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/;

export function validateLogin(values: any) {
  let errors = { user: "", password: "" };

  // Login Errors
  if (!values.user) {
    errors.user = "Required";
  }

  // Password Errors
  if (!values.password) {
    errors.password = "Required";
  }

  return errors;
}

export function validateSignUp(values: any) {
  let errors = { username: "", email: "", password: "", passwordConfirm: "" };

  // Username Errors
  if (!values.username) {
    errors.username = "Required";
  } else if (usernameRegEx.test(values.username)) {
    errors.username = "Invalid";
  }

  // Email Errors
  if (!values.email) {
    errors.email = "Required";
  } else if (!EmailValidator.validate(values.email)) {
    errors.email = "Invalid";
  }

  // Password Errors
  if (!values.password) {
    errors.password = "Required";
  }

  // Password Confirm Errors
  if (!values.passwordConfirm) {
    errors.passwordConfirm = "Required";
  }

  return errors;
}
