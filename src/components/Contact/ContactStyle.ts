import styled from 'styled-components';
import { Breakpoints } from '../../constants';

export const Container = styled.div`
  display: grid;
  grid-gap: 1.5rem;
  grid-template-columns: 100%;
  
  @media only screen and (min-width: ${Breakpoints.mobile}) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const SocialLinksWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SocialLinks = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media only screen and (min-width: ${Breakpoints.mobile}) {
    flex-direction: column;
    justify-content: space-evenly;
    align-items: flex-start;
  }
`;
