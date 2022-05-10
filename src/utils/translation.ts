import { languages as languagesObj } from '@constants';
import { TextTranslate } from '@prisma/client';

export const translate = (
  translation: TextTranslate,
  requestedLang: string
): string => {
  const languages = [requestedLang, ...Object.keys(languagesObj)];

  for (let i = 0; i < languages.length; i += 1) {
    const lang = languages[i];
    const exists = typeof translation?.[lang] !== 'undefined';

    if (exists && !!translation[lang]) {
      return translation[lang];
    }
  }

  return '';
};
