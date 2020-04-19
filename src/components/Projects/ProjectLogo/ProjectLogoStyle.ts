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
`;

export const Image = styled.img`
  height: ${childrenHeights[0]};
  width: auto;
  
  @media only screen and (min-width: ${Breakpoints.desktop}) {
    height: ${childrenHeights[1]};
  }
`;

export const TextLogo = styled.span`
  text-align: center;
  font-weight: 600;
  color: ${Colors.fog};
  font-size: ${childrenHeights[0]};
  
  @media only screen and (min-width: ${Breakpoints.desktop}) {
    font-size: ${childrenHeights[1]};
  }
`;
