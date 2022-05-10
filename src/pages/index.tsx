import Blog from '@components/Home/Blog';
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
import styled from 'styled-components';

const Container = styled.div`
  background: transparent;

  & > *:not(:first-child):not(${SkillsWrapper}, ${ExpierienceDivider}) {
    margin-top: 6rem;
    scroll-margin: 8rem;
  }
`;

interface Props {
  references: Reference[];
  documents: Document[];
  projects: (Page & { projectData: ProjectData })[];
  posts: Page[];
}

const Home: NextPage<Props> = ({ references, documents, projects }) => {
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
      <Blog documents={documents} />
    </Container>
  );
};

export async function getStaticProps() {
  const data = await Promise.all([
    prisma.reference.findMany({}),
    prisma.document.findMany({}),
    prisma.page.findMany({
      where: {
        type: 'CASE STUDY',
      },
    }),
  ]);
  const [references, documents, projects] = data;

  return {
    props: {
      references: references.map(toObjectWithStringTimeStamps),
      projects: projects.map(toObjectWithStringTimeStamps),
      documents,
      posts: [],
    },
    revalidate: 120,
  };
}

export default Home;
