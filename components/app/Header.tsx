import React from "react";
import styled from "styled-components";
import Link from "next/link";

function Header() {
  return (
    <Container>
      <Inner>
        <Section>
          <Logo>Slaps</Logo>
        </Section>

        <Section>
          <Link href="/login">
            <Option>Log In/Sign Up</Option>
          </Link>
        </Section>
      </Inner>
    </Container>
  );
}

export default Header;

const Container = styled.header`
  background: ${props => props.theme.colors.secondary};
  color: ${props => props.theme.colors.secondaryText};
`;

const Inner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;
  max-width: ${props => props.theme.layout.maxWidth}px;
`;

const Section = styled.div`
  display: flex;
`;

const Option = styled.button`
  font-size: 1rem;
  padding: 1.5rem 0;
`;

const Logo = styled.button`
  font-size: 2rem;
`;
