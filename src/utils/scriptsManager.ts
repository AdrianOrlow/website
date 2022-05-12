export const scripts = {
  googleanalytics: {
    id: 'googleanalytics',
    src: 'https://www.googletagmanager.com/gtag/js?id=G-023YDH62HR',
    name: 'Google Analytics',
    description: 'Google Analytics',
  },
};

export type ScriptsPreferences = {
  [key in keyof typeof scripts]: boolean;
};

const scriptsPreferencesKey = 'scriptsPreferences';

export const saveScriptsPreferences = (preferences: ScriptsPreferences) => {
  localStorage.setItem(scriptsPreferencesKey, JSON.stringify(preferences));
};

export const getScriptsPreferences = (): ScriptsPreferences => {
  const preferences = localStorage.getItem(scriptsPreferencesKey);

  if (!preferences) {
    return null;
  }

  return JSON.parse(preferences);
};
