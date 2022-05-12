import { transparentize } from 'polished';
import styled from 'styled-components';

export const Container = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.gray};
  text-align: left;
`;

export const Toggle = styled.div`
  border-radius: 999px;
  background-color: ${({ theme }) => transparentize(0.9, theme.colors.primary)};
  width: 3.5rem;
  height: 2rem;
  position: relative;
  transition: all 0.2s;
  margin-right: 0.5rem;
  flex-shrink: 0;

  &::before {
    background-color: white;
    border-radius: 999px;
    content: '';
    position: absolute;
    transition: all 0.2s;
    top: 2px;
    right: calc(1.5rem + 2px);
    height: calc(100% - 4px);
    width: calc(2rem - 4px);
    flex-shrink: 0;
  }

  &[aria-checked='true'] {
    background-color: ${({ theme }) => theme.colors.primary};

    &::before {
      right: 2px;
      height: calc(100% - 4px);
      width: calc(2rem - 4px);
    }
  }
`;
