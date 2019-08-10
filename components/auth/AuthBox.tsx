import React from "react";
import styled from "styled-components";
import colors, { Colors } from "../style/colors";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faSoundcloud,
  faTwitter,
  faGoogle
} from "@fortawesome/free-brands-svg-icons";

type Props = {
  title: string;
};

function AuthBox({ title }: Props) {
  return (
    <Container
      initial={{ scale: 0.5 }}
      animate={{ scale: 1 }}
      exit={{ scale: 0 }}
    >
      <p>{title}</p>
      <Panel>
        <Button background="facebook">
          <FontAwesomeIcon icon={faFacebookSquare} />
        </Button>
        <Button background="soundcloud">
          <FontAwesomeIcon icon={faSoundcloud} />
        </Button>
        <Button background="twitter">
          <FontAwesomeIcon icon={faTwitter} />
        </Button>
        <Button background="google">
          <FontAwesomeIcon icon={faGoogle} />
        </Button>
      </Panel>
    </Container>
  );
}

export default AuthBox;

const Container = styled(motion.div)`
  width: 100%;
  max-width: 450px;
  background: ${colors.white};
  text-align: center;
  color: ${colors.darkGray};
  padding: 1.5rem;
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
  padding: 0.25rem;
  border-radius: 0.25rem;
  font-size: 1.5rem;
`;
