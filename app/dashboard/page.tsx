import ExpensesFilters from '@/components/dashboard/ExpensesFilters';
import IncomeFilters from '@/components/dashboard/IncomeFilters';
import NewMovementForm from '@/components/dashboard/NewMovementForm';
import { authOptions } from '@/lib/auth';
import { getServerSession } from 'next-auth';
import { redirect, RedirectType } from 'next/navigation';

export default async function Dashboard() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect('/?type=login', RedirectType.replace);
  }
  return (
    <div className='w-full min-h-screen grid grid-cols-7 p-8 bg-white text-slate-800'>
      <section className='h-full flex flex-col gap-4 col-span-1'>
        <h1 className='text-xl font-bold mx-auto'>Filters</h1>
        <div className='flex flex-col gap-4'>
          <h2 className='text-lg font-medium mx-auto'>Income</h2>
          <IncomeFilters />
          <h2 className='text-lg font-medium mx-auto'>Expenses</h2>
          <ExpensesFilters />
        </div>
      </section>
      <section className='h-full flex flex-col items-center gap-4 col-span-2'>
        <h1 className='text-xl font-bold mx-auto'>My data</h1>
        <NewMovementForm />
      </section>
      <section className='h-full flex flex-col gap-8 col-span-4'>
        <h1 className='text-xl font-bold'>Summary</h1>
      </section>
    </div>
  );
}
