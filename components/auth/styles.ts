import { flexColumnCenter } from "../style/helpers";
import styled from "styled-components";
import colors from "../style/colors";

export const Container = styled.div`
  background: ${props => props.theme.gradient.dark};
  height: 100vh;
  ${flexColumnCenter};
  padding: 1rem;
`;

export const Panel = styled.div`
  width: 100%;
  color: ${colors.white};

  display: grid;
  grid-gap: 1rem;
  justify-items: center;
`;

export const Title = styled.h1`
  color: ${colors.white};
  font-size: 2rem;
`;

export const Form = styled.form`
  background: ${colors.white};
  width: 100%;
  max-width: 450px;
  padding: 2rem;
  border-radius: 0.25rem;

  display: grid;
  grid-gap: 2rem;
`;

export const FormBody = styled.div`
  display: grid;
  grid-gap: 1.25rem;
`;

export const Label = styled.label`
  display: grid;
  grid-gap: 0.25rem;
  color: ${colors.darkGray};
  font-size: 0.75rem;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid ${colors.darkGray};
  border-radius: 0.25rem;
`;

export const Button = styled.button`
  background: ${colors.red};
  color: ${colors.white};
  padding: 0.75rem;
  border-radius: 0.25rem;
`;
