import Filters from '@/components/dashboard/Filters';
import { authOptions } from '@/lib/auth';
import { getServerSession } from 'next-auth';
import { redirect, RedirectType } from 'next/navigation';

async function Dashboard() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect('/?type=login', RedirectType.replace);
  }
  return (
    <div className='w-full min-h-screen grid grid-cols-7 p-8 bg-white text-slate-800'>
      <Filters />
      <div className='h-full flex flex-col gap-8 col-span-2'>
        <h1 className='text-xl font-bold mx-auto'>My data</h1>
      </div>
      <div className='h-full flex flex-col gap-8 col-span-4'>
        <h1 className='text-xl font-bold'>Summary</h1>
      </div>
    </div>
  );
}

export default Dashboard;
