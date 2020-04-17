import styled from 'styled-components';
import { InputStyle } from '../../../shared/Input';
import { Breakpoints } from '../../../constants';

export const Container = styled.form`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  
  grid-template-areas:
    "name email"
    "topic topic"
    "message message"
    ". send";
`;

export const Input = styled(InputStyle)`

`;

export const TextArea = styled(InputStyle).attrs({ as: 'textarea' })`
  min-height: 6rem;
  min-width: 100%;
  max-width: 100%;
  box-sizing: border-box;
  
  @media only screen and (min-width: ${Breakpoints.mobile}) {
    min-height: 8rem;
  }
  
  @media only screen and (min-width: ${Breakpoints.desktop}) {
    min-height: 12rem;
  }
`;
