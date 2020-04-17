import React from 'react';
import { ProjectsFilter, ProjectsFilterChange } from '../../../types';

import { Container } from './FiltersStyle';
import Button from '../../../shared/Button';

interface FiltersProps {
  selectedFilter: ProjectsFilter;
  onChange: ProjectsFilterChange;
}

interface ElementProps extends FiltersProps {
  title: string;
  type: ProjectsFilter;
}

const Filters: React.FC<FiltersProps> = (props: FiltersProps) => {
  const { selectedFilter, onChange } = props;

  return (
    <Container>
      <Element
        title="All"
        type={ProjectsFilter.All}
        selectedFilter={selectedFilter}
        onChange={onChange}
      />
      <Element
        title="Frontend"
        type={ProjectsFilter.Frontend}
        selectedFilter={selectedFilter}
        onChange={onChange}
      />
      <Element
        title="Backend"
        type={ProjectsFilter.Backend}
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
  )
};

export default Filters;
