import { useApolloClient, useQuery } from "@apollo/react-hooks";
import Cookie from "cookie";
import { GET_ME } from "../auth/query";
import Link from "next/link";
import NProgress from "nprogress";
import React from "react";
import Router from "next/router";
import colors from "../style/colors";
import redirect from "../../lib/redirect";
import styled from "styled-components";

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
          {user.data && user.data.me ? (
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
  padding: 0 2rem;
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
