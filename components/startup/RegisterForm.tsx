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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  return (
    <section className='flex flex-col gap-2'>
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
        onChange={handleInputChange}
        required
      />
    </section>
  );
};

export default RegisterForm;
