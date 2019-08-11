import React, { ComponentPropsWithoutRef } from "react";
import styled from "styled-components";
import Input from "../../ui/Input";
import { flexCenter } from "../../style/helpers";
import colors from "../../style/colors";

type Props = ComponentPropsWithoutRef<"input"> & {
  error?: string;
};

function AuthInput({ error, ...props }: Props) {
  return (
    <Container>
      <Input
        style={{ borderColor: error ? colors.dangerRed : colors.darkGray }}
        {...props}
      />
      {error && (
        <ErrorContainer>
          <p>{error}</p>
        </ErrorContainer>
      )}
    </Container>
  );
}

export default AuthInput;

const Container = styled.div`
  position: relative;
`;

const ErrorContainer = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;

  ${flexCenter};
  padding-right: 0.5rem;
  color: ${colors.dangerRed};
`;
