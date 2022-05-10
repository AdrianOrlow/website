import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();
export const BASE_PATH =
  typeof window !== 'undefined'
    ? window.location.origin
    : publicRuntimeConfig.BASE_PATH || 'https://orlow.me';

export const recaptchaKey = publicRuntimeConfig.RECAPTCHA_KEY;

export const paths = {
  home: '/',
  homeSections: {
    projects: '/#projects',
    references: '/#references',
    offer: '/#offer',
    publications: '/#publications',
    contact: '/#contact',
  },
  privacy: '/privacy',
  rules: '/rules',
  singlePage: (slug: string) => `/${slug}`,
};

export const titleTemplate = '%s | Adrian Orłów';

export const languages = {
  pl: 'Język polski',
  en: 'Język angielski',
};
