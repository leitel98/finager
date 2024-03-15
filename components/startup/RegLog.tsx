'use client';

import React, { useState } from 'react';
import RegisterForm from './RegisterForm';

type StartupT = 'register' | 'login';

const RegLog: React.FC = () => {
  const [type, setType] = useState<StartupT>('register');

  return (
    <div className='flex flex-col gap-4 p-4 rounded-lg border border-zinc-400 bg-white'>
      <section id='controls' className='flex items-center gap-2 mx-auto'>
        <button
          onClick={() => setType('register')}
          className={`px-6 py-3 rounded-md shadow-md hover:scale-105 transition-all duration-75 ${
            type === 'register' && 'bg-rose-500 text-white'
          }`}
        >
          Register
        </button>
        <button
          onClick={() => setType('login')}
          className={`px-6 py-3 rounded-md shadow-md hover:scale-105 transition-all duration-75 ${
            type === 'login' && 'bg-rose-500 text-white'
          }`}
        >
          Log In
        </button>
      </section>
      <RegisterForm />
    </div>
  );
};

export default RegLog;
