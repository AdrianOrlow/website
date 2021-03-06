import styled from 'styled-components';
import { Colors, Breakpoints } from '../../constants';
import BarsIconSVG from '../../assets/vectors/fa-bars-solid.svg';

export const Container = styled.header`
  width: 100%;
  z-index: 1;
  position: absolute;
  top: 0;
  left: 0;
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

export const BarsIcon = styled(BarsIconSVG)`
  height: 1.25rem;
  width: 1.25rem;
  
  @media only screen and (min-width: ${Breakpoints.mobile}) {
    height: 1.5rem;
    width: 1.5rem;
  }
`;
