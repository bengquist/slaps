import React from "react";
import ValidationMessage from "./ValidationMessage";
import styled from "styled-components";

type Props = {
  password: string;
  passwordConfirm?: string;
};

export function validatePassword(password: string) {
  const checks = [
    { message: "Use at least 8 characters", valid: password.length >= 8 },
    { message: "Use one uppercase letter", valid: /[A-Z]/.test(password) },
    { message: "Use one lowercase letter", valid: /[a-z]/.test(password) },
    {
      message: "Use one special character (#?!@$%^&*-.)",
      valid: /[#?!@$%^&*\-\.]/.test(password)
    },
    { message: "Use at least one number", valid: /[0-9]/.test(password) }
  ];

  return {
    checks,
    valid: checks.every(check => check.valid)
  };
}

function PasswordValidation({ password, passwordConfirm }: Props) {
  const validation = validatePassword(password);

  return (
    <Container>
      {validation.checks.map(check => (
        <ValidationMessage validated={check.valid} message={check.message} />
      ))}
      {passwordConfirm !== undefined && (
        <ValidationMessage
          validated={Boolean(
            password && passwordConfirm && password === passwordConfirm
          )}
          message="Passwords match"
        />
      )}
    </Container>
  );
}

export default PasswordValidation;

const Container = styled.div`
  display: grid;
  font-size: 0.8rem;
`;
