import styled from 'styled-components';
import { spacingX } from '../../utils/stylesUtils';
import { DefaultTheme } from './../../theme/styled.d';

export const Wrapper = styled.div<{ color?: typeof DefaultTheme['color'] }>`
  width: 100%;
  background: ${({ theme, color = 'primary' }) => theme.colors[color]};
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 1rem;
`;

export const NavLink = styled.a`
  color: ${({ theme }) => theme.colors.light};
  font-weight: ${({ theme }) => theme.fontWeight.primary.regular};
  text-decoration: none;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export const Nav = styled.nav`
  display: flex;
  ${spacingX(2)};
`;

export const Logo = styled.div`
  z-index: 10;
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
