import { BASE_PATH } from '@constants';
import { useTranslationWithFallback } from '@utils/hooks/useTranslationWithFallback';
import { useRouter } from 'next/router';

interface Output {
  url: string;
  getCustomLangUrl: (lang: string) => string;
}

const useCanonicalUrl = (defaultPath?: string): Output => {
  const { lang } = useTranslationWithFallback('common');
  const { asPath } = useRouter();
  const path = defaultPath || asPath.split('?')[0];
  const langText = lang === 'pl' ? '' : lang;

  return {
    url: `${BASE_PATH}${langText}${path}`,
    getCustomLangUrl: (customLang: string) =>
      `${BASE_PATH}${customLang}${path}`,
  };
};

export default useCanonicalUrl;
