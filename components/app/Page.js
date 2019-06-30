import React from "react";
import styled from "styled-components";
import Header from "./Header";
import Meta from "./Meta";

const Page = props => {
  console.log(props);

  return (
    <Container>
      <Meta />
      <Header />
      <Body>{props.children}</Body>
    </Container>
  );
};

export default Page;

const Container = styled.body``;

const Body = styled.div`
  margin: auto;
  max-width: ${props => props.theme.layout.maxWidth}px;
`;
