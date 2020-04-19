import React from 'react';
import { CSSTransition } from 'react-transition-group';

import { Sections } from '../../../constants';
import {
  Container,
  Inner,
  Link,
  List,
  TimesIcon,
  Button,
  ListElement,
} from './MenuStyle';

interface Props {
  show: boolean;
  onClose(): void;
}

const Menu: React.FC<Props> = ({ show, onClose }: Props) => (
  <CSSTransition
    in={show}
    timeout={200}
    classNames="fade"
    unmountOnExit
  >
    <Container>
      <Inner>
        <Button onClick={onClose}>
          <TimesIcon/>
        </Button>
        <List>
          <ListElement>
            <Link
              to={Sections.Projects.hashKey}
              onClick={onClose}
              smooth
            >
              Projects
            </Link>
          </ListElement>
          <ListElement>
            <Link
              to={Sections.Skills.hashKey}
              onClick={onClose}
              smooth
            >
              Skills
            </Link>
          </ListElement>
          <ListElement>
            <Link
              to={Sections.Contact.hashKey}
              onClick={onClose}
              smooth
            >
              Contact
            </Link>
          </ListElement>
        </List>
      </Inner>
    </Container>
  </CSSTransition>
);

export default Menu;
