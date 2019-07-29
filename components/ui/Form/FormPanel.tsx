import styled from "styled-components";

export default styled.form`
  display: grid;
  grid-gap: 1.5rem;
  background: ${props => props.theme.colors.gray};
  width: 100%;
  max-width: 500px;
  padding: 1.5rem;
`;
