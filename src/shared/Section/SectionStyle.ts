import styled from 'styled-components';
import { Colors } from '../../constants/index';

interface ContainerProps {
  backgroundType: 'light' | 'dark';
}

export const Container = styled.section<ContainerProps>`
  padding: 3rem;
  
  ${(props: ContainerProps) => {
    const backgroundColor = props.backgroundType === 'light'
      ? Colors.whitePure
      : Colors.whiteDark;
    
    return `background: ${backgroundColor}`;
  }}
`;

export const Header = styled.header`
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  width: 100%;
  padding-bottom: 1.5rem;
`;

export const Divider = styled.div`
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
  padding: 0 0.75rem;
  color: ${Colors.blackBluish};
`;

export const Inner = styled.div`

`;
