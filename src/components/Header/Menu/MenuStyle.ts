import styled from 'styled-components';
import { Link as ScrollLink } from 'react-scroll';
import { Breakpoints, Colors } from '../../../constants';
import { SectionContainerStyle } from '../../../shared/Section';
import TimesIconSVG from '../../../assets/vectors/fa-times.svg';

interface ContainerProps {
  show: boolean;
}

export const Container = styled(SectionContainerStyle).attrs({ as: 'nav' })<ContainerProps>`
  z-index: 100;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${Colors.fog};
  transition: 0.3s ease-in-out;
  box-sizing: border-box;
`;

export const Inner = styled.div`
  max-width: ${Breakpoints.desktop};
  margin: auto;
  display: grid;
  grid-template-rows: 1.25rem auto;
  height: 100%;
  width: 100%;
  
  @media only screen and (min-width: ${Breakpoints.mobile}) {
    grid-template-rows: 1.5rem auto;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 0;
  height: 66%;
  margin: auto;
`;

export const ListElement = styled.li`
  display: block;
  text-align: center;
`;

export const Link = styled(ScrollLink)`
  font-weight: 600;
  color: ${Colors.blueGreyish};
  text-align: center;
  font-size: 1.5rem;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  
  &:hover {
    color: ${Colors.blackBluish};
  }
  
  @media only screen and (min-width: ${Breakpoints.mobile}) {
    font-size: 2rem;
  }
`;

export const Button = styled.button`
  display: block;
  padding: 0;
  margin: 0 0 0 auto;
  border: 0;
  background: transparent;
  cursor: pointer;
`;

export const TimesIcon = styled(TimesIconSVG)`
  height: 1.25rem;
  width: 1.25rem;
  
  @media only screen and (min-width: ${Breakpoints.mobile}) {
    height: 1.5rem;
    width: 1.5rem;
  }
`;
