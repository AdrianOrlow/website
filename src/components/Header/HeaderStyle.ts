import styled from 'styled-components';
import { Colors, Breakpoints } from '../../constants/index';
import BarsIconSVG from '../../assets/vectors/fa-bars-solid.svg';

export const Container = styled.header`
  width: 100%;
`;

export const Inner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: ${Breakpoints.desktop};
  margin: auto;
  height: 100%;
  font-size: 1.25rem;
  color: ${Colors.blueGreyish};
  
  @media only screen and (min-width: ${Breakpoints.mobile}) {
    font-size: 1.5rem;
  }
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin: 0;
  border: 0;
  background: transparent;
  cursor: pointer;
`;

export const BarsIcon = styled(BarsIconSVG)`
  height: 1.25rem;
  width: 1.25rem;
  
  @media only screen and (min-width: ${Breakpoints.mobile}) {
    height: 1.5rem;
    width: 1.5rem;
  }
`;
