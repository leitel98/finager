import { ErrorMessage, Field } from 'formik';
import React, { FC } from 'react';

interface InputI {
  type: string;
  name: string;
  placeholder: string;
  label: string;
}

const Input: FC<InputI> = ({ type, name, placeholder, label }) => {
  return (
    <div className='flex flex-col'>
      <label htmlFor={name}>{label}</label>
      <Field
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        className='input'
      />
      <ErrorMessage
        name={name}
        component='div'
        className='text-red-500 text-sm'
      />
    </div>
  );
};

export default Input;
