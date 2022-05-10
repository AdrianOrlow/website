import { transparentize } from 'polished';
import styled from 'styled-components';

export const Container = styled.label`
  display: grid;
  grid-template-columns: 100%;
  grid-gap: 0.5rem;
`;

export const Title = styled.div`
  color: ${({ theme }) => transparentize(0.25, theme.colors.gray)};
  font-weight: ${({ theme }) => theme.fontWeight.primary.bold};
  font-family: ${({ theme }) => theme.fontFamily.primary};
`;
