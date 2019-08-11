import React, { ComponentPropsWithoutRef } from "react";
import styled from "styled-components";
import colors from "../style/colors";
import { flexCenter } from "../style/helpers";

type Props = ComponentPropsWithoutRef<"div"> & {
  progress: number;
};

function ProgressBar({ progress, ...props }: Props) {
  return (
    <Container {...props}>
      <Progress progress={progress} />
      <Circle />
    </Container>
  );
}

export default ProgressBar;

const Container = styled.div`
  width: 100%;
  height: 10px;
  background: ${colors.white};
  border-radius: 20px;
  display: flex;
  align-items: center;
`;

const Progress = styled.div<{ progress: number }>`
  height: 10px;
  width: ${props => props.progress}%;
  background: ${colors.red};
  color: ${colors.white};
  border-radius: 20px;
  ${flexCenter};

  transition: 0.3s width;
`;

const Circle = styled.div`
  border: 2px solid ${colors.pink};
  border-radius: 50%;
  height: 15px;
  width: 15px;
  background: ${colors.red};
  margin-left: -7.5px;
`;
