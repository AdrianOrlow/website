import styled from 'styled-components';
import { darken, rgba } from 'polished';
import { Colors, Breakpoints } from '../../constants';

export const Container = styled.input`
  display: flex;
  padding: 0.75rem;
  font-weight: 500;
  color: ${Colors.blueGreyish};
  background: ${Colors.fog};
  border: 0;
  border-radius: 0.25rem;
  transition: 0.2s ease-in-out;
  
  &::placeholder {
    color: ${rgba(Colors.blueGreyish, 0.75)};
  }
  
  &:focus {
    background: ${darken(0.025, Colors.fog)};
    
    &::placeholder {
      color: transparent;
    }
  }
  
  @media only screen and (min-width: ${Breakpoints.mobile}) {
    padding: 1rem;
    font-size: 1.25rem;
  }
`;
