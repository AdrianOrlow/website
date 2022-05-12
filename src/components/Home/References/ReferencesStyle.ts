import { Section } from '@shared/Page';
import { spacingY } from '@utils/stylesUtils';
import styled from 'styled-components';

export const Wrapper = styled(Section)``;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  ${spacingY(2)};
  width: 100%;
`;

export const Inner = styled.div`
  display: flex;
  flex-direction: column;
  ${spacingY(1)};

  @media only screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    ${spacingY(2)};
  }

  & > div {
    max-width: 45rem;
    /* width: calc(100% - 1rem); */

    &:nth-child(even) {
      margin-left: auto;
    }

    &:nth-child(odd) {
      margin-left: right;
    }
  }
`;
