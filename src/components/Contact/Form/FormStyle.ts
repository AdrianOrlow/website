import styled from 'styled-components';
import { InputStyle } from '../../../shared/Input';
import { Breakpoints, Colors } from '../../../constants';

export const Container = styled.form`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr) minmax(0, 1fr) minmax(0, 1fr);
  
  grid-template-areas:
    "name     name    email   email"
    "topic    topic   topic   topic" 
    "message  message message message"
    "result   result  info  send";
   
   .g-recaptcha {
    grid-area: info;
   } 
   
  .grecaptcha-badge {
    border-radius: 0.25rem;
    overflow: hidden;
  }
`;

export const Input = styled(InputStyle)`

`;

export const TextArea = styled(InputStyle).attrs({ as: 'textarea' })`
  min-height: 8rem;
  min-width: 100%;
  max-width: 100%;
  box-sizing: border-box;
  
  @media only screen and (min-width: ${Breakpoints.desktop}) {
    min-height: 12rem;
  }
`;

interface MessageProps {
  isError: boolean;
  show: boolean;
}

export const Result = styled.span<MessageProps>`
  grid-area: result;
  font-weight: 600;
  background: transparent;
  padding: 0.75rem 0.75rem 0.75rem 0;
  transition: 0.2s ease-in-out;
  
  ${(props: MessageProps) => (
    props.isError ? 'color: #EB5757;' : 'color: #6FCF97;'
  )};

  ${(props: MessageProps) => (
    props.show ? 'opacity: 1;' : 'opacity: 0;'
  )};
  
  @media only screen and (min-width: ${Breakpoints.mobile}) {
    padding: 1rem 1rem 1rem 0;
    font-size: 1.25rem;
  }
`;
