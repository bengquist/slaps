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
  }

  // Email Errors
  if (!values.email) {
    errors.email = "Required";
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
