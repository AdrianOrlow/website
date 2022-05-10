import { paths } from '@constants';
import { Reference } from '@prisma/client';
import Button from '@shared/Button';
import { useTranslationWithFallback } from '@utils/hooks/useTranslationWithFallback';
import { smoothScroll } from '@utils/smoothScroll';
import Trans from 'next-translate/Trans';
import Link from 'next/link';
import * as React from 'react';
import SectionHeader from '../../../shared/SectionHeader';
import SectionCTA from '../shared/SectionCTA';
import ReferenceCard from './ReferenceCard';
import { Container, Inner, Wrapper } from './ReferencesStyle';

interface Props {
  data: Reference[];
}

const References: React.FC<Props> = ({ data }) => {
  const { t } = useTranslationWithFallback('home');

  return (
    <Wrapper breakpoint="lg" id="references">
      <Container>
        <SectionHeader
          title={
            <Trans
              i18nKey="home:references.title"
              components={[<React.Fragment key="0" />, <span key="1" />]}
            />
          }
          descriptions={[t('references.subTitle')]}
        />
        <Inner>
          {data.map((reference) => (
            <ReferenceCard key={reference.id} data={reference} />
          ))}
        </Inner>
        <SectionCTA
          title={
            <Trans
              i18nKey="home:references.CTA.title"
              components={[<React.Fragment key="0" />, <span key="1" />]}
            />
          }
          buttons={
            <>
              <Link href={paths.homeSections.contact} passHref>
                <Button onClick={smoothScroll} as="a">
                  {t('references.CTA.contact')}
                </Button>
              </Link>
              <Link href={paths.homeSections.offer} passHref>
                <Button background="bluish" onClick={smoothScroll} as="a">
                  {t('references.CTA.offer')}
                </Button>
              </Link>
            </>
          }
        />
      </Container>
    </Wrapper>
  );
};

export default References;
