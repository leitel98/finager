'use client';

import React, { ButtonHTMLAttributes } from 'react';
import Loading from '@/public/icons/Loading';

const colors = {
  cyan: 'bg-cyan-600 hover:bg-cyan-400 text-white',
  rose: 'bg-rose-500 hover:bg-rose-400 text-white',
};

const sizes = {
  icon: 'flex items-center justify-center',
  sm: 'rounded-md px-4 py-2 shadow-md w-min mx-auto whitespace-nowrap',
  md: 'rounded-md px-6 py-3 shadow-md w-min mx-auto whitespace-nowrap',
};

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'icon' | 'sm' | 'md';
  color?: 'cyan' | 'rose';
}

const Button: React.FC<ButtonProps> = ({
  size = 'md',
  color = 'cyan',
  ...rest
}) => {
  return (
    <button
      className={`hover:scale-105 transition-all duration-100 ${colors[color]} ${sizes[size]} ${rest.className}`}
      {...rest}
    >
      {rest.disabled ? (
        <Loading className='fill-black w-4 h-4 animate-spin' />
      ) : (
        rest.children
      )}
    </button>
  );
};

export default Button;
