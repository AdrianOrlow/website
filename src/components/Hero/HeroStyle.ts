import styled from 'styled-components';
import { Colors } from '../../constants';

export const Container = styled.section`
  height: 100vh;
  background: ${Colors.whiteDark};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Inner = styled.div`
`;

export const Title = styled.h1`
  margin: 0;
  line-height: 1;
  font-size: 3rem;
  font-weight: 600;
  color: ${Colors.blackBluish};
`;

export const Subtitle = styled.h2`
  margin: 0;
  font-size: 1.75rem;
  font-weight: 500;
  color: ${Colors.blueGreyish};
`;

export const Actions = styled.div`
  display: flex;
  padding-top: 1rem;
  
  button:not(:last-child) {
    margin-right: 0.5rem;
  }
`;
