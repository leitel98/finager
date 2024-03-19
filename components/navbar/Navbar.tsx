import React from 'react';
import { authOptions } from '@/lib/auth';
import { UserCircleIcon } from '@heroicons/react/24/outline';
import { getServerSession } from 'next-auth';
import SignOutButton from '../atoms/SignOutButton';

const Navbar: React.FC = async () => {
  const session = await getServerSession(authOptions);
  return (
    <nav className='fixed z-50 bg-white top-0 w-full flex items-center justify-center py-4 shadow-md'>
      <div className='flex justify-between items-center w-full max-w-7xl 2xl:max-w-8xl'>
        <h1 className='text-4xl font-bold text-rose-500'>Finager</h1>
        <div className='flex items-center gap-2'>
          {session?.user && <SignOutButton />}
          <UserCircleIcon className='w-10 h-10 stroke-1' />
          {session?.user
            ? `Welcome ${session.user.name?.split(' ')[0]}!`
            : 'Please log in'}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
