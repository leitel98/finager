import { INCOME_CATEGORIES_FILTERS } from '@/constants';
import { createContext, FC, ReactNode, useContext, useState } from 'react';

interface FiltersContextI {
  incomeFilters: Record<string, boolean>;
  handleIncomeFilterChange: (category: string) => void;
}

const FiltersContext = createContext<FiltersContextI | undefined>(undefined);

export const FiltersProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [incomeFilters, setIncomeFilters] = useState<Record<string, boolean>>(
    INCOME_CATEGORIES_FILTERS
  );

  const handleIncomeFilterChange = (category: string) => {
    setIncomeFilters((prevFilters: Record<string, boolean>) => ({
      ...prevFilters,
      [category]: !prevFilters[category],
    }));
  };

  return (
    <FiltersContext.Provider
      value={{ incomeFilters, handleIncomeFilterChange }}
    >
      {children}
    </FiltersContext.Provider>
  );
};

export const useFilters = () => {
  const context = useContext(FiltersContext);
  if (!context) {
    throw new Error('useFilters must be used within a FiltersProvider');
  }
  return context;
};
