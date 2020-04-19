import React from 'react';

import { ProjectFilter } from '../../types';
import View from './ProjectsView';

const Projects: React.FC = () => {
  const [projects, setProjects] = React.useState([]);
  const [loading, setLoading] = React.useState<boolean>(false);

  const handleFilterChange = (filter: ProjectFilter) => {
    setLoading(true);
    setTimeout(() => setLoading(false), 200);
  };

  return (
    <View
      onFilterChange={handleFilterChange}
      loading={loading}
    />
  );
};

export default Projects;
