import { Section } from '@shared/Page';
import { spacingY } from '@utils/stylesUtils';
import styled from 'styled-components';

export const Wrapper = styled(Section)``;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  ${spacingY(3)};

  @media only screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    ${spacingY(6)};
  }
`;

export const Inner = styled.div`
  display: flex;
  flex-direction: column;
  ${spacingY(4)};
`;
