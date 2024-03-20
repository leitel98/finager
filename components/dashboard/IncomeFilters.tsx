'use client';

import { useFilters } from '@/context/FiltersProvider';

const IncomeFilters = () => {
  const { incomeFilters, handleIncomeFilterChange } = useFilters();

  return (
    <>
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
    </>
  );
};

export default IncomeFilters;
