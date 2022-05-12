import { transparentize } from 'polished';
import styled, { css } from 'styled-components';

interface Props {
  type: 'success' | 'error' | 'info';
}

const Alert = styled.div<Props>`
  display: flex;
  padding: 1rem;
  border-radius: 0.5rem;
  display: grid;
  grid-template-columns: 100%;
  grid-gap: 0.5rem;
  text-align: left;
  font-weight: ${({ theme }) => theme.fontWeight.primary.regular};
  font-family: ${({ theme }) => theme.fontFamily.primary};
  line-height: 1.4;
  font-size: 1rem;

  a {
    text-decoration: underline;
  }

  ${({ type, theme }) => {
    const color = {
      info: theme.colors.primary,
      success: theme.colors.green,
      error: theme.colors.red,
    }[type];

    return css`
      color: ${color};
      background: ${transparentize(0.9, color)};
    `;
  }}
`;

export default Alert;
