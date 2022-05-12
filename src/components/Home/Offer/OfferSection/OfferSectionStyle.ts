import { spacingX, spacingY } from '@utils/stylesUtils';
import { transparentize } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;

  @media only screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    ${spacingX(3)};
  }

  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.md}px) {
    ${spacingX(1.5)};
    margin: 0 0.5rem;
  }
`;

export const InnerWrapper = styled.div`
  display: flex;

  @media only screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    ${spacingX(3)};
  }

  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.md}px) {
    ${spacingY(2)};
    flex-direction: column;
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 8rem;
  height: 4rem;
  width: 4rem;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.light};
  box-shadow: 0 0 0 8px
    ${({ theme }) => transparentize(0.9, theme.colors.primary)};

  img {
    height: 2rem;
    width: 2rem;
  }

  svg {
    font-size: 1.75rem;
  }

  @media only screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    height: 8rem;
    width: 8rem;
    box-shadow: 0 0 0 16px
      ${({ theme }) => transparentize(0.9, theme.colors.primary)};

    img {
      height: 4rem;
      width: 4rem;
    }

    svg {
      font-size: 3.5rem;
    }
  }
`;

export const Inner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  ${spacingY(1)};
`;

export const Title = styled.div`
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: ${({ theme }) => theme.fontWeight.primary.bold};
`;

export const Description = styled.div`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.gray};
  font-weight: ${({ theme }) => theme.fontWeight.primary.regular};
  line-height: 1.5;

  b {
    font-weight: ${({ theme }) => theme.fontWeight.primary.bold};
  }
`;

export const ImageWrapper = styled.div`
  width: 100%;
  max-width: 18rem;

  img {
    width: 100%;
    display: block;
    border-radius: 3rem;
    object-fit: cover;
    box-shadow: 0 0 0 8px
      ${({ theme }) => transparentize(0.9, theme.colors.primary)};
  }

  @media only screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    width: 25%;
    min-width: 25%;
  }
`;

export const Divider = styled.div`
  background: ${({ theme }) => theme.colors.gray};
  width: 2rem;
  height: 1px;
  opacity: 0.5;
`;
