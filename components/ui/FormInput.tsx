import React, { ComponentPropsWithoutRef } from "react";
import styled from "styled-components";
import { flexCenter } from "../style/helpers";

type Props = ComponentPropsWithoutRef<"input"> & {
  error?: string;
};

function FormInput({ error, ...props }: Props) {
  console.log(error);

  return (
    <Container>
      <Input {...props} />

      {error && (
        <ErrorContainer>
          <ErrorMessage>{error}</ErrorMessage>
        </ErrorContainer>
      )}
    </Container>
  );
}

export default FormInput;

const Container = styled.div`
  font-size: 12px;
  width: 100%;
  position: relative;
`;

const Input = styled.input`
  font-size: 12px;
  width: 100%;
  border: none;
  border-bottom: 1px solid ${props => props.theme.colors.darkGray};
  padding: 0.5rem;
  transition: 0.2s;
  :focus {
    outline: none;
    border-bottom: 1px solid ${props => props.theme.colors.accent};
    box-shadow: 0 2px 1px -1px ${props => props.theme.colors.accent};
  }
`;

const ErrorContainer = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  padding-right: 0.5rem;
  ${flexCenter};
`;

const ErrorMessage = styled.p`
  font-size: 0.75rem;
  color: red;
`;
