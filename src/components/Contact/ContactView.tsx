import React from 'react';
import Section from '../../shared/Section';
import { Sections } from '../../constants';

import SocialLink from './SocialLink';
import { socialLinks } from '../../data';
import {
  Container,
  SocialLinks,
  SocialLinksWrapper,
} from './ContactStyle';
import Form from './Form';

const Contact: React.FC = () => {
  const socialElements = socialLinks.map(link => (
    <SocialLink key={link.url} data={link}/>
  ));

  return (
    <Section type={Sections.Contact}>
      <Container>
        <SocialLinksWrapper>
          <SocialLinks>{socialElements}</SocialLinks>
        </SocialLinksWrapper>
        <Form/>
      </Container>
    </Section>
  );
};

export default Contact;
