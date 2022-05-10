import { paths } from '@constants';
import Button from '@shared/Button';
import { useTranslationWithFallback } from '@utils/hooks/useTranslationWithFallback';
import { smoothScroll } from '@utils/smoothScroll';
import Link from 'next/link';
import * as React from 'react';
import {
  Container,
  Description,
  Divider,
  IconWrapper,
  ImageWrapper,
  Inner,
  Title,
} from './OfferSectionStyle';

interface Props {
  title: string;
  description: React.ReactElement;
  icon: React.ReactElement;
  imageUrl: string;
}

const OfferSection: React.FC<Props> = ({
  title,
  description,
  icon,
  imageUrl,
}) => {
  const { t } = useTranslationWithFallback('home');

  return (
    <Container>
      <IconWrapper>{icon}</IconWrapper>
      <Inner>
        <Title>{title}</Title>
        <Divider />
        <Description>{description}</Description>
        <Link href={paths.homeSections.contact} passHref>
          <Button
            onClick={smoothScroll}
            size="middle"
            background="bluish"
            as="a"
          >
            {t('offer.sections.CTA')}
          </Button>
        </Link>
      </Inner>
      <ImageWrapper>
        <img src={imageUrl} alt={title} />
      </ImageWrapper>
    </Container>
  );
};

export default OfferSection;
