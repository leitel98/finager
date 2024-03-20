'use client';

import { useFilters } from '@/context/FiltersProvider';
import Button from '../atoms/Button';

const ExpensesFilters = () => {
  const { expensesFilters, handleExpensesFilterChange } = useFilters();
  return (
    <div className='flex flex-col w-full gap-2'>
      {Object.entries(expensesFilters).map(([category, active]) => (
        <Button
          onClick={() => handleExpensesFilterChange(category)}
          size='tag'
          color='rose'
          active={active}
          key={category}
        >
          {category}
        </Button>
      ))}
    </div>
  );
};

export default ExpensesFilters;
