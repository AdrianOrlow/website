import React from 'react';

import Button from '../../shared/Button';

import {
  Container,
  Inner,
  Title,
  Subtitle,
  Actions,
} from './HeroStyle';

const Hero: React.FC = () => {
  return (
    <Container>
      <Inner>
        <Title>Adrian Orłów</Title>
        <Subtitle>Web Developer</Subtitle>
        <Actions>
          <Button>
            Projects
          </Button>
          <Button backgroundType="outlined">
            My CV
          </Button>
        </Actions>
      </Inner>
    </Container>
  );
};

export default Hero;
