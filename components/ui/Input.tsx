import React, { ComponentPropsWithRef } from "react";
import colors from "../style/colors";
import { css } from "styled-components";

const inputStyle = css`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid ${colors.darkGray};
  border-radius: 0.25rem;
`;

function Input(props: ComponentPropsWithRef<"input">) {
  return <input css={inputStyle} {...props} />;
}

export default Input;
