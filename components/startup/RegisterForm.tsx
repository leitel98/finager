'use client';

import React from 'react';
import Loading from '@/public/icons/Loading';
import { registerSchema } from '@/schemas';
import { RegisterFormT } from '@/types';
import Button from '../atoms/Button';
import { ErrorMessage, Field, Form, Formik } from 'formik';

const INITIAL_FORM_STATE: RegisterFormT = {
  email: '',
  name: '',
  password: '',
  confirmPassword: '',
};

const RegisterForm: React.FC = () => {
  const handleSubmit = async (values: RegisterFormT, setSubmitting: any) => {
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
      setSubmitting(false);
    } else {
      console.error('error creating user');
    }
  };

  return (
    <Formik
      initialValues={INITIAL_FORM_STATE}
      validationSchema={registerSchema}
      onSubmit={(values, { setSubmitting }) => {
        handleSubmit(values, setSubmitting);
      }}
    >
      {({ isSubmitting }) => (
        <Form className='flex flex-col gap-4'>
          <div className='flex flex-col'>
            <label htmlFor='name'>Name</label>
            <Field
              type='text'
              id='name'
              name='name'
              placeholder='Your Name'
              className='input'
            />
            <ErrorMessage
              name='name'
              component='div'
              className='text-red-500 text-sm'
            />
          </div>

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

          <div className='flex flex-col'>
            <label htmlFor='confirmPassword'>Confirm Password</label>
            <Field
              type='password'
              id='confirmPassword'
              name='confirmPassword'
              placeholder='*********'
              className='input'
            />
            <ErrorMessage
              name='confirmPassword'
              component='div'
              className='text-red-500 text-sm'
            />
          </div>
          <Button type='submit' disabled={isSubmitting}>
            {isSubmitting ? (
              <Loading className='fill-black w-4 h-4 animate-spin' />
            ) : (
              'Register'
            )}
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default RegisterForm;
