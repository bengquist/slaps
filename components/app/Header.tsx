import React from "react";
import styled from "styled-components";
import Link from "next/link";
import Router from "next/router";
import NProgress from "nprogress";
import colors from "../style/colors";
import redirect from "../../lib/redirect";
import Cookie from "cookie";
import { useApolloClient } from "react-apollo-hooks";

Router.onRouteChangeStart = () => {
  NProgress.start();
};
Router.onRouteChangeComplete = () => {
  NProgress.done();
};

Router.onRouteChangeError = () => {
  NProgress.done();
};

function Header() {
  const client = useApolloClient();

  const signout = () => {
    document.cookie = Cookie.serialize("token", "", {
      maxAge: -1 // Expire the cookie immediately
    });

    // Force a reload of all the current queries now that the user is
    // logged in, so we don't accidentally leave any state around.
    client.cache.reset().then(() => {
      // Redirect to a more useful page when signed out
      redirect({}, "/login");
    });
  };

  return (
    <Container>
      <Inner>
        <Section>
          <Link href="/">
            <Logo>Slaps</Logo>
          </Link>
        </Section>

        <Section>
          <>
            <Link href="/login">
              <Option>Log In</Option>
            </Link>
            <Link href="/signup">
              <Option>Sign Up</Option>
            </Link>{" "}
          </>

          <button onClick={signout}>Sign Out</button>
        </Section>
      </Inner>
    </Container>
  );
}

export default Header;

const Container = styled.header`
  background: ${colors.darkGray};
  color: ${colors.white};
`;

const Inner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  margin: auto;
  max-width: ${props => props.theme.layout.maxWidth}px;
`;

const Section = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;
`;

const Option = styled.button`
  font-size: 1rem;
  padding: 1.5rem 0;
`;

const Logo = styled.button`
  font-size: 2rem;
  padding: 0;
`;
