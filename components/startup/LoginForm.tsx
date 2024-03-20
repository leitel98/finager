'use client';

import React, { useState } from 'react';
import { loginSchema } from '@/schemas';
import { LoginFormT } from '@/types';
import Button from '../atoms/Button';
import { Form, Formik, FormikHelpers } from 'formik';
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

  const handleSubmit = async (
    values: LoginFormT,
    actions: FormikHelpers<LoginFormT>
  ) => {
    const data = await signIn('credentials', {
      redirect: false,
      email: values.email,
      password: values.password,
    });
    if (data?.error) {
      showError();
      actions.setSubmitting(false);
    } else {
      window.location.href = '/dashboard';
    }
  };

  return (
    <>
      <Formik
        initialValues={INITIAL_FORM_STATE}
        validationSchema={loginSchema}
        onSubmit={handleSubmit}
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
