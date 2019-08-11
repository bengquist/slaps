import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import Router from "next/router";
import NProgress from "nprogress";
import colors from "../style/colors";
import redirect from "../../lib/redirect";
import Cookie from "cookie";
import { useApolloClient } from "@apollo/react-hooks";
import checkLoggedIn from "../../lib/checkLoggedIn";

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
  const [isAuthed, setIsAuthed] = useState(false);
  const client = useApolloClient();

  useEffect(() => {
    const getUser = async () => {
      const user = await checkLoggedIn(client);

      console.log(user);
      setIsAuthed(true);
    };

    getUser();
  }, []);

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
          {isAuthed ? (
            <button onClick={signout}>Sign Out</button>
          ) : (
            <>
              <Link href="/signin">
                <Option>Log In</Option>
              </Link>
              <Link href="/signup">
                <Option>Sign Up</Option>
              </Link>{" "}
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
