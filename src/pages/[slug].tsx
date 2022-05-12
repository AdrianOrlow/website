import Blog from '@components/Home/Blog';
import { BLOG_TAKE } from '@components/Home/Blog/BlogUtils';
import Hero from '@components/Page/Hero';
import ThumbnailSection from '@components/Page/ThumbnailSection';
import { Wrapper as ThumbnailSectionWrapper } from '@components/Page/ThumbnailSection/ThumbnailSectionStyle';
import UniversalSection from '@components/Page/UniversalSection';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCode, faEarthEurope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Document, Page, Section } from '@prisma/client';
import prisma, { toObjectWithStringTimeStamps } from '@services/prisma';
import { Box, BoxTitle } from '@shared/Box';
import Button from '@shared/Button';
import Contact from '@shared/Contact';
import CTABuildProduct from '@shared/CTABuildProduct';
import NarrowDivider from '@shared/NarrowDivider';
import { Section as Wrapper } from '@shared/Page';
import { useTranslationWithFallback } from '@utils/hooks/useTranslationWithFallback';
import { NextPage } from 'next';
import getT from 'next-translate/getT';
import Link from 'next/link';
import { transparentize } from 'polished';
import styled from 'styled-components';

library.add(faEarthEurope, faCode);

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: transparent;

  & > *:not(:first-child):not(${ThumbnailSectionWrapper}:nth-child(2)) {
    margin-top: 5rem;
    scroll-margin: 8rem;

    @media only screen and (min-width: ${({ theme }) =>
        theme.breakpoints.md}px) {
      margin-top: 6rem;
    }
  }

  ${Box} {
    width: 100%;
    max-width: 700px;
    margin-top: 3rem !important;
  }
`;

export const Chip = styled.span`
  display: inline-flex;
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
  padding: 0.5rem 0.75rem;
  border-radius: 0.5rem;
  background: ${({ theme }) => transparentize(0.9, theme.colors.gray)};
  font-weight: ${({ theme }) => theme.fontWeight.primary.bold};
`;

interface Props {
  data: Page & { sections: Section[] };
  documents: Document[];
  posts: Page[];
}

const Page: NextPage<Props> = ({ data, documents, posts }) => {
  const { t } = useTranslationWithFallback('page');
  const { title, thumbnailUrl, sections, type, projectData } = data;
  const isCaseStudy = type.toLowerCase() == 'case study';
  const skills = projectData
    ? [...projectData.technologies, ...projectData.skills]
    : [];

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
        {projectData && (
          <>
            {skills.length > 0 && (
              <Box>
                <BoxTitle>{t('skills.title')}</BoxTitle>
                <div>
                  {skills.map((skill) => (
                    <Chip key={skill}>{skill}</Chip>
                  ))}
                </div>
              </Box>
            )}
            {(projectData.website || projectData.code) && (
              <Box>
                <BoxTitle>{t('checkLive.title')}</BoxTitle>
                <div style={{ display: 'flex' }}>
                  {projectData.website && (
                    <Link href={projectData.website} passHref>
                      <Button
                        as="a"
                        beforeIcon={<FontAwesomeIcon icon={faEarthEurope} />}
                      >
                        {t('checkLive.website')}
                      </Button>
                    </Link>
                  )}
                  {projectData.code && (
                    <Link href={projectData.code} passHref>
                      <Button
                        as="a"
                        style={{ marginLeft: '0.5em' }}
                        beforeIcon={<FontAwesomeIcon icon={faCode} />}
                      >
                        {t('checkLive.code')}
                      </Button>
                    </Link>
                  )}
                </div>
              </Box>
            )}
          </>
        )}
        {isCaseStudy && (
          <>
            <CTABuildProduct />
            <Contact />
          </>
        )}
        {!isCaseStudy && (
          <>
            <NarrowDivider />
            <Blog documents={documents} posts={posts} />
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
  const t = await getT(locale, 'common');

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
    prisma.page.findMany({
      where: {
        lang: locale.toUpperCase(),
        type: t('global.page.type.article'),
      },
      take: BLOG_TAKE,
    }),
  ]);

  const [documents, postData, posts] = data;

  if (!postData) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      documents,
      data: [postData].map(toObjectWithStringTimeStamps)[0],
      posts: posts.map(toObjectWithStringTimeStamps),
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
