import { apiPaths, paths } from '@constants';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faArrowDown, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Document, Page } from '@prisma/client';
import { Box, BoxSubTitle, BoxTitle } from '@shared/Box';
import Button from '@shared/Button';
import CTALink from '@shared/CTALink';
import { useTranslationWithFallback } from '@utils/hooks/useTranslationWithFallback';
import Trans from 'next-translate/Trans';
import Link from 'next/link';
import * as React from 'react';
import { useState } from 'react';
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
import { BLOG_TAKE } from './BlogUtils';

library.add(faArrowRight, faArrowDown);

interface Props {
  documents: Document[];
  posts: Page[];
  buttonType?: 'showMore' | 'loadMore';
}

const Blog: React.FC<Props> = ({
  documents,
  buttonType = 'showMore',
  ...props
}) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [posts, setPosts] = useState(props.posts);
  const { t, lang } = useTranslationWithFallback('common');
  const canLoadMore = posts.length % BLOG_TAKE === 0;

  const handleLoadMore = async () => {
    setLoading(true);

    await fetch(
      `${apiPaths.posts}?lang=${lang}&type=${t(
        'global.page.type.article'
      )}&take=${BLOG_TAKE}&skip=${posts.length}`
    )
      .then((r) => r.json())
      .then((nextPosts) => setPosts([...posts, ...nextPosts]))
      .finally(() => setLoading(false));
  };

  const toDocument = (document: Document) => (
    <DocumentContainer key={document.id}>
      <DocumentTitle>{document.title[lang]}</DocumentTitle>
      <DocumentDescription>{document.description[lang]}</DocumentDescription>
      <Link href={document.fileUrl.replace('LANG', lang)} passHref>
        <CTALink color="primary" active>
          {t('blog.documents.read')}
        </CTALink>
      </Link>
    </DocumentContainer>
  );

  const toPost = (page: Page) => (
    <ArticleContainer key={page.id}>
      <Link href={paths.singlePage(page.slug)} passHref>
        <a>
          <ImageWrapper>
            <img src={page.thumbnailUrl} alt={page.title} />
          </ImageWrapper>
        </a>
      </Link>
      <ArticleInner>
        <ArticleTitle>{page.title}</ArticleTitle>
        <ArticleDivider />
        <ArticleDescription>{page.description}</ArticleDescription>
        <Link href={paths.singlePage(page.slug)} passHref>
          <CTALink color="primary" active>
            {t('blog.articles.read')}
          </CTALink>
        </Link>
      </ArticleInner>
    </ArticleContainer>
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
        {posts.map(toPost)}
        {buttonType === 'loadMore' && canLoadMore && (
          <Button
            beforeIcon={<FontAwesomeIcon icon={faArrowDown} />}
            loading={loading}
            onClick={handleLoadMore}
          >
            {t('blog.articles.loadMore')}
          </Button>
        )}
        {buttonType === 'showMore' && (
          <Link href={paths.blog} passHref>
            <Button beforeIcon={<FontAwesomeIcon icon={faArrowRight} />} as="a">
              {t('blog.articles.showMore')}
            </Button>
          </Link>
        )}
      </Container>
    </Wrapper>
  );
};

export default Blog;
