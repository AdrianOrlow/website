import styled from 'styled-components';
import { Breakpoints, Colors } from '../../constants/index';

export const Container = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: 100%;
  
  @media only screen and (min-width: ${Breakpoints.mobile}) {
    grid-gap: 1.5rem;
  }
`;

export const List = styled.ul`
  padding: 0;
  margin: 0;
  display: grid;
  grid-gap: 1rem;
  
  @media only screen and (min-width: ${Breakpoints.mediumMobile}) {
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    grid-gap: 1.25rem;
  }
  
  @media only screen and (min-width: ${Breakpoints.desktop}) {
    grid-gap: 1.5rem;
  }
`;
