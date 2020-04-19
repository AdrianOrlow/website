import { ProjectType, ProjectFilter, ProjectPriority } from '../types';

const projects: ProjectType[] = [
  {
    id: 1,
    title: 'Files',
    imagesFolder: 'files',
    description: 'Personal file sharing web application',
    license: 'MIT',
    priority: ProjectPriority.High,
    filter: ProjectFilter.Frontend,
    backgroundColor: '#52616D',
    links: {
      demo: '',
      source: '',
    },
    technologies: [
      {
        title: 'TypeScript',
        highPriority: true,
      },
      {
        title: 'React',
        highPriority: true,
      },
      {
        title: 'Formik',
        highPriority: true,
      },
    ]
  }
];

export default projects;
