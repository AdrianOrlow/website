import React from 'react';
import { scroller } from 'react-scroll';

import { Sections } from '../../constants';
import Header from '../Header';
import Button, { ButtonStyle } from '../../shared/Button';

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
  const scroll = () => scroller.scrollTo('projects', {
    duration: 1000,
    smooth: true,
  });

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
            <Logo/>
            <Text>
              <Title>Adrian Orłów</Title>
              <Subtitle>Web Developer</Subtitle>
            </Text>
          </TitleWrapper>
          <Actions>
            <Button
              onClick={scroll}
            >
              Projects
            </Button>
            <ButtonStyle
              as="a"
              href="/cv.pdf"
              type="outlined"
            >
              My CV
            </ButtonStyle>
          </Actions>
        </Inner>
      </Wrapper>
    </Container>
  );
};

export default Hero;
