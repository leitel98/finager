'use client';

import { UserCircleIcon } from '@heroicons/react/24/outline';
import React, { useState } from 'react';

const UserNavModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <section className='relative'>
      <button onClick={toggleOpen}>
        <UserCircleIcon className='w-10 h-10 stroke-1' />
      </button>
      <div
        className={`absolute bg-white top-10 right-0 ${
          isOpen ? 'flex' : 'hidden'
        } p-4 rounded-md border border-slate-400`}
      >hi</div>
    </section>
  );
};

export default UserNavModal;
