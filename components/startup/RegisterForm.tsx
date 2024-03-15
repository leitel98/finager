'use client';
import React, { useState } from 'react';

interface RegisterFormI {
  email: string;
  name: string;
  password: string;
  confirmPassword: string;
}

const INITIAL_FORM_STATE: RegisterFormI = {
  email: '',
  name: '',
  password: '',
  confirmPassword: '',
};

const RegisterForm: React.FC = () => {
  const [form, setForm] = useState<RegisterFormI>(INITIAL_FORM_STATE);
  const [errors, setErrors] = useState({
    matchingPassword: { show: false, message: 'Password des not match' },
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let hasErrors = false;

    if (form.password !== form.confirmPassword) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        matchingPassword: { ...prevErrors.matchingPassword, show: true },
      }));
      hasErrors = true;
    }
    if (!hasErrors) {
      const response = await fetch('/api/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          password: form.password,
        }),
      });
      if (response.ok) {
        console.log('success creating user');
        setForm(INITIAL_FORM_STATE);
      } else {
        console.error('error creating user');
      }
    }
  };

  return (
    <form onSubmit={onSubmit} className='flex flex-col gap-2'>
      <label className='text-sm'>Email</label>
      <input
        type='email'
        placeholder='your@email.com'
        className='input'
        name='email'
        value={form.email}
        onChange={handleInputChange}
        required
      />
      <label className='text-sm'>Name</label>
      <input
        type='text'
        placeholder='Your Name'
        className='input'
        name='name'
        value={form.name}
        onChange={handleInputChange}
        required
      />
      <label className='text-sm'>Password</label>
      <input
        type='password'
        placeholder='Password'
        className='input'
        name='password'
        value={form.password}
        onChange={handleInputChange}
        required
      />

      <label className='text-sm'>Confirm Password</label>
      <input
        type='password'
        placeholder='Confirm Password'
        className='input'
        name='confirmPassword'
        value={form.confirmPassword}
        onChange={(e) => {
          handleInputChange(e);
          setErrors((prev) => {
            return {
              ...prev,
              matchingPassword: { ...prev.matchingPassword, show: false },
            };
          });
        }}
        required
      />
      {errors.matchingPassword.show && (
        <p className='text-red-500 text-sm'>
          {errors.matchingPassword.message}
        </p>
      )}
      <button
        type='submit'
        className='rounded-md px-6 py-3 shadow-md bg-cyan-600 w-min mx-auto mt-4 text-white hover:scale-105 hover:bg-cyan-400 transition-all duration-100'
      >
        Register
      </button>
    </form>
  );
};

export default RegisterForm;
