import { paths } from '@constants';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Document } from '@prisma/client';
import { Box, BoxSubTitle, BoxTitle } from '@shared/Box';
import Button from '@shared/Button';
import CTALink from '@shared/CTALink';
import { useTranslationWithFallback } from '@utils/hooks/useTranslationWithFallback';
import Trans from 'next-translate/Trans';
import Link from 'next/link';
import * as React from 'react';
import SectionHeader from '../../../shared/SectionHeader';
import {
  ArticleContainer,
  ArticleDescription,
  ArticleDivider,
  ArticleInner,
  ArticleTitle,
  Container,
  DocumentContainer,
  DocumentDescription,
  DocumentTitle,
  ImageWrapper,
  Wrapper,
} from './BlogStyle';

library.add(faArrowDown);

interface Props {
  documents: Document[];
}

const Blog: React.FC<Props> = ({ documents }) => {
  const { t, lang } = useTranslationWithFallback('common');

  const toDocument = (document: Document) => (
    <DocumentContainer>
      <DocumentTitle>{document.title[lang]}</DocumentTitle>
      <DocumentDescription>{document.description[lang]}</DocumentDescription>
      <Link href={document.fileUrl.replace('LANG', lang)} passHref>
        <CTALink color="primary" active>
          {t('blog.documents.read')}
        </CTALink>
      </Link>
    </DocumentContainer>
  );

  return (
    <Wrapper breakpoint="lg" id="publications">
      <Container>
        <SectionHeader
          title={
            <Trans
              i18nKey="common:blog.title"
              components={[<React.Fragment key="0" />, <span key="1" />]}
            />
          }
          descriptions={[t('blog.subTitle')]}
        />
        <Box>
          <BoxTitle>{t('blog.documents.title')}</BoxTitle>
          <BoxSubTitle>{t('blog.documents.subTitle')}</BoxSubTitle>
          {documents.map(toDocument)}
        </Box>
        <ArticleContainer>
          <ImageWrapper>
            <img
              src="/static/assets/pages/tiktok-wybierze-ci-rzad/thumbnail.png"
              alt="TikTok, czyli jak Chiny wybiorą ci rząd"
            />
          </ImageWrapper>
          <ArticleInner>
            <ArticleTitle>TikTok, czyli jak Chiny wybiorą ci rząd</ArticleTitle>
            <ArticleDivider />
            <ArticleDescription>
              TikTok włada treściami pokazywanymi każdego dnia miliardowi osób
              na całym świecie. To zagrożenie dla demokracji, którego nie możemy
              pominąć
            </ArticleDescription>
            <Link href={paths.singlePage('SLUG')} passHref>
              <CTALink color="primary" active>
                {t('blog.articles.read')}
              </CTALink>
            </Link>
          </ArticleInner>
        </ArticleContainer>
        <ArticleContainer>
          <ImageWrapper>
            <img
              src="/static/assets/pages/tiktok-wybierze-ci-rzad/thumbnail.png"
              alt="TikTok, czyli jak Chiny wybiorą ci rząd"
            />
          </ImageWrapper>
          <ArticleInner>
            <ArticleTitle>TikTok, czyli jak Chiny wybiorą ci rząd</ArticleTitle>
            <ArticleDivider />
            <ArticleDescription>
              TikTok włada treściami pokazywanymi każdego dnia miliardowi osób
              na całym świecie. To zagrożenie dla demokracji, którego nie możemy
              pominąć
            </ArticleDescription>
            <Link href={paths.singlePage('SLUG')} passHref>
              <CTALink color="primary" active>
                {t('blog.articles.read')}
              </CTALink>
            </Link>
          </ArticleInner>
        </ArticleContainer>
        <Button beforeIcon={<FontAwesomeIcon icon={faArrowDown} />}>
          {t('blog.articles.more')}
        </Button>
      </Container>
    </Wrapper>
  );
};

export default Blog;
