import { transparentize } from 'polished';
import styled from 'styled-components';

const Input = styled.input`
  background: transparent;
  border: 0;
  padding: 1rem;
  border-radius: 1rem;
  color: ${({ theme }) => theme.colors.gray};
  font-weight: ${({ theme }) => theme.fontWeight.primary.regular};
  font-family: ${({ theme }) => theme.fontFamily.primary};
  background: ${({ theme }) => transparentize(0.95, theme.colors.black)};
  font-size: 1rem;
  width: 100%;
  height: 100%;
  max-width: 100%;
  min-width: 100%;

  ::placeholder {
    opacity: 0.25;
  }

  &:disabled {
    background: ${({ theme }) => transparentize(0.95, theme.colors.black)};
  }
`;

export default Input;
