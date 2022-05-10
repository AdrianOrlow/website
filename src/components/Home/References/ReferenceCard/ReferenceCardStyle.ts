import { spacingX, spacingY } from '@utils/stylesUtils';
import { mix, transparentize } from 'polished';
import styled from 'styled-components';

export const Wrapper = styled.div`
  border-radius: 2rem;
  background: ${({ theme }) =>
    mix(0.025, theme.colors.black, theme.colors.light)};
  border: 8px solid ${({ theme }) => transparentize(0.9, theme.colors.primary)};
  padding: 2rem;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  ${spacingY(1)};
`;

export const Inner = styled.div`
  display: flex;
  ${spacingX(2)}
`;

export const Footer = styled.div`
  display: flex;
  justify-content: center;
  margin-left: auto;
  ${spacingX(0.5)}
`;

export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3rem;
  width: 3rem;
  border-radius: 3rem;
  flex-shrink: 0;
  outline: 8px solid ${({ theme }) => transparentize(0.9, theme.colors.primary)};
  background: ${({ theme }) => theme.colors.primary};

  svg {
    height: 1.5rem;
    width: 1.5rem;
    color: ${({ theme }) => theme.colors.light};
  }
`;

export const ImageWrapper = styled.div`
  display: flex;
  align-items: center;

  img {
    display: block;
    height: 3rem;
    width: 3rem;
    object-fit: cover;
    border-radius: 3rem;
  }
`;

export const Author = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1.2;
  margin: auto;
`;

export const AuthorName = styled.div`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: ${({ theme }) => theme.fontWeight.primary.bold};
`;

export const AuthorRole = styled.div`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.gray};
  font-weight: ${({ theme }) => theme.fontWeight.primary.regular};
`;

export const Content = styled.div`
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.gray};
  font-weight: ${({ theme }) => theme.fontWeight.primary.regular};

  b {
    font-weight: ${({ theme }) => theme.fontWeight.primary.bold};
  }
`;
