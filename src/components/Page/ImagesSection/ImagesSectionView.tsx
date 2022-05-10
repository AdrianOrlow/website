import * as React from 'react';
import { Wrapper } from './ImagesSectionStyle';

interface Props {
  imagesUrls: string[];
  alt: string;
}

const ImagesSection: React.FC<Props> = ({ imagesUrls, alt }) => {
  return (
    <Wrapper>
      {imagesUrls.map((imgUrl) => (
        <img key={imgUrl} src={imgUrl} alt={alt} />
      ))}
    </Wrapper>
  );
};

export default ImagesSection;
