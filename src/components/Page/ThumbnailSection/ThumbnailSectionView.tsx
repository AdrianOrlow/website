import Image from 'next/image';
import * as React from 'react';
import {
  BackgroundImage,
  Container,
  ImageWrapper,
  Wrapper,
} from './ThumbnailSectionStyle';

interface Props {
  imageUrl: string;
  alt: string;
}

const ThumbnailSection: React.FC<Props> = ({ imageUrl, alt }) => {
  return (
    <Wrapper>
      <Container>
        <BackgroundImage
          src={require('@assets/vectors/page/thumbnail-bg.svg')}
        />
        <ImageWrapper>
          <Image
            src={imageUrl}
            alt={alt}
            width={800}
            height={800 * (9 / 16)}
            quality={100}
          />
        </ImageWrapper>
      </Container>
    </Wrapper>
  );
};

export default ThumbnailSection;
