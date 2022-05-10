import Blog from '@components/Home/Blog';
import Hero from '@components/Page/Hero';
import ThumbnailSection from '@components/Page/ThumbnailSection';
import { Wrapper as ThumbnailSectionWrapper } from '@components/Page/ThumbnailSection/ThumbnailSectionStyle';
import UniversalSection from '@components/Page/UniversalSection';
import { Document, Page, Section } from '@prisma/client';
import prisma, { toObjectWithStringTimeStamps } from '@services/prisma';
import Contact from '@shared/Contact';
import CTABuildProduct from '@shared/CTABuildProduct';
import NarrowDivider from '@shared/NarrowDivider';
import { Section as Wrapper } from '@shared/Page';
import { NextPage } from 'next';
import styled from 'styled-components';

const Container = styled.div`
  background: transparent;

  & > *:not(:first-child):not(${ThumbnailSectionWrapper}:nth-child(2)) {
    margin-top: 6rem;
    scroll-margin: 8rem;
  }
`;

interface Props {
  data: Page & { sections: Section[] };
  documents: Document[];
}

const Page: NextPage<Props> = ({ data, documents }) => {
  const { title, thumbnailUrl, sections, type } = data;
  const isCaseStudy = type.toLowerCase() == 'case study';

  return (
    <Wrapper as="div" breakpoint="lg">
      <Container>
        <Hero data={data} />
        {thumbnailUrl && (
          <ThumbnailSection imageUrl={thumbnailUrl} alt={title} />
        )}
        {sections.map((section) => (
          <UniversalSection key={section.id} data={section} />
        ))}
        {isCaseStudy && (
          <>
            <CTABuildProduct />
            <Contact />
          </>
        )}
        {!isCaseStudy && (
          <>
            <NarrowDivider />
            <Blog documents={documents} />
          </>
        )}
      </Container>
    </Wrapper>
  );
};

export async function getStaticProps<NextPageContext>({
  query,
  params,
  locale,
}) {
  const data = await Promise.all([
    prisma.document.findMany({}),
    prisma.page.findFirst({
      where: {
        slug: `${(query || params).slug}`,
        lang: locale.toUpperCase(),
      },
      include: {
        sections: true,
      },
    }),
  ]);

  const [documents, postData] = data;

  if (!postData) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      documents,
      data: [postData].map(toObjectWithStringTimeStamps)[0],
    },
    revalidate: 120,
  };
}

export async function getStaticPaths() {
  const pages = await prisma.page.findMany({});

  return {
    paths: pages.map(({ slug }) => ({
      params: { slug },
    })),
    fallback: 'blocking',
  };
}

export default Page;
