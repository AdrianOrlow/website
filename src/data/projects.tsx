import { ProjectFilter, ProjectPriority, ProjectType } from '../types';

const projects: ProjectType[] = [
  {
    id: 1,
    title: 'Files',
    imagesFolder: 'files',
    description: 'Personal file sharing web application',
    license: 'MIT',
    priority: ProjectPriority.High,
    filter: ProjectFilter.Frontend,
    links: {
      demo: 'https://l.orlow.me/files-samples',
      source: 'https://l.orlow.me/files-source',
    },
    technologies: [
      {
        title: 'TypeScript',
        showOnCard: true,
      },
      {
        title: 'React',
        showOnCard: true,
      },
      {
        title: 'Formik',
        showOnCard: true,
      },
      {
        title: 'styled-components',
      },
      {
        title: 'Ramda',
      },
      {
        title: 'Dokku',
      },
    ]
  },
  {
    id: 2,
    title: 'Files API',
    description: 'RESTful API for Files',
    license: 'MIT',
    priority: ProjectPriority.High,
    filter: ProjectFilter.Backend,
    links: {
      demo: 'https://l.orlow.me/files-samples',
      source: 'https://l.orlow.me/files-api',
    },
    technologies: [
      {
        title: 'Go',
        showOnCard: true,
      },
      {
        title: 'GORM',
        showOnCard: true,
      },
      {
        title: 'MySQL',
        showOnCard: true,
      },
      {
        title: 'Gorilla MUX',
      },
      {
        title: 'Dokku',
      },
    ]
  },
  {
    id: 3,
    title: 'myPolitics',
    imagesFolder: 'mypolitics',
    description: 'Advanced political views quiz',
    license: 'MIT',
    priority: ProjectPriority.High,
    filter: ProjectFilter.Frontend,
    backgroundColor: '#f9f9f9',
    textColor: '#000',
    links: {
      demo: 'https://l.orlow.me/mypolitics',
      source: 'https://l.orlow.me/mypolitics-source',
    },
    technologies: [
      {
        title: 'TypeScript',
        showOnCard: true,
      },
      {
        title: 'React',
        showOnCard: true,
      },
      {
        title: 'Redux',
        showOnCard: true,
      },
      {
        title: 'SCSS'
      },
      {
        title: 'ESLint'
      },
    ]
  },
  {
    id: 4,
    title: 'myPolitics API',
    description: 'GraphQL API for myPolitics quiz',
    license: 'MIT',
    priority: ProjectPriority.Medium,
    filter: ProjectFilter.Backend,
    backgroundColor: '#f9f9f9',
    textColor: '#1d1d1d',
    links: {
      demo: 'https://l.orlow.me/mypolitics',
      source: 'https://l.orlow.me/mypolitics-api',
    },
    technologies: [
      {
        title: 'TypeScript',
        showOnCard: true,
      },
      {
        title: 'Node.js',
        showOnCard: true,
      },
      {
        title: 'GraphQL',
        showOnCard: true,
      },
      {
        title: 'MongoDB',
      },
    ]
  },
  {
    id: 5,
    title: 'OFM',
    imagesFolder: 'ofm',
    description: 'Charity project for youth association',
    license: 'MIT',
    priority: ProjectPriority.Medium,
    filter: ProjectFilter.Frontend,
    backgroundColor: '#3d92b7',
    links: {
      demo: 'https://l.orlow.me/ofm',
      source: 'https://l.orlow.me/ofm-source',
    },
    technologies: [
      {
        title: 'JavaScript',
        showOnCard: true,
      },
      {
        title: 'React',
        showOnCard: true,
      },
      {
        title: 'SCSS',
        showOnCard: true,
      },
      {
        title: 'BEM',
      },
    ]
  },
  {
    id: 7,
    title: 'Moje Zdrowie',
    imagesFolder: 'mojezdrowie',
    description: 'Drugs management',
    license: 'MIT',
    priority: ProjectPriority.Low,
    filter: ProjectFilter.Frontend,
    backgroundColor: '#f13061',
    links: {
      demo: 'https://l.orlow.me/moje-zdrowie',
      source: 'https://l.orlow.me/moje-zdrowie-source',
    },
    technologies: [
      {
        title: 'Go',
        showOnCard: true,
      },
      {
        title: 'JavaScript',
        showOnCard: true,
      },
      {
        title: 'CSS',
        showOnCard: true,
      },
      {
        title: 'Public APIs',
      },
    ]
  },
  {
    id: 8,
    title: 'ShortNews',
    description: 'News in one place',
    license: 'MIT',
    priority: ProjectPriority.Medium,
    filter: ProjectFilter.Frontend,
    backgroundColor: '#6C7A89',
    links: {
      demo: 'https://l.orlow.me/short-news',
      source: 'https://l.orlow.me/short-news-source',
    },
    technologies: [
      {
        title: 'Go',
        showOnCard: true,
      },
      {
        title: 'CSS',
        showOnCard: true,
      },
      {
        title: 'RSS',
      },
    ]
  },
  {
    id: 9,
    title: 'vLocal',
    description: 'Online local ads system',
    license: 'MIT',
    priority: ProjectPriority.Medium,
    filter: ProjectFilter.Frontend,
    backgroundColor: '#1d1d1d',
    links: {
      demo: 'https://l.orlow.me/vlocal',
      source: 'https://l.orlow.me/vlocal-source',
    },
    technologies: [
      {
        title: 'JavaScript',
        showOnCard: true,
      },
      {
        title: 'Vue',
        showOnCard: true,
      },
      {
        title: 'Firebase',
        showOnCard: true,
      },
      {
        title: 'CSS',
      },
      {
        title: 'BEM',
      },
    ]
  },
  {
    id: 10,
    title: 'SUMMI DECEM',
    description: 'Top programmers quotations',
    license: 'MIT',
    priority: ProjectPriority.Medium,
    filter: ProjectFilter.Frontend,
    backgroundColor: '#2c3a49',
    links: {
      demo: 'http://l.orlow.me/summi-decem',
      source: 'http://l.orlow.me/summi-decem-source',
    },
    technologies: [
      {
        title: 'JavaScript',
        showOnCard: true,
      },
      {
        title: 'React',
        showOnCard: true,
      },
      {
        title: 'SCSS',
        showOnCard: true,
      },
      {
        title: 'PHP',
      },
    ]
  },
  {
    id: 11,
    title: 'shiftscreen API',
    description: 'Backend for shiftscreen app',
    license: 'Apache 2.0 with Commons Clause',
    priority: ProjectPriority.High,
    filter: ProjectFilter.Backend,
    backgroundColor: '#6e79fe',
    links: {
      source: 'https://l.orlow.me/shiftscreen-api',
    },
    technologies: [
      {
        title: 'TypeScript',
        showOnCard: true,
      },
      {
        title: 'Nest.js',
        showOnCard: true,
      },
      {
        title: 'TypeORM',
        showOnCard: true,
      },
      {
        title: 'MySQL',
      },
      {
        title: 'MinIO',
      },
    ]
  },
  {
    id: 12,
    title: 'Teczka Zdrowia',
    imagesFolder: 'teczka-zdrowia',
    description: 'Web application for doctors appointments, office and patients data management.',
    license: 'Apache 2.0 with Commons Clause',
    priority: ProjectPriority.Medium,
    filter: ProjectFilter.Frontend,
    backgroundColor: '#6a6ee1',
    links: {
      demo: 'https://l.orlow.me/teczka-zdrowia-demo',
      source: 'https://l.orlow.me/teczka-zdrowia-source',
    },
    technologies: [
      {
        title: 'JavaScript',
        showOnCard: true,
      },
      {
        title: 'Vue',
        showOnCard: true,
      },
      {
        title: 'Vuex',
        showOnCard: true,
      },
      {
        title: 'SCSS'
      },
      {
        title: 'PWA'
      },
    ]
  },
  {
    id: 13,
    title: 'Teczka Zdrowia API',
    description: 'Teczka Zdrowia GraphQL backend',
    license: 'Apache 2.0 with Commons Clause',
    priority: ProjectPriority.Low,
    filter: ProjectFilter.Backend,
    backgroundColor: '#6a6ee1',
    links: {
      demo: 'https://l.orlow.me/teczka-zdrowia-demo',
      source: 'https://l.orlow.me/teczka-zdrowia-api-source',
    },
    technologies: [
      {
        title: 'PHP',
        showOnCard: true,
      },
      {
        title: 'Laravel',
        showOnCard: true,
      },
      {
        title: 'GraphQL',
        showOnCard: true,
      },
      {
        title: 'MySQL'
      },
    ]
  },
];

/*
  {
    id: undefined,
    title: undefined,
    description: undefined,
    license: undefined,
    priority: undefined,
    filter: undefined,
    backgroundColor: undefined,
    links: {
      demo: undefined,
      source: undefined,
    },
    technologies: [
      {
        title: undefined,
        showOnCard: undefined,
      },
    ]
  },
*/

const filterProjects = (priority: ProjectPriority) => (
  projects.filter(project => project.priority === priority)
);
const highPriorityProjects = filterProjects(ProjectPriority.High);
const mediumPriorityProjects = filterProjects(ProjectPriority.Medium);
const lowPriorityProjects = filterProjects(ProjectPriority.Low);

export default [
  ...highPriorityProjects,
  ...mediumPriorityProjects,
  ...lowPriorityProjects
];
