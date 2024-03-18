import React, { ButtonHTMLAttributes } from 'react';
import Loading from '@/public/icons/Loading';

const colors = {
  cyan: 'bg-cyan-600 hover:bg-cyan-400',
  rose: 'bg-rose-500 hover:bg-rose-400',
};

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'sm' | 'md';
  color?: 'cyan' | 'rose';
}

const Button: React.FC<ButtonProps> = ({
  size = 'md',
  color = 'cyan',
  ...rest
}) => {
  return (
    <button
      className={`rounded-md px-6 py-3 shadow-md w-min mx-auto mt-4 text-white hover:scale-105 transition-all duration-100 ${colors[color]}`}
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
