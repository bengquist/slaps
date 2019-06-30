import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <Container>
      <button>Log In/Sign Up</button>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  background: ${props => props.theme.colors.secondary};
  color: ${props => props.theme.colors.secondaryText};
`;
