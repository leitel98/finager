'use client';

import React from 'react';
import { registerSchema } from '@/schemas';
import { RegisterFormT } from '@/types';
import Button from '../atoms/Button';
import { Form, Formik, FormikHelpers } from 'formik';
import { useRouter } from 'next/navigation';
import Input from '../atoms/Input';

const INITIAL_FORM_STATE: RegisterFormT = {
  email: '',
  name: '',
  password: '',
  confirmPassword: '',
};

const RegisterForm: React.FC = () => {
  const router = useRouter();

  const handleSubmit = async (
    values: RegisterFormT,
    actions: FormikHelpers<RegisterFormT>
  ) => {
    const response = await fetch('/api/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: values.name,
        email: values.email,
        password: values.password,
      }),
    });
    if (response.ok) {
      actions.setSubmitting(false);
      router.push('/?type=login');
    } else {
      console.error('error creating user');
    }
  };

  return (
    <Formik
      initialValues={INITIAL_FORM_STATE}
      validationSchema={registerSchema}
      enableReinitialize
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form className='flex flex-col gap-4'>
          <Input type='text' name='name' placeholder='Your Name' label='Name' />
          <Input
            type='email'
            name='email'
            placeholder='your@email.com'
            label='Email'
          />
          <Input
            type='password'
            name='password'
            placeholder='*******'
            label='Password'
          />
          <Input
            type='password'
            name='confirmPassword'
            placeholder='*******'
            label='Confirm Password'
          />
          <Button type='submit' disabled={isSubmitting}>
            Register
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default RegisterForm;
