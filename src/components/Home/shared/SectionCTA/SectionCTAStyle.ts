import { spacingX, spacingY } from '@utils/stylesUtils';
import { transparentize } from 'polished';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  ${spacingY(1.5)}
`;

export const Divider = styled.div`
  width: 4rem;
  height: 1px;
  background: ${({ theme }) => transparentize(0.67, theme.colors.gray)};
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  ${spacingX(1)};
`;
