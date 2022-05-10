import { Section } from '@shared/Page';
import { spacingX, spacingY } from '@utils/stylesUtils';
import { transparentize } from 'polished';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-size: cover;
  background-position: center;
  height: min(85vh, 40rem);
  position: relative;
`;

export const BackgroundImage = styled.img`
  position: absolute;
  top: 0;
  height: 100%;
  object-fit: cover;
  z-index: -1;
  background-color: ${({ theme }) => transparentize(0.9, theme.colors.gray)};
`;

export const Container = styled(Section)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  ${spacingY(2)};
`;

export const Actions = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  ${spacingX(1)}
`;
