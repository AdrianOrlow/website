import React from 'react';

import { ProjectFilter, ProjectType } from '../../types';
import View from './ProjectsView';
import { projects as projectsSource } from '../../data';

const Projects: React.FC = () => {
  const BASE_LOAD_LIMIT = 6;
  const [projects, setProjects] = React.useState<ProjectType[]>([]);
  const [loadLimit, setLoadLimit] = React.useState<number>(6);
  const [selectedFilter, setSelectedFilter] = React.useState<ProjectFilter>(ProjectFilter.All);
  const [finished, setFinished] = React.useState<boolean>(false);

  const loadAndSetProjects = () => {
    const isAll = selectedFilter === ProjectFilter.All;

    const getFilteredProjects = () => (
      projectsSource.filter((project) => (
        project.filter === selectedFilter
      ))
    );

    const projectsData = isAll ? projectsSource : getFilteredProjects();
    const limitedProjects = projectsData.slice(0, loadLimit);
    const limitedEqualsToAll = limitedProjects.length === projectsData.length;

    setFinished(limitedEqualsToAll);
    setProjects(limitedProjects);
  };

  const handleLoadMore = () => {
    setLoadLimit(loadLimit + BASE_LOAD_LIMIT);
  };

  const handleFilterChange = (filter: ProjectFilter) => {
    setLoadLimit(BASE_LOAD_LIMIT);
    setSelectedFilter(filter);
  };

  React.useEffect(() => (
    loadAndSetProjects()
  ), [loadLimit, selectedFilter]);

  return (
    <View
      onFilterChange={handleFilterChange}
      onLoadMore={handleLoadMore}
      selectedFilter={selectedFilter}
      projects={projects}
      finished={finished}
    />
  );
};

export default Projects;
