import React, { Component } from "react";
import styled, { ThemeProvider } from "styled-components";
import Header from "./Header";
import Meta from "./Meta";

class Page extends Component {
  render() {
    return (
      <Container>
        <Meta />
        <Header />
        <Body>{this.props.children}</Body>
      </Container>
    );
  }
}

export default Page;

const Container = styled.body``;

const Body = styled.div`
  margin: auto;
  max-width: ${props => props.theme.layout.maxWidth}px;
`;
