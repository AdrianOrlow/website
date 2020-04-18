import React from 'react';

import { Spinner } from '../Loading';
import { Colors } from '../../constants';

type HTMLButtonProps = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

interface Props extends HTMLButtonProps {
  backgroundType?: 'contained' | 'outlined';
  size?: 'big' | 'small';
  color?: 'dark' | 'light';
  loading?: boolean;
}

import { Container } from './ButtonStyle';

const Button: React.FC<Props> = (props: Props) => {
  const {
    backgroundType = 'big',
    size = 'contained',
    color = 'dark',
    loading = false,
    children,
  } = props;

  const spinnerColor = color == 'dark' ? Colors.fog : Colors.blueGreyish;
  const loadingSpinner = <Spinner color={spinnerColor} />;

  const data = {
    ...props,
    type: backgroundType,
    size,
    color,
    children: loading ? loadingSpinner : children,
  };

  return (
    <Container {...data}/>
  );
};

export default Button;
