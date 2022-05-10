import { I18n } from 'next-translate';
import useTranslation from 'next-translate/useTranslation';

export const useTranslationWithFallback = (defaultNs?: string): I18n => {
  const { t, ...rest } = useTranslation(defaultNs);

  return {
    t: (i18nKey, query, options) =>
      t(i18nKey, query, {
        fallback: `${defaultNs}PL:${i18nKey}`,
        ...options,
      }),
    ...rest,
  };
};
