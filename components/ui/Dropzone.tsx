import React, { useRef, useState, FormEvent } from "react";
import styled from "styled-components";
import colors from "../style/colors";

type ButtonEvent = FormEvent<HTMLButtonElement> & {
  dataTransfer: DataTransfer;
};

type Props = {
  onFileAdded: (file: File) => void;
};

function Dropzone({ onFileAdded }: Props) {
  const [isHovered, setIsHovered] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  function onDrop(event: ButtonEvent) {
    event.preventDefault();
    event.stopPropagation();

    const { files } = event.dataTransfer;

    if (files) {
      onFileAdded(files[0]);
    }

    setIsHovered(false);
  }

  function onDragOver(event: FormEvent<HTMLButtonElement>) {
    stopEvent(event);
    setIsHovered(true);
  }

  function onDragLeave(event: FormEvent<HTMLButtonElement>) {
    stopEvent(event);
    setIsHovered(false);
  }

  function stopEvent(event: FormEvent<HTMLButtonElement>) {
    event.preventDefault();
    event.stopPropagation();
  }

  function changeHandler(event: FormEvent<HTMLInputElement>) {
    const { files } = event.currentTarget;

    if (files) {
      onFileAdded(files[0]);
    }
  }

  function openFileDialog() {
    if (inputRef.current) {
      inputRef.current.click();
    }
  }

  return (
    <Container
      type="button"
      onClick={openFileDialog}
      onDrop={onDrop}
      onDragOver={onDragOver}
      onDragLeave={onDragLeave}
      hovered={isHovered}
    >
      <input type="file" ref={inputRef} onChange={changeHandler} />
      <div className="drag-files">Drag file to upload</div>
    </Container>
  );
}

export default Dropzone;

const Container = styled.button<{ hovered: boolean }>`
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
  transition: transform 0.3s;

  transform: ${props => (props.hovered ? "scale(0.95)" : "scale(1)")};

  :hover {
    cursor: pointer;
  }

  > input {
    display: none;
  }
`;
