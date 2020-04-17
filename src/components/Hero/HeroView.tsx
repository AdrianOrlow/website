import React from 'react';

import { Sections } from '../../constants';
import Header from '../Header';
import Button from '../../shared/Button';

import {
  Container,
  Inner,
  Wrapper,
  TitleWrapper,
  Logo,
  Text,
  Title,
  Subtitle,
  Actions,
} from './HeroStyle';

const Hero: React.FC = () => {
  return (
    <Container
      type={Sections.Hero}
      showHeader={false}
      backgroundType='dark'
    >
      <Header/>
      <Wrapper>
        <Inner>
          <TitleWrapper>
            <Logo showTitle={false}/>
            <Text>
              <Title>Adrian Orłów</Title>
              <Subtitle>Web Developer</Subtitle>
            </Text>
          </TitleWrapper>
          <Actions>
            <Button>
              Projects
            </Button>
            <Button backgroundType="outlined">
              My CV
            </Button>
          </Actions>
        </Inner>
      </Wrapper>
    </Container>
  );
};

export default Hero;
