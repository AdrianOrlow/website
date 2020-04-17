import React from 'react';

import { ProjectsFilterChange } from '../../types';
import Section from '../../shared/Section';
import Filters from './Filters';

interface Props {
  onFilterChange: ProjectsFilterChange;
  loading: boolean;
}

const Projects: React.FC<Props> = (props: Props) => {
  const { onFilterChange, loading } = props;

  return (
    <Section title="Projects">
      <Filters onChange={onFilterChange} />
      {loading && <>loading</>}
    </Section>
  );
};

export default Projects;
