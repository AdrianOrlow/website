import styled from 'styled-components';
import { Breakpoints, Colors } from '../../../constants';
import { ButtonStyle } from '../../../shared/Button';

export const Container = styled.a`
  text-decoration: none;

  @media only screen and (min-width: ${Breakpoints.mobile}) {
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: 3rem auto;
  }
`;

export const Title = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.25rem;
  color: ${Colors.blueGreyish};
  font-weight: 600;
`;

export const Icon = styled(ButtonStyle).attrs({ as: 'span' })`
  padding: 0;
  height: 3rem;
  width: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
    
  svg {
    height: 1.25rem;
    width: 1.25rem;
  }
  
  @media only screen and (min-width: ${Breakpoints.mobile}) {
    padding: 0;
    
    svg {
      height: 1.5rem;
      width: 1.5rem;
    }
  }
`;
