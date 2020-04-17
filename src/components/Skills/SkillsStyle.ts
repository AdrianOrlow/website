import styled from 'styled-components';
import { Breakpoints, Colors } from '../../constants/index';

export const Container = styled.div`
  display: grid;
  grid-gap: 1.5rem;
  
  @media only screen and (min-width: ${Breakpoints.desktop}) {
    grid-gap: 1rem;
    grid-template-columns: repeat(5, 1fr);
  }
`;

export const ElementContainer = styled.div`
  display: grid;
  grid-gap: 0.75rem;
  width: 100%;
  
  @media only screen and (min-width: ${Breakpoints.desktop}) {
   grid-template-rows: 3rem auto;
  }
`;

export const Title = styled.h2`
  margin: 0;
  font-size: 1.25rem;
  font-weight: 600;
  color: ${Colors.blueGreyish};
  
  @media only screen and (min-width: ${Breakpoints.desktop}) {
    display: flex;
    align-items: center;
    justify-content: left;
    text-align: center;
  }
`;

export const List = styled.div`
  display: block;
  
  div {
    margin-bottom: 0.5rem;
    
    &:not(:last-child) {
      margin-right: 0.5rem;
    }
  }
  
  @media only screen and (min-width: ${Breakpoints.desktop}) {
   grid-template-rows: 3rem auto;
  }
`;
