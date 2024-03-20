'use client';

import { useFilters } from '@/context/FiltersProvider';
import Button from '../atoms/Button';

const IncomeFilters = () => {
  const { incomeFilters, handleIncomeFilterChange } = useFilters();
  return (
    <div className='flex flex-col w-full gap-2'>
      {Object.entries(incomeFilters).map(([category, active]) => (
        <Button
          onClick={() => handleIncomeFilterChange(category)}
          size='tag'
          color='cyan'
          active={active}
          key={category}
        >
          {category}
        </Button>
      ))}
    </div>
  );
};

export default IncomeFilters;
