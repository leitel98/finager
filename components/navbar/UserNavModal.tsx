import { UserCircleIcon } from '@heroicons/react/24/outline';
import React from 'react';

const UserNavModal: React.FC = () => {
  return (
    <section className='flex items-center gap-2'>
      <UserCircleIcon className='w-10 h-10 stroke-1' />
    </section>
  );
};

export default UserNavModal;
