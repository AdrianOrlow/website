import { spacingX, spacingY } from '@utils/stylesUtils';
import { transparentize } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  ${spacingX(3)};
`;

export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 8rem;
  height: 8rem;
  width: 8rem;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.light};
  outline: 16px solid
    ${({ theme }) => transparentize(0.9, theme.colors.primary)};

  img {
    height: 4rem;
    width: 4rem;
  }

  svg {
    font-size: 3.5rem;
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
  width: 25%;

  img {
    display: block;
    border-radius: 3rem;
    object-fit: cover;
    outline: 8px solid
      ${({ theme }) => transparentize(0.9, theme.colors.primary)};
  }
`;

export const Divider = styled.div`
  background: ${({ theme }) => theme.colors.gray};
  width: 2rem;
  height: 1px;
  opacity: 0.5;
`;
