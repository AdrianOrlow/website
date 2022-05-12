import { Section } from '@shared/Page';
import { spacingX, spacingY } from '@utils/stylesUtils';
import styled from 'styled-components';

export const Wrapper = styled(Section)``;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  ${spacingY(3)};
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  ${spacingY(1.5)};
  width: 100%;

  @media only screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    ${spacingX(2)};
    flex-direction: row;
  }
`;

export const Col = styled.div`
  display: flex;
  flex-direction: column;
  ${spacingY(1.5)};
  width: 100%;

  @media only screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    ${spacingY(3)};

    &:nth-child(2) {
      margin-top: 3rem;
    }
  }

  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.md}px) {
    & > *:nth-child(even) {
      margin-left: auto;
      width: 100%;
    }
  }
`;
