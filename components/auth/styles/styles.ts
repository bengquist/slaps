import colors from "../../style/colors";
import { flexColumnCenter } from "../../style/helpers";
import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled.div`
  background: ${props => props.theme.gradient && props.theme.gradient.dark};
  min-height: 100vh;
  ${flexColumnCenter};
  padding: 1rem;
`;

export const Panel = styled(motion.div)`
  width: 100%;
  color: ${colors.white};
  max-width: 400px;

  display: grid;
  grid-gap: 1.25rem;
  justify-items: center;
`;

export const TitleContainer = styled.div`
  position: relative;
`;

export const Title = styled.h1`
  color: ${colors.darkGray};
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
`;

export const BackButton = styled.button`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;

  color: ${colors.orange};
  transition: 0.2s opacity;

  :hover,
  :focus {
    opacity: 0.8;
  }
`;

export const Form = styled.form`
  background: ${colors.white};
  width: 100%;
  padding: 2rem 1.5rem;
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
  font-weight: bold;
`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid ${colors.darkGray};
  border-radius: 0.25rem;
  resize: none;
`;

export const Button = styled.button`
  background: ${colors.orange};
  color: ${colors.white};
  width: 100%;
  padding: 0.75rem;
  border-radius: 0.25rem;
  font-weight: bold;
  transition: 0.2s opacity;

  :hover,
  :focus {
    opacity: 0.8;
  }
`;

export const ErrorMessage = styled.p`
  color: ${colors.dangerRed};
  font-size: 0.8rem;
  text-align: center;
`;
