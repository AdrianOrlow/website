import React from 'react';

import { Container } from './FooterStyle';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Container>
      Copyright &copy; {currentYear} Adrian Orłów
    </Container>
  )
};

export default Footer;
