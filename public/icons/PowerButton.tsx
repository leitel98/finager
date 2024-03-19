import React from 'react';

const PowerButton = ({ className }: { className: string }) => {
  return (
    <svg viewBox='0 0 64 64' className={className}>
      <path
        d='M39 12a23.35 23.35 0 11-14.17.05M32 6.32v20.23'
        strokeLinecap='round'
      ></path>
    </svg>
  );
};

export default PowerButton;
