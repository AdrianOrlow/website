import { transparentize } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => transparentize(0.5, theme.colors.gray)};
  text-transform: uppercase;
`;

export const Divider = styled.div`
  margin: 0 0.33rem;
  height: 1rem;
  width: 1px;
  background: ${({ theme }) => transparentize(0.5, theme.colors.gray)};
`;

export const LanguageLink = styled.a<{ selected?: boolean }>`
  cursor: pointer;

  ${({ selected, theme }) =>
    selected && `font-weight: ${theme.fontWeight.primary.bold};`};

  &:hover {
    font-weight: ${({ theme }) => theme.fontWeight.primary.bold};
  }
`;
