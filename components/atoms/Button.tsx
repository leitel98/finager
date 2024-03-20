'use client';

import React, { ButtonHTMLAttributes } from 'react';
import Loading from '@/public/icons/Loading';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'icon' | 'tag' | 'sm' | 'md';
  color?: 'cyan' | 'rose' | 'emerald';
  active?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  size = 'md',
  color = 'cyan',
  active = true,
  ...rest
}) => {
  const colors = {
    cyan: `${
      active
        ? `bg-cyan-600 hover:bg-cyan-400 text-white`
        : 'bg-zinc-400/30 text-black hover:bg-zinc-400/30'
    }`,
    rose: `${
      active
        ? `bg-rose-600 hover:bg-rose-400 text-white`
        : 'bg-zinc-400/30 hover:bg-zinc-400/30 text-black'
    }`,
    emerald: `${
      active
        ? `bg-emerald-600 hover:bg-emerald-400 text-white`
        : 'bg-zinc-400/30 hover:bg-zinc-400/30 text-black'
    }`,
  };

  const sizes = {
    icon: 'flex items-center justify-center',
    tag: 'tag',
    sm: 'rounded-md px-4 py-2',
    md: 'rounded-md px-6 py-3',
  };

  return (
    <button
      className={`hover:scale-105 transition-all duration-100 shadow-md mx-auto whitespace-nowrap ${colors[color]} ${sizes[size]} ${rest.className}`}
      {...rest}
    >
      {rest.disabled ? (
        <Loading className='fill-white w-4 h-4 animate-spin' />
      ) : (
        rest.children
      )}
    </button>
  );
};

export default Button;
