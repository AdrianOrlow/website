import React, { Fragment } from 'react';
import { SkillCategoryType } from '../types';

const skills: SkillCategoryType[] = [
  {
    title: 'Programming languages',
    list: [
      'TypeScript',
      'JavaScript',
      'Go',
    ],
  },
  {
    title: 'Databases',
    list: [
      'MySQL',
      'MongoDB',
      'Firebase',
      'TypeORM',
      'GORM',
    ],
  },
  {
    title: 'Frameworks',
    list: [
      'React',
      'Node.js',
      'Next.js',
      'Vue.js',
      'Nest.js',
      'Express.js',
    ],
  },
  {
    title: 'Others',
    list: [
      'Git',
      'SCSS',
      'Linux',
      'GraphQL',
      'Docker',
      'REST API',
      'Redux',
      'Babel',
      'Webpack',
      'styled-components',
      'Formik',
      'Ramda',
    ],
  },
  {
    title: 'Human languages',
    list: [
      'Polish – native',
      'English – advanced',
    ]
  }
];

export default skills;
