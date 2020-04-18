import React from 'react';
import { useForm } from 'react-hook-form';

import { ContactFormData, ContactFormResult } from '../../../types';
import View from './FormView';
import { initialResult } from './FormUtils';

const Form: React.FC = () => {
  const { register, handleSubmit, formState, setValue } = useForm<ContactFormData>();
  const [result, setResult] = React.useState<ContactFormResult>(initialResult);

  const onSubmit = handleSubmit(async (data: ContactFormData) => {
    console.log(data);
    const res = await fetch('/api/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    const isError = res.status !== 200;
    const message = await res.text();
    const result = { isError, message };

    setResult(result);

    setTimeout(() => (
      setResult(initialResult)
    ), 5000);
  });

  return (
    <View
      onSubmit={onSubmit}
      formState={formState}
      result={result}
      register={register}
      setValue={setValue}
    />
  );
};

export default Form;
