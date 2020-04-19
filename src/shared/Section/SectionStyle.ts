import styled from 'styled-components';
import { Colors, Breakpoints } from '../../constants/index';

interface ContainerProps {
  backgroundType: 'light' | 'dark';
}

export const Container = styled.section<ContainerProps>`
  padding: 2rem 1rem;
  
  @media only screen and (min-width: ${Breakpoints.smallMobile}) {
    padding: 2rem;
  }
  
  @media only screen and (min-width: ${Breakpoints.mediumMobile}) {
    padding: 3rem;
  }
  
  @media only screen and (min-width: ${Breakpoints.mobile}) {
    padding: 4rem;
  }
  
  ${(props: ContainerProps) => {
    const backgroundColor = props.backgroundType === 'light'
      ? Colors.whitePure
      : Colors.whiteDark;
  
    return `background: ${backgroundColor}`;
  }};
`;

export const Inner = styled.div`
  max-width: ${Breakpoints.desktop};
  margin: auto;
`;

export const Header = styled.header`
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  width: 100%;
  padding-bottom: 1.5rem;
  
  @media only screen and (min-width: ${Breakpoints.mediumMobile}) {
    padding-bottom: 2rem;
  }
  
  @media only screen and (min-width: ${Breakpoints.mobile}) {
    padding-bottom: 3rem;
  }
`;

export const Divider = styled.div`
  z-index: 1;
  margin: auto;
  background: ${Colors.blueGreyish};
  opacity: 0.5;
  border-radius: 1px;
  height: 2px;
  width: 100%;
`;

export const Title = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  font-weight: 500;
  margin: 0;
  padding: 0 1rem;
  color: ${Colors.blackBluish};
  
  @media only screen and (min-width: ${Breakpoints.mobile}) {
    font-size: 2rem;
    padding: 0 1.5rem;
  }
`;

export const Content = styled.div`

`;
