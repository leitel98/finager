'use client';

import { useFilters } from '@/context/FiltersProvider';
import Button from '../atoms/Button';

const IncomeFilters = () => {
  const { incomeFilters, handleIncomeFilterChange } = useFilters();
  return (
    <>
      {Object.entries(incomeFilters).map(([category, active]) => (
        <Button
          onClick={() => handleIncomeFilterChange(category)}
          size='tag'
          color='emerald'
          active={active}
          key={category}
        >
          {category}
        </Button>
      ))}
    </>
  );
};

export default IncomeFilters;
