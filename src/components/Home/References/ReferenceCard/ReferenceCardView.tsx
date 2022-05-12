import { library } from '@fortawesome/fontawesome-svg-core';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Reference } from '@prisma/client';
import { useTranslationWithFallback } from '@utils/hooks/useTranslationWithFallback';
import { translate } from '@utils/translation';
import Image from 'next/image';
import * as React from 'react';
import {
  Author,
  AuthorName,
  AuthorRole,
  Container,
  Content,
  Footer,
  IconWrapper,
  ImageWrapper,
  Inner,
  Wrapper,
} from './ReferenceCardStyle';

library.add(faQuoteLeft);

interface Props {
  data: Reference;
}

const ReferenceCard: React.FC<Props> = ({ data }) => {
  const { t, lang } = useTranslationWithFallback('home');
  const { text, author } = data;

  return (
    <Wrapper>
      <Container>
        <Inner>
          <IconWrapper>
            <FontAwesomeIcon icon={faQuoteLeft} />
          </IconWrapper>
          <Content
            dangerouslySetInnerHTML={{ __html: translate(text, lang) }}
          />
        </Inner>
        <Footer>
          <ImageWrapper>
            <Image
              src={author.photoUrl}
              alt={author.name}
              height={48}
              width={48}
            />
          </ImageWrapper>
          <Author>
            <AuthorName>{author.name}</AuthorName>
            <AuthorRole>{author.role}</AuthorRole>
          </Author>
        </Footer>
      </Container>
    </Wrapper>
  );
};

export default ReferenceCard;
