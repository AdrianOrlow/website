import React from 'react';
import Section from '../../shared/Section';
import { Sections } from '../../constants';

import SocialLink from './SocialLink';
import { socialLinks } from '../../data';
import {
  Container,
  SocialLinks
} from './ContactStyle';
import Form from './Form';

const Contact: React.FC = () => {
  const socialElements = socialLinks.map(link => (
    <SocialLink data={link}/>
  ));

  return (
    <Section type={Sections.Contact}>
      <Container>
        <SocialLinks>{socialElements}</SocialLinks>
        <Form/>
      </Container>
    </Section>
  );
};

export default Contact;
