import Header from "./Header";
import Meta from "./Meta";
import React from "react";
import Sidebar from "./Sidebar";
import styled from "styled-components";

const Page: React.FC = props => {
  return (
    <Container>
      <Meta />
      <Header />
      <Inner>
        <Sidebar />
        <Body>
          {props.children}
        </Body>
      </Inner>
    </Container>
  );
};

export default Page;

const Container = styled.div``;

const Inner = styled.div`
  height: 100%;
  margin: 1rem auto 0 auto;
  max-width: ${props => props.theme.layout.maxWidth}px;
  display: flex;
`;

const Body = styled.div`
  margin-left: 1rem;
  padding: 1rem;
`