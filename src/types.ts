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
  mediumMobile: string;
  mobile: string;
  desktop: string;
}

export type SectionsType = Record<string, SectionRouteType>;

export interface SectionRouteType {
  title: string;
  hashKey: string;
}

export enum ProjectsFilter {
  All,
  Frontend,
  Backend,
}

export type ProjectsFilterChange = (filter: ProjectsFilter) => void;

export interface SkillCategoryType {
  title: string;
  list: (string | JSX.Element)[];
}

export interface SocialLinkType {
  title: string;
  url: string;
  icon: JSX.Element;
}
