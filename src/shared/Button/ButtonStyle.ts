import styled from 'styled-components';
import { Colors } from '../../constants';

interface ContainerProps {
  type: 'contained' | 'outlined';
  size: 'big' | 'small';
}

const fulfillmentStyle = (props: ContainerProps) => (
  props.type === 'outlined'
    ? `
      background: transparent;
      border: 1px solid ${Colors.blueGreyish};
      box-sizing: border-box;
      color: ${Colors.blueGreyish};
    ` : `
      background: ${Colors.blueGreyish};
      color: ${Colors.fog};
    `
);

const sizeStyle = (props: ContainerProps) => (
  props.size === 'small'
    ? `
      padding: 0.5rem 1rem;
    ` : `
      padding: 0.75rem 1rem;
    `
);

export const Container = styled.button<ContainerProps>`
  border-radius: 0.25rem;
  font-weight: 500;
  border: 0;
  background: transparent;
  
  
  ${fulfillmentStyle}
  ${sizeStyle}
`;
