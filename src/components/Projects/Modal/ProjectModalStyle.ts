import styled from 'styled-components';
import { rgba } from 'polished';
import { Breakpoints, Colors } from '../../../constants';
import TimesIconSVG from '../../../assets/vectors/fa-times.svg';
import {
  Description,
  TechnologiesList as CardTechnologiesList
} from '../ProjectCard/ProjectCardStyle';

export const Overlay = styled.div`
  z-index: 500;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${rgba(Colors.blackBluish, 0.25)};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  overflow: hidden;
  max-width: 90vw;
  min-width: 15rem;
  
  @media only screen and (min-width: ${Breakpoints.mediumMobile}) {
    width: 30rem;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  font-size: 1rem;
  
  img {
    height: 1rem;
  }
  
  @media only screen and (min-width: ${Breakpoints.smallMobile}) {
    padding: 1.25rem;
  }
  
  @media only screen and (min-width: ${Breakpoints.mediumMobile}) {
    padding: 1.5rem;
    
    span {
      font-size: 1.25rem;
    }
  }
  
  @media only screen and (min-width: ${Breakpoints.desktop}) {
    img {
      height: 1.5rem;
    }
    
    span {
      font-size: 1.5rem;
    }
  }
`;

export const TimesIcon = styled(TimesIconSVG)`
  height: 1rem;
  width: 1rem;

  path {
    fill: ${Colors.fog};
  }
  
  @media only screen and (min-width: ${Breakpoints.mediumMobile}) {
    height: 1.25rem;
    width: 1.25rem;
  }
  
  @media only screen and (min-width: ${Breakpoints.desktop}) {
    height: 1.5rem;
  }
`;

export const Inner = styled.div`
  display: grid;
  grid-gap: 1rem;
  padding: 1rem;
  background: ${Colors.fog};
  
  @media only screen and (min-width: ${Breakpoints.smallMobile}) {
    padding: 1.25rem;
    grid-gap: 1.25rem;
  }
  
  @media only screen and (min-width: ${Breakpoints.mediumMobile}) {
    padding: 1.5rem;
    grid-gap: 1.5rem;
  }
`;

export const SectionWrapper = styled.section``;

export const SectionTitle = styled.h3`
  margin: 0;
  font-weight: 600;
  font-size: 1.25rem;
  color: ${Colors.blueGreyish};
  
  @media only screen and (min-width: ${Breakpoints.smallMobile}) {
    font-size: 1.25rem;
  }
`;

export const LicenseTitle = styled.span`
  font-weight: 500;
`;

export const Actions = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;
  
  a {
    text-decoration: none;
  }
`;

export const TechnologiesList = styled(CardTechnologiesList)`
  padding: 0;
  
  @media only screen and (min-width: ${Breakpoints.smallMobile}) {
    padding: 0;
  }

  @media only screen and (min-width: ${Breakpoints.mediumMobile}) {
    padding: 0;
  }
`;

export {
  Description,
}
