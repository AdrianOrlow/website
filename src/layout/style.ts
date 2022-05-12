import styled, { css } from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

export const ContentWrapper = styled.div<{ headerMargin: boolean }>`
  min-height: 80vh;
  margin-bottom: 4rem;

  ${breakpoint('md')`
    margin-bottom: 6rem;
  `};

  ${({ headerMargin }) =>
    headerMargin &&
    css`
      margin-top: 4.5rem;

      ${breakpoint('md')`
        margin-top: 6rem;
      `};
    `};
`;
