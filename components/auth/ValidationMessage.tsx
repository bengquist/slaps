import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import colors from "../style/colors";
import styled from "styled-components";

type Props = {
  validated: boolean;
  message: string;
};

function ValidationMessage({ validated, message }: Props) {
  return (
    <Container color={validated ? colors.successGreen : colors.dangerRed}>
      <FontAwesomeIcon icon={validated ? faCheck : faTimes} /> {message}
    </Container>
  );
}

export default ValidationMessage;

const Container = styled.div<{ color: string }>`
  color: ${props => props.color};
`;
