import { paths } from '@constants';
import { Page, ProjectData } from '@prisma/client';
import CTALink from '@shared/CTALink';
import useHover from '@utils/hooks/useHover';
import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';
import {
  Container,
  Divider,
  Overlay,
  SubTitle,
  Tag,
  TagsWrapper,
  Title,
  Wrapper,
} from './ProjectCardStyle';

interface Props {
  page: Page & { projectData: ProjectData };
}

const ProjectCard: React.FC<Props> = ({ page: { projectData, ...page } }) => {
  const [ref, hover] = useHover();

  return (
    <Link href={paths.singlePage(page.slug)} passHref>
      <Wrapper thumbnailUrl={projectData.thumbnailUrl} ref={ref}>
        <Container show={!hover}>
          <Image
            src={projectData.logoUrl}
            height={48}
            width={192}
            layout="fixed"
            objectFit="contain"
            alt={page.title}
            quality={90}
          />
        </Container>
        <Overlay show={hover}>
          <Title>{page.title}</Title>
          <Divider />
          <SubTitle>{projectData.shortDescription}</SubTitle>
          <TagsWrapper>
            {page.tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </TagsWrapper>
          <CTALink color="light" active={hover} as="div">
            kliknij i zobacz case study
          </CTALink>
        </Overlay>
      </Wrapper>
    </Link>
  );
};

export default ProjectCard;
