import { BASE_PATH } from '@constants';
import useCanonicalUrl from '@utils/hooks/useCanonicalUrl';
import { useTranslationWithFallback } from '@utils/hooks/useTranslationWithFallback';
import { DefaultSeo } from 'next-seo';
import React from 'react';

const HeadSEO: React.FC = () => {
  const { t, lang } = useTranslationWithFallback('common');
  const { url } = useCanonicalUrl();
  const locale = [lang, lang.toUpperCase()].join('_');

  const { title, description } = {
    title: t('SEO.title'),
    description: t('SEO.description'),
  };

  return (
    <DefaultSeo
      title={title}
      description={description}
      canonical={url}
      openGraph={{
        type: 'website',
        site_name: title,
        description: description,
        locale: locale,
        images: [
          {
            url: `${BASE_PATH}/static/thumbnail_${lang}.png`,
            width: 1200,
            height: 630,
            alt: 'Adrian Orłów Thumbnail',
          },
        ],
        url,
      }}
    />
  );
};

export default HeadSEO;
