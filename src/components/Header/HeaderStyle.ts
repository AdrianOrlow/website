import styled from 'styled-components';
import { rgba } from 'polished';
import { Colors, Breakpoints } from '../../constants/index';
import BarsIconSVG from '../../assets/vectors/fa-bars-solid.svg';

export const Container = styled.header`
  z-index: 10;
  position: fixed;
  top: 0;
  left: 0;
  height: 60px;
  width: 100%;
  box-shadow: 0px 4px 4px ${rgba(Colors.blackPure, 0.05)};
  background: ${Colors.whitePure};
`;

export const Inner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: ${Breakpoints.desktop};
  padding: 0 1rem;
  height: 100%;
  font-size: 1rem;
  color: ${Colors.blueGreyish};
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
`;
