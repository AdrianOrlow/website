import React from 'react';
import { ProjectType } from '../../../types';
import Link  from 'next/link';
import { CSSTransition } from 'react-transition-group';

import {
  Overlay,
  Container,
  Header,
  TimesIcon,
  Inner,
  Title,
  Description,
  SectionWrapper,
  SectionTitle,
  TechnologiesList,
  LicenseTitle,
  Actions,
} from './ProjectModalStyle';
import ProjectLogo from '../ProjectLogo';
import Tag from '../../../shared/Tag';
import { ButtonStyle, BareButtonStyle } from '../../../shared/Button';

interface Props {
  project: ProjectType;
  show: boolean;
  onClose(): void;
}

const ProjectModal: React.FC<Props> = (props: Props) => {
  const { project, onClose, show } = props;
  const {
    backgroundColor,
    title,
    description,
    license,
    technologies,
    links,
  } = project;
  const { source, demo } = links;

  const technologiesList = technologies.map(technology => (
    <Tag>{technology.title}</Tag>
  ));

  const handleOverlayClick = (event) => {
    event.preventDefault();
    if (event.target === event.currentTarget) {
      onClose()
    }
  };

  return (
    <CSSTransition
      in={show}
      timeout={200}
      classNames="fade"
      unmountOnExit
    >
      <Overlay onClick={handleOverlayClick}>
        <Container>
          <Header style={{ backgroundColor }}>
            <ProjectLogo
              project={project}
              withBackground={false}
            />
            <BareButtonStyle onClick={onClose}>
              <TimesIcon/>
            </BareButtonStyle>
          </Header>
          <Inner>
            <div>
              <Title>{title}</Title>
              <Description>{description}</Description>
            </div>
            <SectionWrapper>
              <SectionTitle>Technologies:</SectionTitle>
              <TechnologiesList>
                {technologiesList}
              </TechnologiesList>
            </SectionWrapper>
            <SectionWrapper>
              <SectionTitle>
                License:&nbsp;
                <LicenseTitle>{license}</LicenseTitle>
              </SectionTitle>
            </SectionWrapper>
            {source || demo && (
              <Actions>
                {source && (
                  <ButtonStyle
                    as={Link}
                    to={source}
                    target="_blank"
                    size="small"
                  >

                  </ButtonStyle>
                )}
                {demo && (
                  <ButtonStyle
                    as={Link}
                    to={demo}
                    target="_blank"
                    size="small"
                  >
                    demo
                  </ButtonStyle>
                )}
              </Actions>
            )}
          </Inner>
        </Container>
      </Overlay>
    </CSSTransition>
  );
};

export default ProjectModal;
