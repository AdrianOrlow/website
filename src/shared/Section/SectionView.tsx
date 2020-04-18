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
  showHeader?: boolean;
  className?: string;
  type: SectionRouteType;
  children: JSX.Element | JSX.Element[] | string;
}

const Section: React.FC<Props> = (props: Props) => {
  const {
    type,
    children,
    className,
    backgroundType = 'light',
    showHeader = true,
  } = props;

  const { title, hashKey } = type;

  return (
    <Container
      name={hashKey}
      className={className}
      backgroundType={backgroundType}
    >
      <Inner>
        {showHeader && (
          <Header>
            <Divider/>
            <Title>{title}</Title>
            <Divider/>
          </Header>
        )}
        <Content>
          {children}
        </Content>
      </Inner>
    </Container>
  );
};

export default Section;
