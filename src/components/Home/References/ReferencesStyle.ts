import { Section } from '@shared/Page';
import { spacingY } from '@utils/stylesUtils';
import styled from 'styled-components';

export const Wrapper = styled(Section)``;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  ${spacingY(4)};
`;

export const Inner = styled.div`
  display: flex;
  flex-direction: column;
  ${spacingY(2)};

  & > div {
    max-width: 45rem;

    &:nth-child(even) {
      margin-left: auto;
    }
  }
`;
