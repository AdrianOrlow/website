import React from 'react';
import { SocialLinkType } from '../../../types';

import { Container } from './SocialLinkStyle';

interface Props {
  data: SocialLinkType;
}

const SocialLink: React.FC<Props> = ({ data }: Props) => {
  const { title, icon, url } = data;

  return (
    <Container
      as="a"
      href={url}
      children={icon}
    />
  );
};

export default SocialLink;
