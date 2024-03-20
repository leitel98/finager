'use client';

import { useState } from 'react';

const INCOME_CATEGORIES: Record<string, boolean> = {
  salary: true,
  bonus: true,
  gift: true,
  other: true,
};

const DashboardComponent = () => {
  const [incomeFilters, setIncomeFilters] =
    useState<Record<string, boolean>>(INCOME_CATEGORIES);

  const handleIncomeFilterChange = (category: string) => {
    setIncomeFilters((prevFilters: Record<string, boolean>) => ({
      ...prevFilters,
      [category]: !prevFilters[category],
    }));
  };

  return (
    <div className='w-full min-h-screen grid grid-cols-7 p-8 bg-white text-slate-800'>
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
          <h2 className='text-lg font-medium mx-auto'>Outcome</h2>
        </div>
      </div>
      <div className='h-full flex flex-col gap-8 col-span-2'>
        <h1 className='text-xl font-bold mx-auto'>My data</h1>
      </div>
      <div className='h-full flex flex-col gap-8 col-span-4'>
        <h1 className='text-xl font-bold'>Summary</h1>
      </div>
    </div>
  );
};

export default DashboardComponent;
