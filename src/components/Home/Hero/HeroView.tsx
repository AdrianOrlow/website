import { paths } from '@constants';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCode, faPencilRuler } from '@fortawesome/free-solid-svg-icons';
import Button from '@shared/Button';
import { Title } from '@shared/Typography';
import { useTranslationWithFallback } from '@utils/hooks/useTranslationWithFallback';
import { smoothScroll } from '@utils/smoothScroll';
import Trans from 'next-translate/Trans';
import Link from 'next/link';
import * as React from 'react';
import { Actions, BackgroundImage, Container, Wrapper } from './HeroStyle';

library.add(faCode, faPencilRuler);

const Hero: React.FC = () => {
  const { t } = useTranslationWithFallback('home');

  return (
    <Wrapper>
      <BackgroundImage src="/static/assets/hero-bg.png" />
      <Container>
        <Trans
          i18nKey="home:hero.title"
          components={[<Title key="0" as="h1" />, <span key="1" />]}
        />
        <Actions>
          <Link href={paths.homeSections.contact} passHref>
            <Button onClick={smoothScroll} as="a" size="large">
              {t('hero.contact')}
            </Button>
          </Link>
          <Link href="/cv.pdf" passHref>
            <Button as="a" size="large" background="bluish">
              {t('hero.cv')}
            </Button>
          </Link>
        </Actions>
      </Container>
    </Wrapper>
  );
};

export default Hero;
