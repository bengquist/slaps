import React from "react";
import styled from "styled-components";
import { flexColumnCenter } from "../style/helpers";
import colors from "../style/colors";
import AuthBox from "./AuthBox";

function Login() {
  return (
    <Container>
      <Panel>
        <Title>LOG IN</Title>
        <Form>
          <FormBody>
            <Label>
              <p>Email or Username</p>
              <Input type="text" />
            </Label>
            <Label>
              <p>Password</p>
              <Input style={{ fontSize: "1.125rem" }} type="password" />
            </Label>
          </FormBody>

          <Button type="submit">LOG IN</Button>
        </Form>
        <p>OR</p>
        <AuthBox />
      </Panel>
    </Container>
  );
}

export default Login;

const Container = styled.div`
  background: ${props => props.theme.gradient.dark};
  height: 100vh;
  ${flexColumnCenter};
  padding: 1rem;
`;

const Panel = styled.div`
  width: 100%;
  color: ${colors.white};

  display: grid;
  grid-gap: 1rem;
  justify-items: center;
`;

const Title = styled.h1`
  color: ${colors.white};
  font-size: 2rem;
`;

const Form = styled.form`
  background: ${colors.white};
  width: 100%;
  max-width: 450px;
  padding: 2rem;
  border-radius: 0.25rem;

  display: grid;
  grid-gap: 2rem;
`;

const FormBody = styled.div`
  display: grid;
  grid-gap: 1.25rem;
`;

const Label = styled.label`
  display: grid;
  grid-gap: 0.25rem;
  color: ${colors.darkGray};
  font-size: 0.75rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid ${colors.darkGray};
  border-radius: 0.25rem;
`;

const Button = styled.button`
  background: ${colors.red};
  color: ${colors.white};
  padding: 0.75rem;
  border-radius: 0.25rem;
`;
