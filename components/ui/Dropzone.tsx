import React, { useRef } from "react";
import styled from "styled-components";
import colors from "../style/colors";

function Dropzone() {
  const inputRef = useRef<HTMLInputElement>(null);

  function openFileDialog() {
    if (inputRef.current) {
      inputRef.current.click();
    }
  }

  return (
    <Container type="button" onClick={openFileDialog}>
      <input type="file" ref={inputRef} />
      <div className="drag-files">Drag files to upload</div>
    </Container>
  );
}

export default Dropzone;

const Container = styled.button`
  width: 100%;
  padding-top: 25%;
  padding-bottom: 25%;
  background-color: ${colors.shadedWhite};
  color: ${colors.lightGray};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.25rem;
  border: 1px solid ${colors.lightGray};
  will-change: transform;
  transition: transform 0.3s;

  :hover {
    cursor: pointer;
  }

  > input {
    display: none;
  }
`;
