import React from 'react';
import { ProjectType } from '../../../types';
import { CSSTransition } from 'react-transition-group';

import {
  Overlay,
  Container,
  Header,
  TimesIcon,
  Inner,
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
import { Colors } from '../../../constants';

interface Props {
  project: ProjectType;
  show: boolean;
  onClose(): void;
}

const ProjectModal: React.FC<Props> = (props: Props) => {
  const { project, onClose, show } = props;
  const {
    description,
    license,
    technologies,
    links,
    backgroundColor = Colors.blueGreyish,
    textColor = Colors.fog,
  } = project;
  const { source, demo } = links;

  const technologiesList = technologies.map(technology => (
    <Tag key={technology.title}>{technology.title}</Tag>
  ));

  const handleOverlayClick = (event) => (
    event.target === event.currentTarget && onClose()
  );

  return (
    <CSSTransition
      in={show}
      timeout={200}
      classNames="fade"
      unmountOnExit
    >
      <Overlay onClick={handleOverlayClick}>
        <Container>
          <Header style={{ background: backgroundColor }}>
            <ProjectLogo
              project={project}
              withBackground={false}
            />
            <BareButtonStyle onClick={onClose}>
              <TimesIcon style={{ fill: textColor }} />
            </BareButtonStyle>
          </Header>
          <Inner>
            <SectionWrapper>
              <Description>{description}</Description>
            </SectionWrapper>
            <SectionWrapper>
              <SectionTitle>Technologies:</SectionTitle>
              <TechnologiesList>
                {technologiesList}
              </TechnologiesList>
            </SectionWrapper>
            <SectionWrapper>
              <SectionTitle>
                License:
              </SectionTitle>
              <LicenseTitle>{license}</LicenseTitle>
            </SectionWrapper>
            <SectionWrapper>
              <Actions>
                {source && (
                  <ButtonStyle
                    as="a"
                    href={source}
                    target="_blank"
                    size="small"
                  >
                    source
                  </ButtonStyle>
                )}
                {demo && (
                  <ButtonStyle
                    as="a"
                    href={demo}
                    target="_blank"
                    size="small"
                  >
                    demo
                  </ButtonStyle>
                )}
              </Actions>
            </SectionWrapper>
          </Inner>
        </Container>
      </Overlay>
    </CSSTransition>
  );
};

export default ProjectModal;
