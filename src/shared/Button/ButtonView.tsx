import React, { MouseEventHandler } from 'react';

interface Props {
  type?: 'contained' | 'outlined';
  size?: 'big' | 'small';
  color?: 'dark' | 'light';
  children: JSX.Element | string;
  onClick?(e: MouseEventHandler<HTMLButtonElement>): void;
}

import { Container } from './ButtonStyle';

const Button: React.FC<Props> = (props: Props) => {
  const {
    type = 'big',
    size = 'contained',
    color = 'dark',
    onClick,
    children,
  } = props;

  return (
    <Container
      type={type}
      size={size}
      color={color}
      onClick={onClick}
      children={children}
    />
  );
};

export default Button;
