import styled from 'styled-components';
import Input, { InputStyle } from '../../../shared/Input';

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

export { Input };

export const TextArea = styled(Input, { as: 'textarea' })`

`;
