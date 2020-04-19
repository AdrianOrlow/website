import React from 'react';
import { ProjectType } from '../../../types';

import ProjectLogo from '../ProjectLogo';
import {
  Container,
  Inner,
  Title,
  Description,
  TechnologiesList,
} from './ProjectCardStyle';
import Tag from '../../../shared/Tag';
import ProjectModal from '../Modal';

interface Props {
  project: ProjectType;
}

const ProjectCard: React.FC<Props> = ({ project }: Props) => {
  const {
    title,
    description,
    technologies,
  } = project;

  const highPriorityTechnologies = technologies.filter(technology => technology.showOnCard);
  const technologiesList = highPriorityTechnologies.map(technology => (
    <Tag key={technology.title}>{technology.title}</Tag>
  ));

  const [showModal, setShowModal] = React.useState<boolean>(false);
  const toggleModal = () => (
    setShowModal(!showModal)
  );

  return (
    <>
      <Container onClick={toggleModal}>
        <ProjectLogo project={project}/>
        <Inner>
          <Title>{title}</Title>
          <Description>{description}</Description>
          <TechnologiesList>
            {technologiesList}
          </TechnologiesList>
        </Inner>
      </Container>
      <ProjectModal
        project={project}
        onClose={toggleModal}
        show={showModal}
      />
    </>
  );
};

export default ProjectCard;
