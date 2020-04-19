import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import { ProjectFilter, ProjectsFilterChange, ProjectType } from '../../types';
import { Sections } from '../../constants';
import Section from '../../shared/Section';
import Filters from './ProjectsFilters';
import {
  Container,
  List,
  ButtonWrapper
} from './ProjectsStyle';
import ProjectCard from './ProjectCard';
import Button, { ButtonStyle } from '../../shared/Button';

interface Props {
  onFilterChange: ProjectsFilterChange;
  selectedFilter: ProjectFilter;
  onLoadMore(): void;
  projects: ProjectType[];
  finished: boolean;
}

const Projects: React.FC<Props> = (props: Props) => {
  const {
    onFilterChange,
    onLoadMore,
    projects,
    selectedFilter,
    finished,
  } = props;

  const projectsList = projects.map(project => (
    <CSSTransition
      key={project.id}
      timeout={200}
      classNames="item"
    >
      <ProjectCard key={project.id} project={project}/>
    </CSSTransition>
  ));

  return (
    <Section type={Sections.Projects}>
      <Container>
        <Filters
          selectedFilter={selectedFilter}
          onChange={onFilterChange}
        />
        <List>
          {projectsList}
        </List>
        <ButtonWrapper>
          {!finished && (
            <Button onClick={onLoadMore}>
              Load more
            </Button>
          )}
          {finished && (
            <ButtonStyle
              as="a"
              href="https://l.orlow.me/github"
              target="_blank"
              size="small"
            >
              More on my GitHub!
            </ButtonStyle>
          )}
        </ButtonWrapper>
      </Container>
    </Section>
  );
};

export default Projects;
