import styled from 'styled-components';
import LogoSVG from '../../assets/vectors/logo.svg';

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

interface IconProps {
  showBorder: boolean;
}

export const Icon = styled(LogoSVG)<IconProps>`
  height: 1em;
  width: 1em;
`;
