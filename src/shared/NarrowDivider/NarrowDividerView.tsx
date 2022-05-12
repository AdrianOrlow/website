import * as React from 'react';
import { Container, Wrapper } from './NarrowDividerStyle';

const NarrowDivider: React.FC = () => {
  return (
    <Wrapper>
      <Container
        src={require('@assets/vectors/divider-narrow.svg')}
        alt="Divider"
      />
    </Wrapper>
  );
};

export default NarrowDivider;
