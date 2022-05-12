import { Section } from '@shared/Page';
import { spacingX, spacingY } from '@utils/stylesUtils';
import { transparentize } from 'polished';
import styled from 'styled-components';

export const Wrapper = styled(Section)``;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  ${spacingY(2)};
`;

export const DocumentContainer = styled.article`
  display: flex;
  flex-direction: column;
  border-radius: 1rem;
  padding: 2rem;
  ${spacingY(1)};
  background: ${({ theme }) => transparentize(0.95, theme.colors.black)};
  max-width: 40rem;
  align-items: flex-start;
  background-image: url(${require('@assets/vectors/home/document-bg.svg')});
`;

export const DocumentTitle = styled.h4`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.gray};
  font-weight: ${({ theme }) => theme.fontWeight.primary.bold};
  margin: 0;
`;

export const DocumentDescription = styled.div`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.gray};
  font-weight: ${({ theme }) => theme.fontWeight.primary.regular};
  margin: 0;
  line-height: 1.5;
`;

export const ArticleContainer = styled.article`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;

  & > a {
    @media only screen and (max-width: ${({ theme }) =>
        theme.breakpoints.md}px) {
      width: calc(100% - 8px);
    }
  }

  @media only screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    ${spacingX(2)};
  }

  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.md}px) {
    ${spacingY(1)};
    flex-direction: column;
    margin: 0.5rem;
  }
`;

export const ImageWrapper = styled.div`
  width: 100%;

  img {
    display: block;
    border-radius: 2rem;
    border: 8px solid
      ${({ theme }) => transparentize(0.75, theme.colors.primaryAccent)};
    height: 15rem;

    aspect-ratio: 16 / 9;
    object-fit: cover;

    @media only screen and (max-width: ${({ theme }) =>
        theme.breakpoints.md}px) {
      width: 100%;
    }
  }
`;

export const ArticleInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: auto;
  ${spacingY(0.75)};
  padding: 0 1rem;
  width: 100%;
`;

export const ArticleTitle = styled.h4`
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.black};
  font-weight: ${({ theme }) => theme.fontWeight.primary.bold};
  line-height: 1.2;
  opacity: 0.9;
`;

export const ArticleDivider = styled.div`
  width: 2rem;
  height: 1px;
  background: ${({ theme }) => theme.colors.gray};
  opacity: 0.5;
`;

export const ArticleDescription = styled.div`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.gray};
  font-weight: ${({ theme }) => theme.fontWeight.primary.regular};
  line-height: 1.5;
`;
