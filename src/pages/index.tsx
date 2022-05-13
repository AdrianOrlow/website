import Blog from '@components/Home/Blog';
import { BLOG_TAKE } from '@components/Home/Blog/BlogUtils';
import Hero from '@components/Home/Hero';
import Offer from '@components/Home/Offer';
import Projects from '@components/Home/Projects';
import References from '@components/Home/References';
import Skills from '@components/Home/Skills';
import {
  ExpierienceDivider,
  Wrapper as SkillsWrapper,
} from '@components/Home/Skills/SkillsStyle';
import { Document, Page, ProjectData, Reference } from '@prisma/client';
import prisma, { toObjectWithStringTimeStamps } from '@services/prisma';
import Contact from '@shared/Contact';
import CTABuildProduct from '@shared/CTABuildProduct';
import NarrowDivider from '@shared/NarrowDivider';
import { NextPage } from 'next';
import getT from 'next-translate/getT';
import styled from 'styled-components';

const Container = styled.div`
  background: transparent;

  & > *:not(:first-child):not(${SkillsWrapper}, ${ExpierienceDivider}) {
    margin-top: 4rem;
    scroll-margin: 8rem;
  }

  @media only screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    & > *:not(:first-child):not(${SkillsWrapper}, ${ExpierienceDivider}) {
      margin-top: 6rem;
      scroll-margin: 8rem;
    }
  }
`;

interface Props {
  references: Reference[];
  documents: Document[];
  projects: (Page & { projectData: ProjectData })[];
  posts: Page[];
}

const Home: NextPage<Props> = ({ references, documents, projects, posts }) => {
  return (
    <Container>
      <Hero />
      <Skills />
      <Projects data={projects} />
      <NarrowDivider />
      <References data={references} />
      <NarrowDivider />
      <Offer />
      <CTABuildProduct />
      <Contact />
      <NarrowDivider />
      <Blog documents={documents} posts={posts} />
    </Container>
  );
};

export async function getServerSideProps({ locale }) {
  const t = await getT(locale, 'common');

  const data = await Promise.all([
    prisma.document.findMany({}),
    prisma.reference.findMany({}),
    prisma.page.findMany({
      where: {
        type: t('global.page.type.case_study'),
        lang: locale.toUpperCase(),
      },
    }),
    prisma.page.findMany({
      where: {
        lang: locale.toUpperCase(),
        type: t('global.page.type.article'),
      },
      take: BLOG_TAKE,
    }),
  ]);

  const [documents, ...restData] = data;
  const [references, projects, posts] = restData.map((element) =>
    element.map(toObjectWithStringTimeStamps)
  );

  return {
    props: {
      references,
      projects,
      posts,
      documents,
    },
  };
}

export default Home;
