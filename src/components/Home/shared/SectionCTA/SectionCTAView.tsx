import { Title } from '@shared/Typography';
import * as React from 'react';
import { ButtonsWrapper, Container, Divider, Wrapper } from './SectionCTAStyle';

interface Props {
  title: React.ReactNode;
  buttons: React.ReactNode;
}

const SectionCTA: React.FC<Props> = ({ title, buttons }) => (
  <Wrapper>
    <Container>
      <Divider />
      <Title>{title}</Title>
      <ButtonsWrapper>{buttons}</ButtonsWrapper>
    </Container>
  </Wrapper>
);

export default SectionCTA;
