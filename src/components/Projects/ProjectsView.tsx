import React from 'react';

import { ProjectsFilterChange } from '../../types';
import { Sections } from '../../constants';
import Section from '../../shared/Section';
import Filters from './ProjectsFilters';
import {
  Container,
  List
} from './ProjectsStyle';
import ProjectCard from './ProjectCard';
import { projects } from '../../data';

interface Props {
  onFilterChange: ProjectsFilterChange;
  loading: boolean;
}

const Projects: React.FC<Props> = (props: Props) => {
  const { onFilterChange, loading } = props;

  return (
    <Section type={Sections.Projects}>
      <Container>
        <Filters onChange={onFilterChange}/>
        <List>
          <ProjectCard project={projects[0]}/>
          <ProjectCard project={projects[0]}/>
          <ProjectCard project={projects[0]}/>
        </List>
      </Container>
    </Section>
  );
};

export default Projects;
