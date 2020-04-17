import React from 'react';

import { ProjectsFilter, ProjectsFilterChange } from '../../../types';
import View from './FiltersView';

interface Props {
  onChange: ProjectsFilterChange;
}

const Filters: React.FC<Props> = (props: Props) => {
  const { onChange } = props;
  const [selectedFilter, setSelectedFilter] = React.useState<ProjectsFilter>(ProjectsFilter.All);

  const handleChange = (filter: ProjectsFilter) => {
    setSelectedFilter(filter);
    onChange(filter);
  };

  return (
    <View
      selectedFilter={selectedFilter}
      onChange={handleChange}
    />
  )
};

export default Filters;
