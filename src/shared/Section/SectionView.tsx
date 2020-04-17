import React from 'react';

import {
  Container,
  Inner,
  Title,
  Header,
  Divider,
} from './SectionStyle';

interface Props {
  backgroundType?: 'light' | 'dark';
  title: string;
  children: JSX.Element | string;
}

const Section: React.FC<Props> = (props: Props) => {
  const { title, children, backgroundType = 'light' } = props;

  return (
    <Container backgroundType={backgroundType}>
      <Header>
        <Divider/>
        <Title>{title}</Title>
        <Divider/>
      </Header>
      <Inner>
        {children}
      </Inner>
    </Container>
  );
};

export default Section;
