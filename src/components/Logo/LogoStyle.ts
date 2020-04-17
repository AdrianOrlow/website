import styled from 'styled-components';
import { rgba } from 'polished';
import { Colors } from '../../constants/index';
import LogoSVG from '../../assets/vectors/logo.svg';

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const Icon = styled(LogoSVG)`
  height: 1em;
  width: 1em;
  padding-right: 0.5em;
  border-right: 1px solid ${rgba(Colors.blueGreyish, 0.5)};
`;

export const Title = styled.span`
  padding-left: 0.5em;
  font-weight: 600;
  color: ${Colors.blackBluish};
`;
