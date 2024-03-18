import React from 'react';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { UserCircleIcon } from '@heroicons/react/24/outline';

const Navbar: React.FC = async () => {
  const session = await getServerSession(authOptions);
  console.log(session);
  return (
    <nav className='fixed z-50 bg-white top-0 w-full flex items-center justify-center py-4 shadow-md'>
      <div className='flex justify-between items-center w-full max-w-6xl'>
        <h1 className='text-4xl font-bold text-rose-500'>Finager</h1>
        <div className='flex items-center gap-2'>
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
