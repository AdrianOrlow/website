import styled from 'styled-components';
import { Breakpoints, Colors } from '../../../constants';
import { ButtonStyle } from '../../../shared/Button';
import { darken } from 'polished';

export const Title = styled.span`
  display: none;
  justify-content: center;
  align-items: center;
  font-size: 1.25rem;
  color: ${Colors.blueGreyish};
  font-weight: 600;
  transition: 0.2s ease-in-out;

  @media only screen and (min-width: ${Breakpoints.mobile}) {
    display: flex;
  }
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

export const Container = styled.a`
  text-decoration: none;
  
  &:hover {
    ${Icon} {
      background: ${darken(0.05, Colors.blueGreyish)};
    }
    
    ${Title} {
      color: ${darken(0.05, Colors.blueGreyish)};
    }
  }
      
  &:active {
    ${Icon} {
      background: ${darken(0.1, Colors.blueGreyish)};
    }

    ${Title} {
      color: ${darken(0.1, Colors.blueGreyish)};
    }
  }

  @media only screen and (min-width: ${Breakpoints.mobile}) {
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: 3rem auto;
  }
`;
