import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <Container>
      <Section>
        <Option>Slaps</Option>
      </Section>

      <Section>
        <Option>Log In/Sign Up</Option>
      </Section>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  background: ${props => props.theme.colors.secondary};
  color: ${props => props.theme.colors.secondaryText};
`;

const Section = styled.div``;

const Option = styled.button`
  padding: 1.5rem;
`;
