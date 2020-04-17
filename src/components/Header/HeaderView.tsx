import React from 'react';
import Logo from '../Logo';

import {
  Container,
  Inner,
  Button,
  BarsIcon,
} from './HeaderStyle';

const Header: React.FC = () => {
 return (
   <Container>
    <Inner>
     <Logo/>
     <Button>
       <BarsIcon/>
     </Button>
    </Inner>
   </Container>
 );
};

export default Header;
