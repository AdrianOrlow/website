import { paths } from '@constants';
import Button from '@shared/Button';
import { Section } from '@shared/Page';
import SectionHeader from '@shared/SectionHeader';
import { useTranslationWithFallback } from '@utils/hooks/useTranslationWithFallback';
import { spacingY } from '@utils/stylesUtils';
import Link from 'next/link';
import * as React from 'react';
import styled from 'styled-components';

interface Props {
  statusCode: number;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 4rem 0;
  ${spacingY(2)};
`;

const ErrorPage: React.FC<Props> = ({ statusCode }) => {
  const { t } = useTranslationWithFallback('common');

  return (
    <Section breakpoint="lg">
      <Container>
        <SectionHeader
          title={
            <span style={{ fontSize: '5rem', color: 'inherit' }}>
              {statusCode}.
            </span>
          }
        />
        <Link href={paths.home} passHref>
          <Button>{t('errorPage.homePage')}</Button>
        </Link>
      </Container>
    </Section>
  );
};

export const getServerSideProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { props: { statusCode } };
};

export default ErrorPage;
