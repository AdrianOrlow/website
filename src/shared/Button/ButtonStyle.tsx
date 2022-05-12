import styled from 'styled-components';
import { StyleProps } from './ButtonTypes';
import { getBackgrounds, sizes } from './ButtonUtils';

export const IconWrapper = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;

  &:not(:last-child) {
    margin-right: 0.75em;
  }

  svg {
    width: 1em;
    height: 1em;
  }
`;

export const Container = styled.button<StyleProps>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: ${({ theme }) => theme.fontWeight.primary.bold};
  font-family: ${({ theme }) => theme.fontFamily.primary};
  border: 0;
  cursor: pointer;
  transition: background 0.2s ease-in-out;
  width: ${({ isFullWidth }) => (isFullWidth ? '100%' : 'auto')};
  white-space: nowrap;
  line-height: 100%;
  border-radius: 10rem;

  span {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &[href]:hover {
    text-decoration: none;
  }

  ${({ size }) => sizes[size]}

  ${({ background, theme, pulsating }) => {
    const backgrounds = getBackgrounds(theme, { pulsating });
    return backgrounds[background];
  }}
`;
