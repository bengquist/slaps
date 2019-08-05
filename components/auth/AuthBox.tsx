import React from "react";
import styled from "styled-components";
import colors, { Colors } from "../style/colors";

type Props = {
  title: string;
};

function AuthBox({ title }: Props) {
  return (
    <Container>
      <p>{title}</p>
      <Panel>
        <Button background="facebook">FACEBOOK</Button>
        <Button background="soundcloud">SOUNDCLOUD</Button>
        <Button background="twitter">TWITTER</Button>
        <Button background="google">GOOGLE</Button>
      </Panel>
    </Container>
  );
}

export default AuthBox;

const Container = styled.div`
  width: 100%;
  max-width: 450px;
  background: ${colors.white};
  text-align: center;
  color: ${colors.darkGray};
  padding: 1rem 2rem 2rem 2rem;
  border-radius: 0.25rem;

  display: grid;
  grid-gap: 1rem;
`;

const Panel = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  grid-gap: 0.5rem;
`;

const Button = styled.button<{ background: Colors }>`
  background: ${props => colors[props.background || "red"]};
  color: ${colors.white};
  padding: 0.75rem;
  border-radius: 0.25rem;
`;
