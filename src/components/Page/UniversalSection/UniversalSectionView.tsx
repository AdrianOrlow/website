import { Section, SectionType } from '@prisma/client';
import SectionHeader from '@shared/SectionHeader';
import * as React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import ImagesSection from '../ImagesSection';
import ThumbnailSection from '../ThumbnailSection';
import { Container, RawText, Wrapper } from './UniversalSectionStyle';

interface Props {
  data: Section;
}

const UniversalSection: React.FC<Props> = ({ data }) => {
  const { type, imagesUrls, rawText, bulletPoints } = data;
  const cleanedText = rawText.replaceAll('\\n', '\n').replaceAll('\\', '');

  const sectionComponents: Record<SectionType, React.FC> = {
    [SectionType.BulletPoints]: () => (
      <Container>
        <SectionHeader
          title={<span>{bulletPoints.title}</span>}
          subTitle={bulletPoints.subTitle}
          descriptions={bulletPoints.points}
        />
      </Container>
    ),
    [SectionType.Image]: () =>
      imagesUrls.length > 1 ? (
        <ImagesSection imagesUrls={imagesUrls} alt={imagesUrls[0]} />
      ) : (
        <ThumbnailSection imageUrl={imagesUrls[0]} alt={imagesUrls[0]} />
      ),
    [SectionType.RawText]: () => (
      <Container>
        <RawText>
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {cleanedText}
          </ReactMarkdown>
        </RawText>
      </Container>
    ),
  };

  const SectionComponent = sectionComponents[type];

  return (
    <Wrapper>
      <SectionComponent />
    </Wrapper>
  );
};

export default UniversalSection;
