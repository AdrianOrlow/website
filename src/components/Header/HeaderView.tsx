import React from 'react';
import Logo from '../Logo';

import {
  Container,
  Inner,
  Button,
  BarsIcon,
} from './HeaderStyle';
import Menu from './Menu';

const Header: React.FC = () => {
  const [showMenu, setShowMenu] = React.useState<boolean>(false);

  const handleButtonClick = () => (
    setShowMenu(!showMenu)
  );

  return (
    <Container>
      <Inner>
        <Logo/>
        <Button onClick={handleButtonClick}>
          <BarsIcon/>
        </Button>
      </Inner>
      <Menu
        show={showMenu}
        onClose={handleButtonClick}
      />
    </Container>
  );
};

export default Header;
