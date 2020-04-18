import styled from 'styled-components';
import { Breakpoints } from '../../constants';

export const Container = styled.div`
  display: grid;
  grid-gap: 1.5rem;
  grid-template-columns: 100%;
  
  @media only screen and (min-width: ${Breakpoints.mobile}) {
    grid-template-columns: 1fr 2fr;
  }
`;

export const SocialLinksWrapper = styled.div`
  @media only screen and (min-width: ${Breakpoints.mobile}) {
    display: flex;
    justify-content: left;
    align-items: flex-start;
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media only screen and (min-width: ${Breakpoints.mobile}) {
    flex-direction: column;
    align-items: flex-start;
    height: 17rem;
  }
  
  @media only screen and (min-width: ${Breakpoints.desktop}) {
    height: 21rem;
  }
`;
