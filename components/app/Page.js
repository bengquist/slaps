import React from "react";
import styled from "styled-components";
import Header from "./Header";
import Meta from "./Meta";

const Page = props => {
  return (
    <Container>
      <Meta />
      <Header />
      <Body>{props.children}</Body>
    </Container>
  );
};

export default Page;

const Container = styled.div``;

const Body = styled.div`
  height: 100vh;
  margin: auto;
  max-width: ${props => props.theme.layout.maxWidth}px;

  > * {
    height: 100%;
  }
`;
