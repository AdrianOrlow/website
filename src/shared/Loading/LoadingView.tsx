import React, { CSSProperties } from "react";
import { useTheme } from "styled-components";
import { Container, Spinner as SpinnerIcon } from "./LoadingStyle";

interface Props {
  thickness?: number;
  gap?: number;
  color?: string;
  style?: CSSProperties;
}

const Spinner: React.FC<Props> = ({ thickness = 4, gap = 4, color, style }) => {
  const theme = useTheme();
  const defaultColor = theme.colors.gray;

  return (
    <SpinnerIcon
      role="img"
      viewBox="0 0 32 32"
      className="spinner"
      style={style}
    >
      <circle
        role="presentation"
        cx={16}
        cy={16}
        r={14 - thickness / 2}
        stroke={color || defaultColor}
        fill="none"
        strokeWidth={thickness}
        strokeDasharray={Math.PI * 2 * (11 - gap)}
        strokeLinecap="round"
      />
    </SpinnerIcon>
  );
};

const Loading: React.FC<Props> = ({ thickness = 4, gap = 4, color, style }) => (
  <Container style={style}>
    <Spinner thickness={thickness} gap={gap} color={color} />
  </Container>
);

export { Spinner };
export default Loading;
