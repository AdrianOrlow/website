import { transparentize } from 'polished';
import styled, { css } from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { spacingX, spacingY } from './../../utils/stylesUtils';

export const Wrapper = styled.div<{ fullHeight: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: ${({ theme }) => transparentize(0.1, theme.colors.light)};
  backdrop-filter: blur(4px);
  z-index: 100;
  border-bottom: 1px solid
    ${({ theme }) => transparentize(0.95, theme.colors.primary)};
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 1rem;
`;

export const NavLink = styled.a`
  color: ${({ theme }) => theme.colors.gray};
  font-weight: ${({ theme }) => theme.fontWeight.primary.regular};
  text-decoration: none;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export const DesktopNav = styled.nav`
  display: flex;
  ${spacingX(2)};
`;

export const DesktopActionsInner = styled.div<{
  showLanguageSelector: boolean;
}>`
  display: none;
  align-items: center;
  ${spacingX(2)};
  transition: all 0.2s ease-in;
  margin-right: -3rem;
  padding-right: 4rem;

  ${breakpoint('md')`
    display: flex;
  `}

  ${({ showLanguageSelector }) =>
    !showLanguageSelector &&
    css`
      margin-right: -7rem;
    `};
`;

export const LanguageSelectorWrapper = styled.div<{ show: boolean }>`
  opacity: 0;
  pointer-events: none;
  transition: 0.2s ease-in;

  ${({ show }) =>
    show &&
    css`
      opacity: 1;
      pointer-events: all;
    `}
`;

export const DesktopActions = styled.div`
  display: none;
  align-items: center;

  ${breakpoint('md')`
    display: flex;
  `}
`;

export const Logo = styled.div`
  z-index: 10;
`;

export const MobileActions = styled.div`
  display: flex;
  align-items: center;

  ${LanguageSelectorWrapper} {
    margin-right: 1rem;
  }

  ${breakpoint('md')`
    display: none;
  `}
`;

export const NavButton = styled.button`
  display: flex;
  border: 0;
  background: transparent;
  padding: 0;
  margin: 0;
  cursor: pointer;

  svg {
    height: 24px;
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const MobileNav = styled.div<{ show: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: fixed;
  top: 6rem;
  left: 0;
  width: 100%;
  height: calc(100vh - 6rem);
  opacity: 0;
  pointer-events: none;
  background: ${({ theme }) => theme.colors.primary};
  ${spacingY(2)};
  transition: all 0.5s ease-out;

  a {
    color: ${({ theme }) => theme.colors.light};
    font-weight: ${({ theme }) => theme.fontWeight.primary.bold};
    font-size: 1.25rem;
  }

  ${({ show }) =>
    show &&
    css`
      opacity: 1;
      pointer-events: all;
    `}
`;
