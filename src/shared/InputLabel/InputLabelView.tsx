import React, { CSSProperties } from "react";
import { Container, Title } from "./InputLabelStyle";

interface Props {
  title: React.ReactNode;
  children: React.ReactNode;
  preventDefault?: boolean;
  as?: any;
  style?: CSSProperties;
}

const InputLabel: React.FC<Props> = ({
  title,
  children,
  preventDefault = true,
  as,
  style
}) => (
  <Container
    as={as}
    style={style}
    onClick={preventDefault ? (e) => e.preventDefault() : undefined}
  >
    <Title>{title}</Title>
    {children}
  </Container>
);

export default InputLabel;
