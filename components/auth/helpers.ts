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
