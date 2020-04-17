import React from 'react';

interface Props {
  type?: 'contained' | 'outlined';
  size?: 'big' | 'small';
  children: JSX.Element | string;
}

import { Container } from './ButtonStyle';

const Button: React.FC<Props> = (props: Props) => {
  const {
    type = 'big',
    size = 'contained',
    children,
  } = props;

  return (
    <Container type={type} size={size}>
      {children}
    </Container>
  );
};

export default Button;
