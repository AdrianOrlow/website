import React from 'react';
import { FormStateProxy } from 'react-hook-form';
import Reaptcha from 'reaptcha';

import Button from '../../../shared/Button';
import { ContactFormData, ContactFormResult } from '../../../types';
import {
  Container,
  Input,
  TextArea,
  Result,
} from './FormStyle';
import { initialResult } from './FormUtils';

interface Props {
  onSubmit(event: React.FormEvent<HTMLFormElement>): void;
  result: ContactFormResult;
  formState: FormStateProxy<ContactFormData>;
  register: any;
  setValue(name: string, value?: string, shouldValidate?: boolean): void;
}

const Form: React.FC<Props> = (props: Props) => {
  const {
    onSubmit,
    register,
    formState,
    result,
    setValue,
  } = props;
  const { isSubmitting, dirty } = formState;
  const recaptchaSiteKey = process.env.RECAPTCHA_CLIENT_KEY;

  const recaptchaRef = React.createRef<Reaptcha>();
  const [captchaReady, setCaptchaReady] = React.useState<boolean>(false);

  const handleTokenVerify = (token: string) => (
    setValue('recaptcha', token)
  );

  const handleCaptchaLoaded = () => (
    setCaptchaReady(true)
  );

  React.useEffect(() => {
    captchaReady && recaptchaRef.current.execute();
  }, [captchaReady]);

  React.useEffect(() => {
    dirty && !captchaReady && recaptchaRef.current.renderExplicitly();
  }, [dirty]);

  React.useEffect(() => {
    register({ name: 'recaptcha' }, { required: true });
  }, []);

  return (
    <Container onSubmit={onSubmit}>
      <Input
        style={{ gridArea: 'name' }}
        placeholder="Name"
        name="name"
        type="text"
        ref={register({ required: true })}
      />
      <Input
        style={{ gridArea: 'email' }}
        placeholder="E-mail"
        name="email"
        type="email"
        ref={register({ required: true, pattern: /[^@\s]+@[^@\s]+\.[^@\s]+/ })}
      />
      <Input
        style={{ gridArea: 'topic' }}
        placeholder="Topic"
        name="topic"
        type="text"
        ref={register({ required: true })}
      />
      <TextArea
        style={{ gridArea: 'message' }}
        placeholder="Message"
        name="message"
        type="text"
        ref={register({ required: true })}
      />
      <Reaptcha
        size="invisible"
        theme="dark"
        onRender={handleCaptchaLoaded}
        onVerify={handleTokenVerify}
        sitekey={recaptchaSiteKey}
        ref={recaptchaRef}
        explicit
      />
      <Button
        style={{ gridArea: 'send' }}
        disabled={isSubmitting || !dirty}
        loading={isSubmitting ? isSubmitting : undefined}
        type="submit"
      >
        Send
      </Button>
      <Result
        show={result !== initialResult}
        isError={result.isError}
      >
        {result.message}
      </Result>
    </Container>
  );
};

export default Form;
