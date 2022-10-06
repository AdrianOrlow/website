import Blog from '@components/Home/Blog';
import { Document, Page } from '@prisma/client';
import prisma, { toObjectWithStringTimeStamps } from '@services/prisma';
import { Section as Wrapper } from '@shared/Page';
import { NextPage } from 'next';
import getT from 'next-translate/getT';
import styled from 'styled-components';

const Container = styled.div`
  background: transparent;
  margin-top: 10rem;
`;

interface Props {
  posts: Page[];
  documents: Document[];
}

const BlogPage: NextPage<Props> = ({ posts, documents }) => {
  return (
    <Wrapper as="div" breakpoint="lg">
      <Container>
        <Blog documents={documents} posts={posts} buttonType="loadMore" />
      </Container>
    </Wrapper>
  );
};

export async function getServerSideProps<NextPageContext>({ locale }) {
  const t = await getT(locale, 'common');

  const [documents, posts] = await Promise.all([
    prisma.document.findMany({}),
    prisma.page.findMany({
      where: {
        lang: locale.toUpperCase(),
        type: t('global.page.type.article'),
      },
    }),
  ]);

  return {
    props: {
      documents,
      posts: posts.map(toObjectWithStringTimeStamps),
    },
  };
}

export default BlogPage;
