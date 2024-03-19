'use client';

import React, { useState } from 'react';
import { loginSchema } from '@/schemas';
import { LoginFormT } from '@/types';
import Button from '../atoms/Button';
import { Form, Formik } from 'formik';
import { signIn } from 'next-auth/react';
import Input from '../atoms/Input';

const INITIAL_FORM_STATE: LoginFormT = {
  email: '',
  password: '',
};

const LoginForm: React.FC = () => {
  const [error, setError] = useState<null | string>(null);

  const showError = () => {
    setError('Your credentials failed to sign in');
    setTimeout(() => {
      setError(null);
    }, 3000);
  };

  const handleSubmit = async (values: LoginFormT, setSubmitting: any) => {
    const data = await signIn('credentials', {
      redirect: false,
      email: values.email,
      password: values.password,
    });
    if (data?.error) {
      showError();
      setSubmitting(false);
    } else {
      window.location.href = '/dashboard';
    }
  };

  return (
    <>
      <Formik
        initialValues={INITIAL_FORM_STATE}
        validationSchema={loginSchema}
        onSubmit={(values, { setSubmitting }) => {
          handleSubmit(values, setSubmitting);
        }}
      >
        {({ isSubmitting }) => (
          <Form className='flex flex-col gap-4'>
            <Input
              type='email'
              name='email'
              placeholder='your@email.com'
              label='Email'
            />
            <Input
              type='password'
              name='password'
              placeholder='******'
              label='Password'
            />
            <Button type='submit' disabled={isSubmitting}>
              Login
            </Button>
          </Form>
        )}
      </Formik>
      {error && <p className='text-sm text-red-500 mx-auto'>{error}</p>}
    </>
  );
};

export default LoginForm;
