import React, { MouseEventHandler } from 'react';

type HTMLButtonProps = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

interface Props extends HTMLButtonProps {
  backgroundType?: 'contained' | 'outlined';
  size?: 'big' | 'small';
  color?: 'dark' | 'light';
}

import { Container } from './ButtonStyle';

const Button: React.FC<Props> = (props: Props) => {
  const {
    backgroundType = 'big',
    size = 'contained',
    color = 'dark',
  } = props;

  const data = {
    ...props,
    type: backgroundType,
    size,
    color,
  };

  return (
    <Container {...data}/>
  );
};

export default Button;
