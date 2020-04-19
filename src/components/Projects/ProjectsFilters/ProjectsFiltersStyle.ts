import styled from 'styled-components';
import { Breakpoints } from '../../../constants';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  
  button:not(:last-child) {
    margin-right: 1rem;
    
    @media only screen and (min-width: ${Breakpoints.mediumMobile}) {
      margin-right: 1.25rem;
    }
    
    @media only screen and (min-width: ${Breakpoints.desktop}) {
      margin-right: 1.5rem;
    }
  }
`;
