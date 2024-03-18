'use client';

import React from 'react';
import { loginSchema } from '@/schemas';
import { LoginFormT } from '@/types';
import Button from '../atoms/Button';
import { ErrorMessage, Field, Form, Formik } from 'formik';

const INITIAL_FORM_STATE: LoginFormT = {
  email: '',
  password: '',
};

const LoginForm: React.FC = () => {
  const handleSubmit = async (values: LoginFormT, setSubmitting: any) => {
    const response = await fetch('/api/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: values.email,
        password: values.password,
      }),
    });
    if (response.ok) {
      setSubmitting(false);
    } else {
      console.error('error creating user');
    }
  };

  return (
    <Formik
      initialValues={INITIAL_FORM_STATE}
      validationSchema={loginSchema}
      onSubmit={(values, { setSubmitting }) => {
        handleSubmit(values, setSubmitting);
      }}
    >
      {({ isSubmitting }) => (
        <Form className='flex flex-col gap-4'>
          <div className='flex flex-col'>
            <label htmlFor='email'>Email</label>
            <Field
              type='email'
              id='email'
              name='email'
              placeholder='your@email.com'
              className='input'
            />
            <ErrorMessage
              name='email'
              component='div'
              className='text-red-500 text-sm'
            />
          </div>

          <div className='flex flex-col'>
            <label htmlFor='password'>Password</label>
            <Field
              type='password'
              id='password'
              name='password'
              placeholder='********'
              className='input'
            />
            <ErrorMessage
              name='password'
              component='div'
              className='text-red-500 text-sm'
            />
          </div>
          <Button type='submit' disabled={isSubmitting}>
            Login
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
