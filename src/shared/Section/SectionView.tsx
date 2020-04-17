import React from 'react';

import { SectionRouteType } from '../../types';
import {
  Container,
  Inner,
  Content,
  Title,
  Header,
  Divider,
} from './SectionStyle';

interface Props {
  backgroundType?: 'light' | 'dark';
  type: SectionRouteType;
  children: JSX.Element | JSX.Element[] | string;
}

const Section: React.FC<Props> = (props: Props) => {
  const { type, children, backgroundType = 'light' } = props;

  const { title, hashKey } = type;

  return (
    <Container backgroundType={backgroundType} id={hashKey}>
      <Inner>
        <Header>
          <Divider/>
          <Title>{title}</Title>
          <Divider/>
        </Header>
        <Content>
          {children}
        </Content>
      </Inner>
    </Container>
  );
};

export default Section;
