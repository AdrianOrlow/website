import styled from 'styled-components';
import { rgba } from 'polished';

import { Colors, Breakpoints } from '../../constants';
import LogoSVG from '../../assets/vectors/logo.svg';
import Section from '../../shared/Section';

export const Container = styled(Section)`
  display: flex;
  height: 100vh;
  box-sizing: border-box;
  
  & > div {
    margin: auto;
    width: 100%;
    height: 100%;

    & > div {
      height: 100%;
    }
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const Inner = styled.div`
`;

export const Text = styled.div``;

export const Logo = styled(LogoSVG)`
  display: none;
  height: 7rem;
  width: auto;
  padding-right: 2rem;
  border-right: 3px solid ${rgba(Colors.blueGreyish, 0.5)};

  svg {
    height: 100%;
    width: auto;
  }
`;

export const Title = styled.h1`
  margin: 0;
  line-height: 1;
  font-size: 2.5rem;
  font-weight: 600;
  color: ${Colors.blackBluish};
  
  @media only screen and (min-width: ${Breakpoints.mediumMobile}) {
    font-size: 3.5rem;
  }
  
  @media only screen and (min-width: ${Breakpoints.mobile}) {
    font-size: 4.5rem;
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  
  @media only screen and (min-width: ${Breakpoints.mobile}) {
    ${Logo} {
      display: block;
    }
    
    ${Text} {
      padding-left: 2rem;
    }
  }
`;

export const Subtitle = styled.h2`
  margin: 0;
  font-size: 1.25rem;
  font-weight: 500;
  color: ${Colors.blueGreyish};
  
  @media only screen and (min-width: ${Breakpoints.mediumMobile}) {
    font-size: 2rem;
  }
  
  @media only screen and (min-width: ${Breakpoints.mobile}) {
    font-size: 2.25rem;
  }
`;

export const Actions = styled.div`
  display: flex;
  padding-top: 1rem;
  
  button:not(:last-child) {
    margin-right: 0.5rem;
  }
  
  a {
    text-decoration: none;
  }
  
  @media only screen and (min-width: ${Breakpoints.mediumMobile}) {
    padding-top: 1.5rem;
    
    button:not(:last-child) {
        margin-right: 0.75rem;
    }
  }
  
  @media only screen and (min-width: ${Breakpoints.mediumMobile}) {
    padding-top: 2rem;
    
    button:not(:last-child) {
      margin-right: 1rem;
    }
  }
`;
