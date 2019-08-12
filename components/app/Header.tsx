import React from "react";
import styled from "styled-components";
import Link from "next/link";
import Router from "next/router";
import NProgress from "nprogress";
import colors from "../style/colors";
import redirect from "../../lib/redirect";
import Cookie from "cookie";
import { useApolloClient, useQuery } from "@apollo/react-hooks";
import { GET_ME } from "../auth/query";

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
  const user = useQuery(GET_ME);

  const signout = async () => {
    document.cookie = Cookie.serialize("token", "", {
      maxAge: -1
    });

    await client.cache.reset();

    redirect({}, "/signin");
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
          {user.data.me ? (
            <button onClick={signout}>Sign Out</button>
          ) : (
            <>
              <Link href="/signin">
                <button>Log In</button>
              </Link>
              <Link href="/signup">
                <button>Sign Up</button>
              </Link>
            </>
          )}
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
  min-height: 4rem;
`;

const Section = styled.div`
  display: flex;
`;

const Logo = styled.button`
  font-size: 2rem;
  padding: 0;
`;
