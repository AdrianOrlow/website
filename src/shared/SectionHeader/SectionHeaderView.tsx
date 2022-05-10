import { Description, SubTitle, Title } from '@shared/Typography';
import * as React from 'react';
import { Container, Tagline, Wrapper } from './SectionHeaderStyle';

interface Props {
  title: React.ReactNode;
  subTitle?: React.ReactNode;
  descriptions?: (React.ReactNode | string)[];
  tagline?: React.ReactNode;
}

const SectionHeader: React.FC<Props> = ({
  title,
  subTitle,
  descriptions = [],
  tagline,
}) => {
  return (
    <Wrapper>
      <Container hasTagline={!!tagline}>
        {tagline && <Tagline>{tagline}</Tagline>}
        <Title>{title}</Title>
        {subTitle && <SubTitle>{subTitle}</SubTitle>}
        {descriptions.map((desc, i) =>
          typeof desc === 'string' ? (
            <Description key={i} dangerouslySetInnerHTML={{ __html: desc }} />
          ) : (
            <Description key={i}>{desc}</Description>
          )
        )}
      </Container>
    </Wrapper>
  );
};

export default SectionHeader;
