export interface HeadType {
  title: string;
  description: string;
  keywords: string;
  url: string;
  image: string;
}

export interface ColorsType {
  whitePure: string;
  whiteDark: string;
  fog: string;
  blueLight: string;
  blue: string;
  blueGreyish: string;
  blackBluish: string;
  blackPure: string;
}

export interface BreakpointsType {
  smallMobile: string;
  mediumMobile: string;
  mobile: string;
  desktop: string;
}

export type SectionsType = Record<string, SectionRouteType>;

export interface SectionRouteType {
  title: string;
  hashKey: string;
}

export enum ProjectFilter {
  All,
  Frontend,
  Backend,
}

export type ProjectsFilterChange = (filter: ProjectFilter) => void;

export interface SkillCategoryType {
  title: string;
  list: string[];
}

export interface SocialLinkType {
  title: string;
  url: string;
  icon: JSX.Element;
}

export interface ContactFormData {
  name: string;
  email: string;
  topic: string;
  message: string;
  recaptcha: string;
}

export interface ContactFormResult {
  isError: boolean;
  message: string;
}

export enum ProjectPriority {
  Low,
  Medium,
  High,
}

export interface ProjectType {
  id: number;
  title: string;
  imagesFolder?: string;
  description: string;
  license: string;
  filter: ProjectFilter;
  priority: ProjectPriority;
  backgroundColor: string;
  technologies: ProjectTechnologyType[];
  links: ProjectLinksType;
}

export interface ProjectTechnologyType {
  title: string;
  highPriority?: boolean;
}

export interface ProjectLinksType {
  source?: string;
  demo?: string;
}
