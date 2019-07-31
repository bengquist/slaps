import React from "react";
import styled from "styled-components";
import colors from "../style/colors";

function AuthBox() {
  return (
    <Container>
      <Button type="submit">LOG IN</Button>
      <Button type="submit">LOG IN</Button>
      <Button type="submit">LOG IN</Button>
      <Button type="submit">LOG IN</Button>
    </Container>
  );
}

export default AuthBox;

const Container = styled.div`
  background: ${colors.white};
  width: 100%;
  max-width: 450px;
  padding: 2rem;

  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  grid-gap: 0.5rem;
`;

const Button = styled.button`
  background: ${colors.red};
  color: ${colors.white};
  padding: 0.75rem;
  border-radius: 0.25rem;
`;
