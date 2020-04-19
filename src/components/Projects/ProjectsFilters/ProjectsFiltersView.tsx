import React from 'react';
import { ProjectFilter, ProjectsFilterChange } from '../../../types';

import { Container } from './ProjectsFiltersStyle';
import Button from '../../../shared/Button';

interface FiltersProps {
  selectedFilter: ProjectFilter;
  onChange: ProjectsFilterChange;
}

interface ElementProps extends FiltersProps {
  title: string;
  type: ProjectFilter;
}

const ProjectsFilters: React.FC<FiltersProps> = (props: FiltersProps) => {
  const { selectedFilter, onChange } = props;

  return (
    <Container>
      <Element
        title="All"
        type={ProjectFilter.All}
        selectedFilter={selectedFilter}
        onChange={onChange}
      />
      <Element
        title="Frontend"
        type={ProjectFilter.Frontend}
        selectedFilter={selectedFilter}
        onChange={onChange}
      />
      <Element
        title="Backend"
        type={ProjectFilter.Backend}
        selectedFilter={selectedFilter}
        onChange={onChange}
      />
    </Container>
  );
};

const Element: React.FC<ElementProps> = (props: ElementProps) => {
  const { title, type, selectedFilter, onChange } = props;

  const handleClick = () => onChange(type);
  const color = type === selectedFilter ? 'dark' : 'light';

  return (
    <Button
      onClick={handleClick}
      color={color}
    >
      {title}
    </Button>
  );
};

export default ProjectsFilters;
