import { spacingY } from '@utils/stylesUtils';
import { transparentize } from 'polished';
import styled from 'styled-components';

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 3rem;
  border-radius: 2rem;
  border: 8px solid ${({ theme }) => transparentize(0.95, theme.colors.black)};
  ${spacingY(1.5)};
`;

export const BoxDivider = styled.div`
  background: ${({ theme }) => theme.colors.gray};
  width: 2rem;
  height: 1px;
  opacity: 0.5;
`;

export const BoxSubTitle = styled.div`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.gray};
  font-weight: ${({ theme }) => theme.fontWeight.primary.regular};
  margin-top: 0.25em !important;
`;

export const BoxTitle = styled.div`
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: ${({ theme }) => theme.fontWeight.primary.bold};
`;
