import styled from 'styled-components';
import { darken, lighten } from 'polished';
import { Colors } from '../../constants';

interface ContainerProps {
  type: 'contained' | 'outlined';
  size: 'big' | 'small';
  color: 'dark' | 'light';
}

const colorStyle = (props: ContainerProps) => (
  props.color === 'light'
    ? `
      background: ${Colors.fog};
      color: ${Colors.blueGreyish};
      
      &:hover {
        background: ${darken(0.05, Colors.fog)};
      }
      
      &:active {
        background: ${darken(0.1, Colors.fog)};
      }
    `
    : `
      background: ${Colors.blueGreyish};
      color: ${Colors.fog};
      
      &:hover {
        background: ${darken(0.05, Colors.blueGreyish)};
      }
      
      &:active {
        background: ${darken(0.1, Colors.blueGreyish)};
      }
    `
);

const fulfillmentStyle = (props: ContainerProps) => (
  props.type === 'outlined'
    ? `
      background: transparent;
      border: 1px solid ${Colors.blueGreyish};
      box-sizing: border-box;
      color: ${Colors.blueGreyish};
      
      &:hover {
        background: ${lighten(0.55, Colors.blueGreyish)};
      }
      
      &:active {
        background: ${lighten(0.5, Colors.blueGreyish)};
      }
    `
    : colorStyle(props)
);

const sizeStyle = (props: ContainerProps) => (
  props.size === 'small'
    ? `
      padding: 0.5rem 1rem;
    `
    : `
      padding: 0.75rem 1rem;
    `
);

export const Container = styled.button<HTMLButtonElement & ContainerProps>`
  border-radius: 0.25rem;
  font-weight: 500;
  border: 0;
  background: transparent;
  transition: 0.2s ease-in-out;
  cursor: pointer;
  
  ${fulfillmentStyle}
  ${sizeStyle}
`;
