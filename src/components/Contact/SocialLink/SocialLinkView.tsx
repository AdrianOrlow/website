import React from 'react';
import { SocialLinkType } from '../../../types';

import {
  Container,
  Icon,
  Title,
} from './SocialLinkStyle';

interface Props {
  data: SocialLinkType;
}

const SocialLink: React.FC<Props> = ({ data }: Props) => {
  const { title, icon, url } = data;

  return (
    <Container
      href={url}
      target="blank"
    >
      <Icon>{icon}</Icon>
      <Title>{title}</Title>
    </Container>
  );
};

export default SocialLink;
