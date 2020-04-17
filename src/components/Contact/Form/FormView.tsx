import React from 'react';

import {
  Container,
  Input,
  TextArea,
} from './FormStyle';
import Button from '../../../shared/Button';

interface Props {
  onSubmit(event: React.FormEvent<HTMLFormElement>): void;
  register: any;
}

const Form: React.FC<Props> = (props: Props) => {
  const { onSubmit, register } = props;

  return (
    <Container onSubmit={onSubmit}>
      <Input
        style={{ gridArea: 'name' }}
        placeholder="Name"
        name="name"
        ref={register}
      />
      <Input
        style={{ gridArea: 'email' }}
        placeholder="E-mail"
        name="email"
        ref={register}
      />
      <Input
        style={{ gridArea: 'topic' }}
        placeholder="Topic"
        name="topic"
        ref={register}
      />
      <TextArea
        style={{ gridArea: 'message' }}
        placeholder="Message"
        name="message"
        ref={register}
      />
      <Button
        style={{ gridArea: 'send' }}
        type="submit"
      >
        Send
      </Button>
    </Container>
  );
};

export default Form;
