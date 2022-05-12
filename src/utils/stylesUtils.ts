import { css } from 'styled-components';

export const spacingY = (gap: number, unit = 'rem') => css`
  & > *:not(:first-child) {
    margin-top: ${gap}${unit};
  }
`;

export const spacingX = (gap: number, unit = 'rem') => css`
  & > *:not(:last-child) {
    margin-right: ${gap}${unit};
  }
`;
