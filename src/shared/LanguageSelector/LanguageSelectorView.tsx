import { languages } from '@constants';
import { useTranslationWithFallback } from '@utils/hooks/useTranslationWithFallback';
import Link from 'next/link';
import { useRouter } from 'next/router';
import * as React from 'react';
import { Container, Divider, LanguageLink } from './LanguageSelectorStyle';

const LanguageSelector: React.FC = () => {
  const { asPath } = useRouter();
  const { lang: globalLang } = useTranslationWithFallback();

  const toLanguageLink = (lang: string, index: number) => (
    <React.Fragment key={lang}>
      <Link href={asPath} locale={lang}>
        <LanguageLink selected={lang === globalLang}>{lang}</LanguageLink>
      </Link>
      {index % 2 == 0 && <Divider />}
    </React.Fragment>
  );

  return <Container>{Object.keys(languages).map(toLanguageLink)}</Container>;
};

export default LanguageSelector;
