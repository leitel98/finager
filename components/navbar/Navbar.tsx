import { UserCircleIcon } from '@heroicons/react/24/outline';
import React from 'react';
import UserNavModal from './UserNavModal';

const Navbar: React.FC = () => {
  return (
    <nav className='fixed z-50 bg-white top-0 w-full flex items-center justify-center py-4 shadow-md'>
      <div className='flex justify-between items-center w-full max-w-6xl'>
        <h1 className='text-4xl font-bold text-rose-500'>Finager</h1>
        <UserNavModal />
      </div>
    </nav>
  );
};

export default Navbar;
