import { library } from '@fortawesome/fontawesome-svg-core';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react';
import { DefaultTheme } from 'styled-components';
import { Container, Line, Wrapper } from './CTALinkStyle';

library.add(faChevronRight);

interface Props {
  children: React.ReactNode;
  color: keyof DefaultTheme['colors'];
  active: boolean;
  href?: string;
  as?: 'a' | 'div';
}

const CTALink: React.FC<Props> = ({ children, color, active, as, href }) => {
  return (
    <Wrapper href={href} color={color} as={as}>
      <Container>
        <span>{children}</span>
        <FontAwesomeIcon icon={faChevronRight} />
      </Container>
      <Line widthPercent={active ? 100 : 0} />
    </Wrapper>
  );
};

export default CTALink;
