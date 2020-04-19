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

interface Props {
  project: ProjectType;
}

const ProjectCard: React.FC<Props> = ({ project }: Props) => {
  const {
    id,
    title,
    description,
    technologies,
  } = project;

  const highPriorityTechnologies = technologies.filter(technology => technology.highPriority);
  const technologiesList = highPriorityTechnologies.map(technology => (
    <Tag>{technology.title}</Tag>
  ));

  return (
    <Container>
      <ProjectLogo project={project}/>
      <Inner>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <TechnologiesList>
          {technologiesList}
        </TechnologiesList>
      </Inner>
    </Container>
  );
};

export default ProjectCard;
