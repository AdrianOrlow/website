import { library } from '@fortawesome/fontawesome-svg-core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { CSSTransition } from 'react-transition-group';
import {
  Container,
  Header,
  HeaderButton,
  IconWrapper,
  Inner,
  Overlay,
  TitleHeader,
} from './ModalStyle';

library.add(faTimes);

interface Props {
  header: {
    title: React.ReactNode;
    color: string;
  };
  children: React.ReactNode;
  show: boolean;
  onClose?(): void;
  disableOverlayClick?: boolean;
}

const ProjectModal: React.FC<Props> = ({
  children,
  header,
  onClose,
  show,
  disableOverlayClick,
}) => {
  const handleOverlayClick = (event) =>
    event.target === event.currentTarget && onClose();

  return (
    <CSSTransition in={show} timeout={200} classNames="fade" unmountOnExit>
      <Overlay onClick={disableOverlayClick ? () => null : handleOverlayClick}>
        <Container>
          <Header background={header.color}>
            <TitleHeader>{header.title}</TitleHeader>
            {onClose && (
              <HeaderButton onClick={onClose}>
                <IconWrapper>
                  <FontAwesomeIcon icon={faTimes} />
                </IconWrapper>
              </HeaderButton>
            )}
          </Header>
          <Inner>{children}</Inner>
        </Container>
      </Overlay>
    </CSSTransition>
  );
};

export default ProjectModal;
