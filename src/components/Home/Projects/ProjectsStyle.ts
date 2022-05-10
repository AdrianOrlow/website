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
  ${spacingX(2)};
  width: 100%;
`;

export const Col = styled.div`
  display: flex;
  flex-direction: column;
  ${spacingY(3)};
  width: 100%;

  &:nth-child(2) {
    margin-top: 3rem;
  }
`;
