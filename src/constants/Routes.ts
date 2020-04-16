import { RouteType } from '../types';

const Routes: Record<string, RouteType> = {
  Hero: {
    title: 'Home',
    hashKey: '',
  },
  Projects: {
    title: 'Projects',
    hashKey: 'projects',
  },
  Skills: {
    title: 'Skills',
    hashKey: 'skills',
  },
  Contact: {
    title: 'Contact',
    hashKey: 'contact',
  }
};

export default Routes;
