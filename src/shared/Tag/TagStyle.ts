import styled from 'styled-components';
import { Colors, Breakpoints } from '../../constants';

export const Container = styled.div`
  display: inline-flex;
  padding: 0.5rem;
  border-radius: 0.25rem;
  font-weight: 500;
  color: ${Colors.blueGreyish};
  background: ${Colors.blueLight};
  
  @media only screen and (min-width: ${Breakpoints.mobile}) {
   padding: 0.75rem;
  }
`;
