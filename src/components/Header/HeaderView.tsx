import React from 'react';
import Logo from '../Logo';

import {
  Container,
  Inner,
  BarsIcon,
} from './HeaderStyle';
import Menu from './Menu';
import { BareButtonStyle } from '../../shared/Button';

const Header: React.FC = () => {
  const [showMenu, setShowMenu] = React.useState<boolean>(false);

  const handleButtonClick = () => (
    setShowMenu(!showMenu)
  );

  return (
    <Container>
      <Inner>
        <Logo/>
        <BareButtonStyle onClick={handleButtonClick}>
          <BarsIcon/>
        </BareButtonStyle>
      </Inner>
      <Menu
        show={showMenu}
        onClose={handleButtonClick}
      />
    </Container>
  );
};

export default Header;
