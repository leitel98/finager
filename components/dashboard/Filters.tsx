'use client';

import { useFilters } from '@/context/FiltersProvider';

const Filters = () => {
  const { incomeFilters, handleIncomeFilterChange } = useFilters();

  return (
    <div className='h-full flex flex-col gap-4 col-span-1'>
      <h1 className='text-xl font-bold mx-auto'>Filters</h1>
      <div className='flex flex-col gap-4'>
        <h2 className='text-lg font-medium mx-auto'>Income</h2>
        {Object.entries(incomeFilters).map(([category, enabled]) => (
          <button
            onClick={() => handleIncomeFilterChange(category)}
            className={`border border-slate-900 rounded-tl-lg rounded-br-lg py-1 capitalize ${
              !enabled ? 'bg-zinc-400/30' : 'bg-emerald-600 text-white'
            }`}
            key={category}
          >
            {category}
          </button>
        ))}
        <h2 className='text-lg font-medium mx-auto'>Expenses</h2>
      </div>
    </div>
  );
};

export default Filters;
