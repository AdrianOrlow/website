import styled from 'styled-components';
import { Colors } from '../../constants/index';

export const Container = styled.div`
  display: grid;
  grid-gap: 1.5rem;
`;

export const ElementContainer = styled.div`
  display: grid;
  grid-gap: 0.75rem;
  width: 100%;
`;

export const Title = styled.h2`
  margin: 0;
  font-size: 1.25rem;
  font-weight: 600;
  color: ${Colors.blueGreyish};
`;

export const List = styled.div`
  display: block;
  
  div {
    margin-bottom: 0.5rem;
    
    &:not(:last-child) {
      margin-right: 0.5rem;
    }
  }
`;
