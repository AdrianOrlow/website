import { spacingX } from '@utils/stylesUtils';
import styled, { DefaultTheme } from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  ${spacingX(0.25)};
  font-weight: ${({ theme }) => theme.fontWeight.primary.bold};

  svg {
    font-size: 1em;
  }
`;

export const Line = styled.div<{ widthPercent: number }>`
  width: ${({ widthPercent }) => widthPercent}%;
  height: 1px;
  transition: width 1s ease;
  transition-delay: 0.5s;
  margin-right: auto;
  opacity: 0.5;
`;

export const Wrapper = styled.a<{ color: keyof DefaultTheme['colors'] }>`
  display: flex;
  flex-direction: column;

  ${Line} {
    background: ${({ color, theme }) => theme.colors[color]};
  }

  ${Container} {
    color: ${({ color, theme }) => theme.colors[color]};
  }
`;
