import React from 'react';

import { Container } from './TagStyle';

interface Props {
  children: JSX.Element | string;
}

const Tag: React.FC<Props> = ({ children }: Props) => (
  <Container>
    {children}
  </Container>
);

export default Tag;
