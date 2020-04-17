import React from 'react';
import { useForm } from 'react-hook-form';

import { FormData } from './FormTypes';
import View from './FormView';

const Form: React.FC = () => {
 const { register, handleSubmit } = useForm<FormData>();
 const onSubmit = handleSubmit((data: FormData) => {
  console.log(data);
 });

 return (
   <View
     onSubmit={onSubmit}
     register={register}
   />
 )
};

export default Form;
