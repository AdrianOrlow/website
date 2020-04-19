import React from 'react';

import { ProjectFilter, ProjectsFilterChange } from '../../../types';
import View from './ProjectsFiltersView';

interface Props {
  onChange: ProjectsFilterChange;
}

const ProjectsFilters: React.FC<Props> = (props: Props) => {
  const { onChange } = props;
  const [selectedFilter, setSelectedFilter] = React.useState<ProjectFilter>(ProjectFilter.All);

  const handleChange = (filter: ProjectFilter) => {
    setSelectedFilter(filter);
    onChange(filter);
  };

  return (
    <View
      selectedFilter={selectedFilter}
      onChange={handleChange}
    />
  );
};

export default ProjectsFilters;
