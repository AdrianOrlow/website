import { library } from '@fortawesome/fontawesome-svg-core';
import { faCode, faPencilRuler } from '@fortawesome/free-solid-svg-icons';
import { Page } from '@prisma/client';
import SectionHeader from '@shared/SectionHeader';
import { useTranslationWithFallback } from '@utils/hooks/useTranslationWithFallback';
import * as React from 'react';
import {
  BackgroundImage,
  Container,
  Tag,
  TagsWrapper,
  Wrapper,
} from './HeroStyle';

library.add(faCode, faPencilRuler);

interface Props {
  data: Page;
}

const Hero: React.FC<Props> = ({ data }) => {
  const { t } = useTranslationWithFallback('home');
  const { title, type, tags } = data;

  const description = (
    <>
      <span dangerouslySetInnerHTML={{ __html: data.description }} />
      <TagsWrapper>
        {tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </TagsWrapper>
    </>
  );

  return (
    <Wrapper>
      <BackgroundImage src="/static/assets/hero-bg.png" />
      <Container>
        <SectionHeader
          tagline={type}
          title={<span>{title}</span>}
          descriptions={data.description ? [description] : []}
        />
      </Container>
    </Wrapper>
  );
};

export default Hero;
