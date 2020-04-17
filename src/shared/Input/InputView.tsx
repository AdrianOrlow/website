import React from 'react';

import { Container } from './InputStyle';

type Props = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

const Input: React.FC<Props> = ({ ...props }: Props) => (
  <Container {...props}/>
);

export default Input;
