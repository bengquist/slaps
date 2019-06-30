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
        {this.props.children}
      </Container>
    );
  }
}

export default Page;

const Container = styled.div``;
