import styled from 'styled-components';
import { Breakpoints, Colors } from '../../../constants';

const childrenHeights = ['2rem', '3rem'];

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4rem;
  width: 100%;
  box-sizing: border-box;
  height: 10rem;
  
  @media only screen and (min-width: ${Breakpoints.desktop}) {
    height: 12rem;
  }
`;

export const Image = styled.img`
  max-height: ${childrenHeights[0]};
  width: auto;
  max-width: 100%;
  
  @media only screen and (min-width: ${Breakpoints.desktop}) {
    max-height: ${childrenHeights[1]};
  }
`;

export const TextLogo = styled.span`
  text-align: center;
  font-weight: 600;
  color: ${Colors.fog};
  font-size: 1.5rem;
  
  @media only screen and (min-width: ${Breakpoints.desktop}) {
    font-size: 2rem;
  }
`;
